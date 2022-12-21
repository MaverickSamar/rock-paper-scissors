const PlayerService = require("../services/player-service");

module.exports = (app) => {
    
    const service = new PlayerService();
    app.use('/game-events',async (req,res,next) => {

        const { payload } = req.body;

        //handle subscribe events
        //service.SubscribeEvents(payload);

        console.log("============= Game ================");
        console.log(payload);
        res.json(payload);
    });
}