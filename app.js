alert("Welcome to the game of the Secret Number!");
let maxNumber = 5000;
let tryCounter = 0;
const secretNumber = Math.round(Math.random() * maxNumber); 

let newNumber = prompt(`Enter a number between 0 and ${maxNumber}:`);

while(!(secretNumber == newNumber)){
    tryCounter++;

    if (secretNumber < newNumber){
        newNumber = prompt(`The secret number is less than ${newNumber}. Enter a new number:`);
        continue;
    }

    if (secretNumber > newNumber){
        newNumber = prompt(`The secret number is more ${newNumber}. Enter a new number:`);
        continue;
    }
}

alert(`Congratulations, you won in ${tryCounter} tries!`);