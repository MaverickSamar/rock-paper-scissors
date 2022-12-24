const mongoose = require('mongoose');
const { playerModel } = require('../models');

//Dealing with data base operations
class PlayerRepository 
{
    async createPlayer({username, password, salt})
    {
        const player = new playerModel({
            username,
            password,
            salt,
        })

        const playerResult = await player.save();
        return playerResult;
    }
    
    async findPlayer({ username }){
        const existingPlayer = await playerModel.findOne({ username: username });
        return existingPlayer;
    }
    
    async findPlayerById({ id }){
    
        const existingPlayer = await playerModel.findById(id).populate('player');
    
        return existingPlayer;
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