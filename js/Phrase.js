/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    // split prhase into array of chars
    const phraseAsArray = this.phrase.split(``);
    // get DOM elements
    const phraseList = document.getElementById('phrase-list');
    // create DOM elements
    // loop through array and append DOM elements
    for (let i = 0; i < phraseAsArray.length; i += 1) {
      const listItem = document.createElement(`li`);
      listItem.textContent = phraseAsArray[i];
      // check to see if letter or space and add appropriate class
      if (listItem.textContent === ` `) {
        listItem.classList.add(`space`);
      } else {
        listItem.classList.add(`hide`, `letter`, `${phraseAsArray[i]}`);
      }
      phraseList.appendChild(listItem);
    }
  }

  checkLetter(guess) {
    const letters = document.getElementsByClassName(`letter`);
    const userChoice = guess;
    const match = false;
    for (let i = 0; i < letters.length; i += 1) {
      if (letters[i].textContent === userChoice) {
        // showMatchedLetter(letters[i])
        match = true;
      }
    }
    return match;
  }

  showMatchedLetter(element) {
    element.classList.remove(`hide`);
    element.classList.add(`show`);
  }
  // loop through phase array
  // check each letter and if matching add show class
}
