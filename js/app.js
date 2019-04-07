/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Start the game and create new game object
const startButton = document.getElementById(`btn__reset`);
startButton.addEventListener(`click`, function() {
  const newGame = new Game();
  newGame.startGame();

  const userGuess = function(event) {
    if (event.target.classList.contains(`key`)) {
      newGame.handleInteraction(event);
    }
  };

  // physical keyboard event handling - not working
  window.addEventListener(`keyup`, userGuess, false);
  // onscreen keyboard event handling
  const keys = document.getElementById(`qwerty`);
  keys.addEventListener(`click`, userGuess, false);
});
