const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
    try{
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    }
    catch(err)
    {
        console.log("----Error----");
        console.log(err);
    }
}