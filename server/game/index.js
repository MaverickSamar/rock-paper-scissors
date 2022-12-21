const computeWinner = require("./game.js")
const express = require('express');

const app = express();

app.use(express.json());

app.use('/game', (req,res,next) => 
{
    // let playerChoice = req.body.choice;
    // let computerChoice = Math.random(3)
    // if (playerOne.choice && playerTwo?.choice) {
    //     let winner = computeWinner(playerOne, playerTwo);

    //     if (winner !== "draw") {
    //         winner.score++;
    //     }

    //     io.to(rooms[client.id]).emit("rps-winner", winner);

    //     playerOne.choice = "";
    //     playerTwo.choice = "";
    // }

    return res.status(200).json({"msg": "Hello from Game"})
})


app.listen(8002, () => {
    console.log('Game is Listening to Port 8002')
})