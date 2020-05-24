## Connect4

If you don't know the rules, I can point you to google.

Current issues to address as of 5/23/2020:
> Linter prolbems
> - [ ] Can't change file tage from 'js' to 'jsx'. App crashes
> Handle win conditions
> - Functions to check for
> - - [x] horizontal
> - - [x] vertical
> - - - [x] glitch in vertical win declaring a win if pressing an illegal space not directly above a played position
> - - [ ] diagonal wins
> - [ ] Function to check if game is a draw
> - If a win/draw is found, announce it and ask if they want to play again
> - - [x] Win is announced
> - - [ ] Ask if they want to play again

> Button to restart game
> - [ ] Maybe have a pop-up that asks the players if they're sure

> Text notifications of game state
> - [ ] Whose turn it is
> - [ ] notificatoin if previous turn was invalid

> Clean handleClick function in App.js
> - [ ] Separtae into smaller function to handle separation of concerns

> Work on styling
> - [ ] If you've looked at the app, you'll know

> DB tracking team wins
> - [ ] Update function on mongoose not working properly.
> - [ ] Data is being passed into function in proper form

> SOLVED Why is my board actually made
> - Look into src/BoardMaker.jsx
> - Doesn't have anything that actuall places the tiles around
>   - The way I read it, all tiles should be placed on top of eachother
> #### ANSWER
> - grid template set up the board and how many elements could be placed. So just
> - - iterating the proper amount of times handles it


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
