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
    var fs = require('fs-extra');
    new Audio(press).play();
    if($(".btn-success:contains('replay')").length > 0)
    {
        var fileName = $(".btn-success").text();
        var filePath = "testdata/" + fileName;
        fs.copy(filePath, "testdata2/" + fileName);
        $("#loader").load("html/submit-replay.html");
    } else {
        alert("Please select a replay to be sent.");
    }    
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