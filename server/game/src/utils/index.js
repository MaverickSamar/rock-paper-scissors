const amqplib = require('amqplib');

const {
    EXCHANGE_NAME,
    MSG_QUEUE_URL,
} = require("../config");

module.exports.CreateChannel = async() => {
    try{
        const connection = await amqplib.connect(MSG_QUEUE_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(EXCHANGE_NAME, "direct", { durable: true});
        return channel;
    }
    catch(err)
    {
        console.log("----Error----");
        console.log(err);
    }
}