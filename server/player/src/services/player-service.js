const { playerRepository } = require("../database");
const { FormateData, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } = require('../utils');

// All Business logic will be here
class PlayerService{

    constructor(){
        this.repository = new playerRepository();
    }

    async signIn(userInputs){
        const { username, password } = userInputs;

        const existingPlayer = await this.repository.findPlayer({ username });
        if(existingPlayer)
        {
            const validPassword = await ValidatePassword(password, existingPlayer.password, existingPlayer.salt);
            if(validPassword)
            {
                const token = await GenerateSignature({ username: existingPlayer.username, _id: existingPlayer._id});
                return FormateData({id: existingPlayer._id, token});
            }
        }
        return FormateData(null);         
    }

    async signUp(userInputs)
    {
        const { username, password } = userInputs;

        let salt = await GenerateSalt();

        let userPassword = await GeneratePassword(password, salt);

        const existingPlayer = await this.repository.createPlayer({ username, password: userPassword, salt});

        const token = await GenerateSignature({ username: username, _id: existingPlayer._id});

        return FormateData({id: existingPlayer._id, token});
    }

    async getProfile(id)
    {
        const existingPlayer = await this.repository.findPlayerById({id});
        return FormateData(existingPlayer);
    }
}


module.exports = PlayerService;