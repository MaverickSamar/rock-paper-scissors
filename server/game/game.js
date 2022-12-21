var rs = require('readline-sync');

// User selects either rock, paper, or scissors:
const userChoice = () => {
    options = ['rock', 'paper', 'scissors', 'I can not decide'],
    index = rs.keyInSelect(options, "Select something to throw: ");
    let randomNumber = Math.floor(Math.random() * 5);
    if (options[index] === 'I can not decide') {
        switch(randomNumber)
         {
            case 0:
                options[index] = 'rock';
                break;
            case 1:
                options[index] = 'paper';
                break;
            case 2:
                options[index] = 'scissors';
                break;
            case 3:
                options[index] = 'bomb';
                break;
            case 4:
                options[index] = 'suicide bomb';
                break;
        }
    } 
    return options[index];
}

// Computer selection:
const compChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

// Play game:
const playGame = () => {
    userThrow = userChoice();
    computerThrow = compChoice();
    if (userThrow != undefined) {
        console.log(`The human throws ${userThrow} & the machine throws ${computerThrow}.`);
    } else {
        console.log('The user has canceled the game.');
    }
    let result = '';

    // Code for the possible outcomes:
    // If a tie:
    if (userThrow === computerThrow) {
        result =`It's a tie.`;
    } 

    // If user throws bomb:
    if (userThrow === 'bomb') {
        result = "The user wins in a blowout!";
    }

    // If user throws suicide bomb:
    if (userThrow === 'suicide bomb') {
        result = "The machine wins in a blowout!";
    }

    // If user throws rock:
    if (userThrow === 'rock') {
        if (computerThrow === 'paper') {
            result = "The machine wins.";
        } else if (computerThrow === 'scissors') {
            result = "The human wins.";
        }
    }

    // If user throws paper:
    if (userThrow === 'paper') {
        if (computerThrow === 'scissors') {
            result = "The machine wins.";
        } else if (computerThrow === 'rock') {
            result = "The human wins.";
        }
    }

    // If user throws scissors:
    if (userThrow === 'scissors') {
        if (computerThrow === 'rock') {
            result = "The machine wins.";
        } else if (computerThrow === 'paper') {
            result = "The human wins.";
        }
    }
    console.log(result);
    return result;
}
playGame();