# Rock Paper Scissors ReactJS + NodeJS

Basic rock, paper and scissors game competing with the computer by Samarth Ranjan.
The client was built using ReactJs and a backend microservice was created using NodeJs.

## Game Microservice

Generates a random token move using javascript and returns to client determining who won the round.

## Player Microservice

Stores player's username and password providing Login and SignUp functionalities.

## Gateway Proxy

Runs a development server on [http://localhost:8000](http://localhost:8000) and redirects 
Player Microservice requests to [http://localhost:8001](http://localhost:8001)
&
Game Microservice requests to [http://localhost:8002](http://localhost:8002)

## To run the client

In the client project directory, type:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## To run the server

In the root folder, type:

### `cd server`

This will take you in the server directory.

Now, in the server project directory, type:

### `cd gateway`

This will take you to main gateway server.

Now, type:

### `npm run start`

Runs the gateway server proxy in the development mode on [http://localhost:8000](http://localhost:8000).

Open [http://localhost:8000](http://localhost:8000) to view it in your browser.



