const express = require('express');
const {check, validationResult } = require('express-validator');
const User = require('../../model/User');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();

router.post('/', [

    check('name', 'valid name Required').not().isEmpty(),
    check('email', 'Enter valid Email').isEmail(),
    check('password', 'Strong password with > 6 character required').isLength({min:6})

] , async (req, res) => {
   
    const errors = validationResult(req);

    if(! errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }

    const {name , email , password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({errors:[{msg:'User already exist'}] });
        }

        const avatar = gravatar.url(email, {
            s:'200',
            r:'pg',
            d:'mm'
        });

        user = new User({
            name,
            email,
            avatar,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();


        const payLoad = {
            user:{
                id:user.id
            }
        };

        // JWT Signing get
        jwt.sign( payLoad, 
            config.get('jwtSectet'),
        { expiresIn: 360000 },
         (err, token) => {
            if(err) throw err;

            res.json({token});
         });


    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error!');
    }
});

module.exports = router;