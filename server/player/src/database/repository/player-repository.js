const mongoose = require('mongoose');
const { playerModel } = require('../models');

//Dealing with data base operations
class PlayerRepository 
{
    async createPlayer({username, password, salt})
    {
        const player = new playerModel({
            username,
            player,
            salt,
            stats: [],
        })

        const playerResult = await player.save();
        return playerResult;
    }
    
    async findPlayer({ username }){
        const existingCustomer = await playerModel.findOne({ username: username });
        return existingCustomer;
    }
    
    async findPlayerById({ id }){
    
        const existingPlayer = await playerModel.findById(id).populate('player');
        // existingCustomer.cart = [];
        // existingCustomer.orders = [];
        // existingCustomer.wishlist = [];
    
        // await existingCustomer.save();
        return existingCustomer;
    }
    
    // async createStats(playerId, { _id, wins, loss, percentage}){
    //     const profile = await playerModel.findById(playerId).populate('stats');
    
    //     if(profile)
    //     {
    //         const statistics = {
    //             totalWins : wins,
    //             totalLoss :  loss,
    //             winPercentage: percentage,
    //         };
    
    //         let statItems = profile.stats;
    
    //     }
    // }
}


module.exports = PlayerRepository;