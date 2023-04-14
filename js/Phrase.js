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
        //loads the hidden tiles for the letters in this.activePhrase
        //we're going to need to loop through all the characters and create an LI element for each, assigning a letter or space class
        let phraseUL = document.querySelector('#phrase').firstElementChild; //https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild
        for(let i = 0; i < this.phrase.length; i++){
            let newLI = document.createElement('LI');
            if (this.phrase[i] === ' '){
                newLI.textContent = this.phrase[i];
                newLI.classList.add('space');
                phraseUL.appendChild(newLI);
            }else{
                newLI.textContent = this.phrase[i];
                newLI.classList.add('letter');
                phraseUL.appendChild(newLI);
            }
        }
    }

    checkLetter(letter){
        let _letter = letter;
        let result = false;
        let letterList = document.querySelector('#phrase').firstElementChild.children;
        //cycle through the phrase elements we loaded earlier with addPhraseToDisplay.
        //if any letters match => showMatchedLetter method
        //if no letters match => player lose life method
        for(let i = 0; i < letterList.length; i++){
            if(letterList[i].innerHTML.toUpperCase() === _letter.toUpperCase()){
                this.showMatchedLetter(letterList, _letter);
                result = true;
                break;
            }
        }
        return result;
    }

    showMatchedLetter(letterList, e){
        let _letterList = letterList;
        let _e = e;
        //cycle through all the phrase elements and change their style from hidden to unhidden (probably a css class)
        for(let i = 0; i < _letterList.length; i++) {
            if(_letterList[i].innerHTML.toUpperCase() === _e.toUpperCase()){
                _letterList[i].classList.add('show');
                _letterList[i].classList.remove('letter');
            }


        }
    }
}