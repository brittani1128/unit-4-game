
        

$(document).ready(function() {


//VARIABLES ===============================================================

var userScore = 0;
var wins = 0;
var losses = 0;
var randomNumber;
var redValue = Math.floor(Math.random() * (20 - 1 + 1) + 1);
var greenValue = Math.floor(Math.random() * (20 - 1 + 1) + 1);
var blueValue = Math.floor(Math.random() * (20 - 1 + 1) + 1);
var yellowValue = Math.floor(Math.random() * (20 - 1 + 1) + 1);

//FUNCTIONS ==============================================================

function randomize() {
    var maxNum = 200;
    var minNum = 30;
    randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    console.log(randomNumber);
    $("#random").text(randomNumber);
}

//If statements to determine if win or lose
function winOrLose() {
    if (userScore == randomNumber) {
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        resetGame();
    }

    if (userScore > randomNumber) {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        resetGame();
    }
}

//Function to reset game
function resetGame() {
    userScore = 0;
    $("#total-score").text(userScore);
    redValue = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    greenValue = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    blueValue = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    yellowValue = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    randomize();

    //clear display
}




//PROCESS ==================================================================

//Determine random number
randomize();


//On click functions when a crystal button is clicked
$("#purple-crystal").on("click", function(){
    console.log(redValue);
    userScore += redValue;
    $("#total-score").text(userScore);
    winOrLose();
});

$("#blue-crystal").on("click", function(){
    console.log(blueValue);
    userScore += blueValue;
    $("#total-score").text(userScore);
    winOrLose();
  
});

$("#green-crystal").on("click", function(){ 
    console.log(greenValue);
    userScore += greenValue;
    $("#total-score").text(userScore);
    winOrLose();
});

$("#orange-crystal").on("click", function(){
    console.log(yellowValue);
    userScore += yellowValue;
    $("#total-score").text(userScore);
    winOrLose();
});



});

