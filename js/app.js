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

document.addEventListener('click', function(e) { //logic for letter key presses. Each valid keypress triggers game.handleInteraction();
   let target = e.target.parentElement;
   if (target.className === 'keyrow') {
     let key = e.target.innerHTML;
     game.handleInteraction(e.target);
   }
});



