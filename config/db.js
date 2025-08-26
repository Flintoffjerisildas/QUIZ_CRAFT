const mango = require('mongoose');
const config = require('config');
const Mongopass = config.get('URI');

const dataMongo = async () =>{

    try {
        await mango.connect(Mongopass,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('MongoDB Connected! ');

    } catch (error) {
        console.error('Mongo Error! '+error.message);

        process.exit(1);
    }
};

module.exports = dataMongo;