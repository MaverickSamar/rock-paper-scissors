module.exports = (app, channel) => {

    app.use('/', async(req,res,next) => {

        console.log("Hello from game");
        return res.status(200).json({"msg": "Hello from Game"})
    })

    // app.post('/game', async (req,res,next) => {
    //     const { username, password } = req.body;
    //     const { data } = await service.signUp({ username, password }); 
    //     res.json(data);

    // });
}