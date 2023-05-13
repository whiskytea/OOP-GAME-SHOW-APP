/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Do or do not there is no try'),
            new Phrase('In for a penny in for a pound'),
            new Phrase('Pot meet kettle'),
            new Phrase('The devil is in the details'),
            new Phrase('Not all who wander are lost')
        ]; //5 phrases
        this.activePhrase = null;

    }

    startgame(){
        document.querySelector('#overlay').style.display = "none";
        document.querySelector('#overlay').classList.remove('win', 'lose');
        this.activePhrase = this.getRandomPhrase(this.phrases);
        this.activePhrase.addPhraseToDisplay(this.activePhrase);
        //sets this.activePhrase = this.getRandomPhrase();
        //once this.activePhrase set, run this.addPhraseToDisplay(activePhrase)
    }

    getRandomPhrase(phrases){
        //returns a random phrase from this.phrases list - https://www.w3schools.com/js/js_random.asp
        let rollDice = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[rollDice];
    }

    handleInteraction(e){ //handles most of the game logic
        let key;
        if(typeof e !== 'string'){
            key = e.innerHTML;
        }else{
            key = e;
        }

        console.log(e);
        let livesCheck = false; //zeroLives by another name
        if(e !== " "){
            let letterCheck = this.activePhrase.checkLetter(key);
            let keys = document.getElementsByClassName('key');
            if(!letterCheck){
                livesCheck = this.removeLife();
                for (let i = 0; i < keys.length; i++){
                    if(keys[i].textContent === key){
                        keys[i].classList.add('wrong');
                        keys[i].disabled = true; //https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
                    }
                }
            }else{
                for (let i = 0; i < keys.length; i++){
                    if(keys[i].textContent === key){
                        keys[i].classList.add('chosen');
                        keys[i].disabled = true;
                    }
                }
            }
        }


        this.checkForWin(livesCheck);
    }

    removeLife(){
        //replace liveHeart.png with lostHeart.png
        let scoreboard = document.querySelector('#scoreboard').firstElementChild.children;
        let zeroLives = true;
        for (let i = 0; i < scoreboard.length; i++){
            let img = scoreboard[i].firstElementChild;
            if(img.src.includes('liveHeart.png')){
                img.src = 'images/lostHeart.png';
                if(i === scoreboard.length-1){ //we want the game to end on the last heart lost
                    zeroLives = true;
                }else{
                    zeroLives = false;
                }
                break;
            }

        }
        return zeroLives;
    }

    checkForWin(livesCheck){
        let letterList = document.querySelector('#phrase').firstElementChild.children;
        let _livesCheck = livesCheck;
        // are all the letters revealed? if yes -> this.gameOver();
        if(_livesCheck) {
            this.gameOver('loss'); //if there are no lives (aka zeroLives is true) end the game at a loss
        }else if (!_livesCheck){ //if we have lives left, lets check if we won
            let allLettersRevealed = true; //we'll set the win to true, but will change it to false if we find an unrevealed letter
            for(let i = 0; i < letterList.length; i++){

                if(letterList[i].classList.contains('letter')){ //the 'letter' class is the unrevealed letter class
                    allLettersRevealed = false; //so if a letter element has this class, we set the win condition to false
                }
            }

            if (allLettersRevealed){ //however if all the letters are indeed revealed...
                this.gameOver('win'); //win the game
            }
        }
    }

    boardCleanup(){
        //remove the phrase
        let phraseUL = document.getElementById('phrase').getElementsByTagName('UL')[0];
        while(phraseUL.firstChild){ //https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
            phraseUL.removeChild((phraseUL.firstChild));
        }

        //reset the keyboard
        let keyRow = document.getElementsByClassName("key");
        for (let i = 0; i < keyRow.length; i++){
            keyRow[i].disabled = false;
            keyRow[i].classList.remove('wrong', 'chosen');
        }

        //reset the life counter
        let scoreboard = document.querySelector('#scoreboard').firstElementChild.children;
        for (let i = 0; i < scoreboard.length; i++){
            let img = scoreboard[i].firstElementChild;
            img.src = 'images/liveHeart.png';
        }

        //remove phrase from the phrase list
        // this.phrases = this.phrases.filter(phrase => phrase !== this.activePhrase.phrase); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    }

    gameOver(e){
        //method displays the original start screen overlay
        //depending on the outcome update the overlay h1 element w/ win or loss message
        //replace overlay's 'start' class with "win" or "loss" class

        //handle cleanup
            //remove all "li" elements from the Phrase ul element
            //enable all of the keyboard buttons and set class to "key"
            //reset all the heart images by switching them back to liveHeart.png
        let overlay = document.querySelector('#overlay');
        if(e === 'loss'){
            overlay.classList.add('lose');
            overlay.style.display = 'flex';
        }else if(e === 'win'){
            overlay.classList.add('win');
            overlay.style.display = 'flex';

        }

        //board clean up-----------------------------------------
        this.boardCleanup();

        //true game over - we've tried every phrase (since we are running the game app from the start button this is no longer going to work)
        // if(this.phrases.length === 0){
        //     let startButton = document.getElementById("btn__reset");
        //     startButton.disabled = true;
        //     startButton.textContent = "All phrases attempted. Refresh the page to start over.";
        //     startButton.style.width = '400px';
        //     startButton.style.cursor = 'default'; //https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
        //     overlay.classList.remove('lose','win');
        // }

    }
}