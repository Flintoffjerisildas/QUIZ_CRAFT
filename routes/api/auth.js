const express = require('express');
const auth = require('../../middleware/auth');
const User = require('../../model/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const {check, validationResult } = require('express-validator');


const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// Login auth
router.post('/', [

    check('email', 'Enter valid Email').isEmail(),
    check('password', 'Password required').exists()

] , async (req, res) => {
   
    const errors = validationResult(req);

    if(! errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }

    const { email , password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({errors:[{msg:'Invalid Creadintials'}] });
        }

        const is_ok = await bcrypt.compare(password,user.password);

        if (! is_ok) {
            return res.status(400).json({errors:[{msg:'Invalid Creadintials'}] });
        }

        const payLoad = {
            user:{
                id:user.id,
                name:user.name
            }
        };

        // JWT Signing get
        jwt.sign( payLoad, 
            config.get('jwtSectet'),
        { expiresIn: 3600000 },
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