const mongoose = require('mongoose');
const { DB_URL } = require('../config');
const url = 'mongodb+srv://rps:vqEiViP7Pvj5XUoJ@cluster0.84w5vhp.mongodb.net/?retryWrites=true&w=majority';
module.exports = async() => {

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.error('Error ON DB Connection')
        console.log(error);
    }
};