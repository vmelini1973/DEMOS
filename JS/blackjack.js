let cartaUno = 7;
let cartaDos = 7;
let sum = cartaUno + cartaDos;

let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 2;

let cartaTres = 7;
sum += cartaTres;

if (sum > 21) {
    console.log('Pierdes');
}
console.log('Has sumado ' + sum)

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;
if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
 console.log('You win');
} else {
  console.log('Bank wins ' + bankSum);
}