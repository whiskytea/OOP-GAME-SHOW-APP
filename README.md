# OOP GAME SHOW APP
 OOP GAME SHOW APP

//Grade expectation: Exceeds Expectations - reject if not met

Phrase hunter: 
- A game where the player guess a phrase by clicking letters to hopefully fill in the blanks just enough to guess the phrase. 
- Each wrong guess reduces the player's heart points by one. 

Extra credit:
- add keyboard functionality //keydown and keyup events
- uniqueness: colors, fonts, animations // make sure to notate in the readme and submission notes

DESIGN BOARD: https://www.figma.com/file/E3OavdHa8FWJQuRQcEDT6F/PHRASE-HUNTER?type=design&node-id=0-1&t=lnsB1WoBPajgFi5d-0

//colors: not all colors are used
lightest green: #C4F1BE
medium-light green: #A2C3A4
medium green: #869C96
pigmented green (aka not a faded pastel green): #308B65
dark green: #36443F
green toned black: #090B0A
off white: #F3F4F7

//heart icons are manipulations of heart icons attributed below. I pulled them into Figma and changed them up a bit, but the original idea belongs to Flaticon
<a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a>
https://www.flaticon.com/free-icon/heart_3076988?term=life+game+heart&related_id=3076988


Planning the game:
- something needs to happen when the player clicks "start game"
- needs to have a phrase randomizer (and each time the player completes one attempt that phrase is removed from the list)
- needs to be able to store guesses, which includes labelling a singular guess as correct or incorrect
- needs to have a check for winning the game, as well as a check for running out of hearts
- needs to have a way for the player to start over when the game is either won or lost
- when a player clicks a letter, the game needs to cycle through all the letters of the phrase and "unhide" them if they match the guessed letter.
- when the game is over, load an end game screen 
