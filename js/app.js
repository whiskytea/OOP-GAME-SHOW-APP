/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

document.addEventListener('click', function(e) {
   if(e.target.id === "btn__reset"){
      game.startgame();
   };

   //logic for letter key presses. Each valid keypress triggers game.handleInteraction();
})