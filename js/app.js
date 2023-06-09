/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.addEventListener('click', function(e) {
   if(e.target.id === "btn__reset"){
      game = new Game();
      game.startgame();
   };

})

//logic for letter key presses. Each valid keypress triggers game.handleInteraction();
document.addEventListener('click', function(e) { //logic for letter key presses. Each valid keypress triggers game.handleInteraction();
    let target = e.target.parentElement;
    if (target.className === 'keyrow') {
        game.handleInteraction(e.target);
    }
});

document.addEventListener('keydown', function(e) { //logic for letter key presses. Each valid keypress triggers game.handleInteraction();
    game.handleInteraction(e.key);
});



