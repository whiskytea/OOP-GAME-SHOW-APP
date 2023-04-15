# OOP GAME SHOW APP
 OOP GAME SHOW APP

//Grade expectation: Exceeds Expectations - reject if not met

Phrase hunter - a game where the player guess a phrase by clicking letters to hopefully fill in the blanks just enough to guess the phrase. However each wrong guess reduces the player's heart points by one. 
Please note, I'm keeping all my pseudo code and notes in this project. Normally I'd want to clean this up once I actually build the code out, but we'll keep it to show my work and logic.

planning the game:
- something needs to happen when the player clicks "start game"
- needs to have a phrase randomizer
- needs to be able to store guesses, which includes labelling a singular guess as correct or incorrect
- needs to have a check for winning the game, as well as running out of hearts
- needs to have a way for the player to start over when the game is either won or lost
- when a player clicks a letter, the game needs to cycle through all the letters of the phrase and "unhide" them if they match the guessed letter. 
- when the game is over, load an end game screen 

Extra credit:
- add keyboard functionality //keydown and keyup events
- uniqueness: colors, fonts, animations // make sure to notate in the readme and submission notes

//colors:

https://coolors.co/c4f1be-a2c3a4-869d96-525b76-201e50
/* CSS HEX */
--tea-green: #c4f1beff;
--cambridge-blue: #a2c3a4ff;
--cambridge-blue-2: #869d96ff;
--paynes-gray: #525b76ff;
--space-cadet: #201e50ff;

/* CSS HSL */
--tea-green: hsla(113, 65%, 85%, 1);
--cambridge-blue: hsla(124, 22%, 70%, 1);
--cambridge-blue-2: hsla(162, 11%, 57%, 1);
--paynes-gray: hsla(225, 18%, 39%, 1);
--space-cadet: hsla(242, 45%, 22%, 1);
