/* global $*/
//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var userChoice;
var computerChoice;
var winner;
var choices = ["rock", "paper", "scissor"];


$(document).ready(function() {
    $("button").click(function() {
        userChoice = $("#input").val();
        $(".userChoice").append(userChoice);
        var randomnumber = Math.floor(Math.random() * 3);
        computerChoice = choices[randomnumber];
        console.log("computer is" + computerChoice);
        //FUNCTIONS
        if (computerChoice === userChoice) {
            console.log("tie");
        }
        else if (computerChoice === "rock" && userChoice === "paper") {
            console.log("User Wins!");
            (winner === "User");
        }
        else if (computerChoice === "rock" && userChoice === "scissor") {
            console.log("Computer Wins!");
        }
        else if (computerChoice === "paper" && userChoice === "rock") {
            console.log("Computer Wins!");
        }
        else if (computerChoice === "paper" && userChoice === "scissor") {
            console.log("USer Wins!");
        }
        else if (computerChoice === "scissor" && userChoice === "rock") {
            console.log("USer Wins!");
        }
        else if (computerChoice === "scissor" && userChoice === "paper") {
            console.log("Computer Wins!");
        }
    });
});


// DOCUMENT READY FUNCTION
