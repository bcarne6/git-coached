var press = "sounds/click.mp3";
var hover = "sounds/hover.mp3";

/* Click Functionality */
$("#myreplays").on("click", function() {
    new Audio(press).play();    
});

$("#addreplay").on("click", function() {
    new Audio(press).play();
    $("#loader").load("html/add-replays.html");
});

$("#coachme").on("click", function() {
    new Audio(press).play();
});

$("#settings").on("click", function() {
    new Audio(press).play();
});

/* Hover Functionality */
$("#myreplays").mouseover(function() {
    new Audio(hover).play();
});

$("#addreplay").mouseover(function() {
    new Audio(hover).play();
});

$("#coachme").mouseover(function() {
    new Audio(hover).play();
});

$("#settings").mouseover(function() {
    new Audio(hover).play();
});