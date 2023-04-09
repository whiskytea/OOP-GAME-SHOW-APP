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
https://coolors.co/000505-3b3355-5d5d81-bfcde0-fefcfd
/* CSS HEX */
--black: #000505ff;
--space-cadet: #3b3355ff;
--ultra-violet: #5d5d81ff;
--columbia-blue: #bfcde0ff;
--white: #fefcfdff;

/* CSS HSL */
--black: hsla(180, 100%, 1%, 1);
--space-cadet: hsla(254, 25%, 27%, 1);
--ultra-violet: hsla(240, 16%, 44%, 1);
--columbia-blue: hsla(215, 35%, 81%, 1);
--white: hsla(330, 50%, 99%, 1);

https://coolors.co/f1f2eb-d8dad3-a4c2a5-566246-4a4a48
/* CSS HEX */
--alabaster: #f1f2ebff;
--timberwolf: #d8dad3ff;
--cambridge-blue: #a4c2a5ff;
--ebony: #566246ff;
--davys-gray: #4a4a48ff;

/* CSS HSL */
--alabaster: hsla(69, 21%, 94%, 1);
--timberwolf: hsla(77, 9%, 84%, 1);
--cambridge-blue: hsla(122, 20%, 70%, 1);
--ebony: hsla(86, 17%, 33%, 1);
--davys-gray: hsla(60, 1%, 29%, 1);


https://coolors.co/442b48-726e60-98b06f-b6dc76-dbff76
/* CSS HEX */
--english-violet: #442b48ff;
--dim-gray: #726e60ff;
--olivine: #98b06fff;
--yellow-green: #b6dc76ff;
--mindaro: #dbff76ff;

/* CSS HSL */
--english-violet: hsla(292, 25%, 23%, 1);
--dim-gray: hsla(47, 9%, 41%, 1);
--olivine: hsla(82, 29%, 56%, 1);
--yellow-green: hsla(82, 59%, 66%, 1);
--mindaro: hsla(76, 100%, 73%, 1);


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


https://coolors.co/d30c7b-ffe3dc-dbb4ad-a2ad91-3a2d32
/* CSS HEX */
--magenta-dye: #d30c7bff;
--misty-rose: #ffe3dcff;
--tea-rose-red: #dbb4adff;
--sage: #a2ad91ff;
--raisin-black: #3a2d32ff;

/* CSS HSL */
--magenta-dye: hsla(327, 89%, 44%, 1);
--misty-rose: hsla(12, 100%, 93%, 1);
--tea-rose-red: hsla(9, 39%, 77%, 1);
--sage: hsla(84, 15%, 62%, 1);
--raisin-black: hsla(337, 13%, 20%, 1);