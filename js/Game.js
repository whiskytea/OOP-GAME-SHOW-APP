/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            'Do or do not, there is no try',
            'In for a penny, in for a pound',
            'Pot, meet kettle',
            'The devil is in the details',
            'Not all who wander are lost'
        ]; //5 phrases
        this.activePhrase = null;

    }

    startgame(){
        console.log('start game');
        document.querySelector('#overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase(this.phrases);
        console.log(this.activePhrase);
        this.addPhraseToDisplay(this.activePhrase);
        //sets this.activePhrase = this.getRandomPhrase();
        //once this.activePhrase set, run this.addPhraseToDisplay(activePhrase)
        this.handleInteraction('E');
    }

    getRandomPhrase(phrases){
        //returns a random phrase from this.phrases list - https://www.w3schools.com/js/js_random.asp
        let rollDice = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[rollDice];
    }

    addPhraseToDisplay(activePhrase){

        //loads the hidden tiles for the letters in this.activePhrase
        //we're going to need to loop through all the characters and create an LI element for each, assigning a letter or space class
        let phraseUL = document.querySelector('#phrase').firstElementChild; //https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild
        let phrase = this.activePhrase;
        for(let i = 0; i < this.activePhrase.length; i++){
            let newLI = document.createElement('LI');
            if (phrase[i] === ' '){
                newLI.textContent = phrase[i];
                newLI.classList.add('space');
                phraseUL.appendChild(newLI);
            }else{
                newLI.textContent = phrase[i];
                newLI.classList.add('letter');
                phraseUL.appendChild(newLI);
            }
        }
    }

    handleInteraction(e){ //handles most of the game logic
        //addEventListener => click --- trigger: a letter is clicked
            //disable clicked letter
            //if then -> right or wrong letter clicked?
                //if right ->
                    //add "chosen" class to letter
                    //player.showMatchedLetter()
                    //this.checkWin() -> if won -> this.gameOver()
                //if wrong ->
                    //add "wrong" class to letter element
                    //this.removeLife();
    let letterList = document.querySelector('#phrase').firstElementChild.children;
    console.log(letterList);
    for(let i = 0; i < letterList.length; i++){
        if(letterList[i].innerHTML.toUpperCase() === e){
            console.log('you picked the right letter!');
        }
    }



    }

    removeLife(){
        //replace liveHeart.png with lostHeart.png
        //this.missed += 1 -> if missed = 5 -> this.gameOver()
    }

    checkForWin(){
        // are all the letters revealed? if yes -> this.gameOver();
    }

    gameOver(){
        //method displays the original start screen overlay
        //depending on the outcome update the overlay h1 element w/ win or loss message
        //replace overlay's 'start' class with "win" or "loss" class

        //handle cleanup
            //remove all "li" elements from the Phrase ul element
            //enable all of the keyboard buttons and set class to "key"
            //reset all the heart images by switching them back to liveHeart.png
    }
}