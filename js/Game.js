/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('testone'),
      new Phrase('testtwo'),
      new Phrase('testhree'),
      new Phrase('testfour'),
      new Phrase('testfive'),
    ];
    this.activePhrase = null;
  }

  startGame() {
    const overlay = document.getElementById(`overlay`);
    overlay.style.display = `none`;
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const ranNum = Math.floor(Math.random() * 5);
    return this.phrases[ranNum];
  }

  handleInteraction(event) {
    let userGuess;
    if (event.type === `click`) {
      userGuess = event.target.innerText;
    }
    if (event.type === `keyup`) {
      userGuess = event.key;
    }
    // if letter exists add chosen css class and call showmatched letter
    // then checkforWin method. if true (won) call game over method
    // else add wrong css class and call the remove life method
    if (this.activePhrase.checkLetter(userGuess)) {
      event.target.classList.add(`chosen`);
      this.activePhrase.showMatchedLetter(`${userGuess}`);
      if (this.checkForWin()) {
        this.gameOver();
        this.resetGame();
      }
    } else {
      event.target.classList.add(`wrong`);
      // disable the button so the player doesn't hit the same wrong button twice
      event.target.setAttribute(`disabled`, `true`);
      this.removeLife();
    }
  }

  removeLife() {
    const hearts = document.querySelectorAll(`.tries img`);
    hearts[this.missed].src = `images/lostHeart.png`;
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  checkForWin() {
    const letters = document.getElementsByClassName(`letter`);
    for (let i = 0; i < letters.length; i += 1) {
      if (letters[i].classList.contains(`hide`)) {
        return false;
      }
    }
    return true;
  }

  gameOver() {
    const overlay = document.getElementById(`overlay`);
    const gameOverMessage = document.getElementById(`game-over-message`);
    const resetButton = document.getElementById(`btn__reset`);
    if (this.missed === 5) {
      gameOverMessage.innerText = `You lost! Better luck next time`;
      this.resetGame();
    } else {
      gameOverMessage.innerText = `Congrats you won!`;
      this.resetGame();
    }
    overlay.style.display = `flex`;
    resetButton.innerText = `Try again`;
  }

  resetGame() {
    // Remove all li elements from the Phrase ul element.
    const phraseList = document.getElementById('phrase-list');
    while (phraseList.hasChildNodes()) {
      phraseList.removeChild(phraseList.lastChild);
    }
    // Enable all of the onscreen keyboard buttons and update each to use the
    // key CSS class, and not use the chosen or wrong CSS classes.
    const keys = document.getElementsByClassName(`key`);
    for (let i = 0; i < keys.length; i += 1) {
      keys[i].removeAttribute(`disabled`, `false`);
      keys[i].classList.remove(`wrong`, `chosen`);
    }
    // Reset all of the heart images (i.e. the player's lives) in the
    // scoreboard at the bottom of the gameboard to display the liveHeart.png image.
    this.missed = 0;
    const hearts = document.querySelectorAll(`.tries img`);
    for (let j = 0; j < hearts.length; j += 1) {
      hearts[j].src = `images/liveHeart.png`;
    }
  }
}
