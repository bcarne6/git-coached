var press = "sounds/click.mp3";
var hover = "sounds/hover.mp3";

/* Click Functionality */
$("#searchreplay").on("click", function() {
    new Audio(press).play();    
    $("#loader").load("html/search-replay.html");
});

$("#addreplay").on("click", function() {
    new Audio(press).play();
    $("#loader").load("html/add-replay.html");
});

$("#submitreplay").on("click", function() {
    new Audio(press).play();
    $("#loader").load("html/submit-replay.html");
});

$("#settings").on("click", function() {
    new Audio(press).play();
    $("#loader").load("html/settings.html");
});

/* Hover Functionality */
$("#searchreplay").mouseover(function() {
    new Audio(hover).play();
});

$("#addreplay").mouseover(function() {
    new Audio(hover).play();
});

$("#submitreplay").mouseover(function() {
    new Audio(hover).play();
});

$("#settings").mouseover(function() {
    new Audio(hover).play();
});