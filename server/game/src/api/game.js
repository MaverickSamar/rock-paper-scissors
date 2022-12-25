module.exports = (app, channel) => {

    app.get('/play', async(req, res, next) => {

        const index = Math.floor(Math.random() * 3);

        res.status(200).json(index);
    })



    // app.post('/game', async (req,res,next) => {
    //     const { username, password } = req.body;
    //     const { data } = await service.signUp({ username, password }); 
    //     res.json(data);

    // });
}