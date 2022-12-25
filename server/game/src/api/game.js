module.exports = (app, channel) => {

    app.get('/play', async(req, res, next) => {

        const index = Math.floor(Math.random() * 3);
        console.log(index, "index");
        res.status(200).json({ind : index});
    })
}