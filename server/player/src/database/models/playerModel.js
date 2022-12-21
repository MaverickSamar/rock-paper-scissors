const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    username: String,
    password: String,
    salt: String,
    stats: [
        {
            totalWins: {type: Number},
            totalLoss: {type: Number},
            winPercentage: {type: Number},
        }
    ],
},
{
    toJSON: {
        transform(doc, ret){
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports =  mongoose.model('player', playerSchema);