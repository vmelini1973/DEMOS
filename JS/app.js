const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";
let player ="";



console.log('Bienvenido al texas hold '+"'"+ 'em.' )

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -= 25;
playerThreePoints += 75;


gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0); 
                player = playerOneName || // three has won
               ((playerTwoPoints + playerThreePoints) == 0); 
               player = playerTwoName  ||  // one has won
               ((playerOnePoints + playerThreePoints) == 0);  
               player = playerThreeName// two has won 

console.log("Game has ended: " +player+ " Won", gameHasEnded);