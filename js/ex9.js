const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Just you can exit quickly 🧐:",randomNumber);

let attempts = 0;
let userAttempt = 0;

while (userAttempt != randomNumber){
  userAttempt = Number(prompt("Guess a random number between 1 - 100:"));
  attempts++;

  if (isNaN(userAttempt)) {
    console.log("Please Enter a Valid Number!");
  } else if (userAttempt < 1 || userAttempt > 100) {
    console.log("Please enter a number between 1 and 100.");
  } else if (userAttempt < randomNumber) {
    console.log("Too Low! Try Again");
  } else if (userAttempt > randomNumber) {
    console.log("Too High! Try Again");
  } else {
    console.log(`Correct! It took you ${attempts} attempt(s) to guess the correct number`);
  }
}