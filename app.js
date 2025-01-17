alert("Welcome to the game of the Secret Number!");
const secretNumber = Math.round(Math.random() * 100); 

let newNumber = prompt("Enter a number between 0 and 100:");

while(!(secretNumber == newNumber)){
    
    if (secretNumber < newNumber){
        newNumber = prompt(`The secret number is less. Enter a new number:`);
        continue;
    }

    if (secretNumber > newNumber){
        newNumber = prompt(`The secret number is more. Enter a new number:`);
        continue;
    }
}