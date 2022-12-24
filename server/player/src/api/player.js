const PlayerService = require('../services/player-service');
const  UserAuth = require('./middlewares/auth');
const { SubscribeMessage } = require('../utils');


module.exports = (app, channel) => {
    
    const service = new PlayerService();

    // To listen
    SubscribeMessage(channel, service);


    app.post('/register', async (req,res,next) => {
        const { username, password } = req.body;
        console.log(username, "Server");
        console.log(password, "Server")
        const { data } = await service.signUp({ username, password }); 
        res.json(data);
    });

    app.post('/login',  async (req,res,next) => {
        
        const { username, password } = req.body;

        const { data } = await service.signIn({ username, password});

        res.json(data);

    });

    app.get('/profile', UserAuth ,async (req,res,next) => {

        const { _id } = req.user;
        const { data } = await service.getProfile({ _id });
        res.json(data);
    });
}