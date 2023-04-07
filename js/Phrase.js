/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {     // what we are guessing
    constructor(phrase) {     //phrase is passed into the class object when instantiated
        this.phrase = phrase;
    }

    addPhraseToDisplay(){
        //for each letter in phrase create a "hidden" letter block on screen. Make sure to have spaces where the
        //phrase has spaces, but don't load "blocked letter" class for spaces.
        //Make each letter an element rendered to the page? This would allow you to assign classes
    }

    checkLetter(letter){
        let _letter = letter;
        //cycle through the phrase elements we loaded earlier with addPhraseToDisplay.
        //if any letters match => showMatchedLetter method
        //if no letters match => player lose life method
    }

    showMatchedLetter(){
        //cycle through all the phrase elements and change their style from hidden to unhidden (probably a css class)
    }
}