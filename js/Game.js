/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = []; //5 phrases
        this.activePhrase = null;

    }

    startgame(){
        console.log('start game');
        //sets this.activePhrase = this.getRandomPhrase();
        //once this.activePhrase set, run this.addPhraseToDisplay(activePhrase)
    }

    getRandomPhrase(phrases){
        //returns a random phrase from this.phrases list
    }

    addPhraseToDisplay(activePhrase){
        //loads the hidden tiles for the letters in this.activePhrase
    }

    handleInteraction(){ //handles most of the game logic
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