//express
const express = require('express');
const { PORT } = require('./config')
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const { CreateChannel } = require('./utils');

const startServer = async() => {
    
    const app = express();

    await databaseConnection();

    app.use('/', (req, res) => {
        return res.status(200).json({"msg": "Hello from Player"});
    })

    // const channel = await CreateChannel();

    // await expressApp(app, channel);
    const PORT = 8001 || process.env.PORT;
    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    }).on('error', (err) => {
        console.log(err);
        process.exit();
    }).on('close', () => {
        channel.close();
    })
}

startServer();