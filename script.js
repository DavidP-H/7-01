let randomNumber
let userGuess

// adds an event listener to the button, calls function "randomizer" when pressed.
document.getElementById('button').addEventListener('click', randomizer)

// takes user input and converts to an integer
function randomizer () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // generates a random number and converts to an integer
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  if (userGuess === randomNumber) {
    document.getElementById('result').innerHTML = 'You guessed the number!'
  } else {
    document.getElementById('result').innerHTML = 'Do you want to try again?'
  }
}
