/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            'Do or do not there is no try',
            'In for a penny in for a pound',
            'Pot meet kettle',
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
        let key = e.innerHTML;
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
        let livesCheck = false; //zeroLives by another name
        let correctLetter = false;
        for(let i = 0; i < letterList.length; i++){
            if(letterList[i].innerHTML.toUpperCase() === key.toUpperCase()){
                for(let i = 0; i < letterList.length; i++) {
                    if(letterList[i].innerHTML.toUpperCase() === key.toUpperCase()){
                        letterList[i].classList.add('show');
                        letterList[i].classList.remove('letter');
                    }

                    e.classList.add('chosen');
                }
                correctLetter = true;
                break;
            }
        }

        if(!correctLetter){
            livesCheck = this.removeLife();
            e.classList.add('wrong');
            e.disabled = true; //https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
        }



        this.checkForWin(livesCheck, letterList);
    }

    removeLife(){
        //replace liveHeart.png with lostHeart.png
        let scoreboard = document.querySelector('#scoreboard').firstElementChild.children;
        let zeroLives = true;
        for (let i = 0; i < scoreboard.length; i++){
            let img = scoreboard[i].firstElementChild;
            if(img.src.includes('liveHeart.png')){
                img.src = 'images/lostHeart.png';
                zeroLives = false;
                break;
            }
        }
        return zeroLives;
    }

    checkForWin(livesCheck, letterList){
        let zeroLives = livesCheck;
        // are all the letters revealed? if yes -> this.gameOver();
        if(zeroLives) {
            this.gameOver('loss'); //if there are no lives (aka zeroLives is true) end the game at a loss
        }else if (!zeroLives){ //if we have lives left, lets check if we won
            let allLettersRevealed = true; //we'll set the win to true, but will change it to false if we find an unrevealed letter
            for(let i = 0; i < letterList.length; i++){
                if(letterList[i].classList.contains('letter')){ //the 'letter' class is the unrevealed letter class
                    allLettersRevealed = false; //so if a letter element has this class, we set the win condition to false
                }
            }

            if (allLettersRevealed){ //however if all the letters are indeed revealed...
                this.gameOver('win'); //win the game
            }else{
                console.log('we survived the win check logic');
            }
        }
    }

    gameOver(e){
        //method displays the original start screen overlay
        //depending on the outcome update the overlay h1 element w/ win or loss message
        //replace overlay's 'start' class with "win" or "loss" class

        //handle cleanup
            //remove all "li" elements from the Phrase ul element
            //enable all of the keyboard buttons and set class to "key"
            //reset all the heart images by switching them back to liveHeart.png

        if(e === 'loss'){
            console.log('we lost!');
        }else if(e === 'win'){
            let overlay = document.querySelector('#overlay');
            overlay.classList.add('win');
            overlay.style.display = 'flex';

        }
    }
}