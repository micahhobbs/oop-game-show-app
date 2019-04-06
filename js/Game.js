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
    const userGuess = event.target.innerText;
    // if letter exists add chosen css class and call showmatched letter
    // then checkforWin method. if true (won) call game over method
    if (this.activePhrase.checkLetter(userGuess)) {
      event.target.classList.add(`chosen`);
      this.activePhrase.showMatchedLetter(`${userGuess}`);
      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      event.target.classList.add(`wrong`);
      this.removeLife();
    }
    // else add wrong css class and call the remove life moethod
  }

  removeLife() {
    const hearts = document.querySelectorAll(`.tries img`);
    hearts[this.missed].src = `images/lostHeart.png`;
    this.missed += 1;
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

  gameOver(outcome) {
    overlay.style.display = `flex`;
    // this.activePhrase = null;

    // RESET THE BOARD!
  }
}
