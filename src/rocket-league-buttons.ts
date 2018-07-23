var press = "sounds/click.mp3";
var hover = "sounds/hover.mp3";

/* Click Functionality */
$("#searchreplay").on("click", function() {
    activeCategory(1);
    new Audio(press).play();    
    $("#loader").load("html/search-replay.html");
});

$("#addreplay").on("click", function() {
    activeCategory(2);
    new Audio(press).play();
    $("#loader").load("html/add-replay.html");
});

$("#submitreplay").on("click", function() {
    activeCategory(3);
    let fs = require('fs-extra');
    new Audio(press).play();
    if($(".btn-success:contains('replay')").length > 0)
    {
        let settingsFile = fs.readFileSync("config.json");
        let parsedSettings = JSON.parse(settingsFile);
        let replayDirectory = parsedSettings.filePath;

        let fileName = $(".btn-success").text();
        let filePath = replayDirectory + fileName;
        fs.copy(filePath, "Temp/" + fileName);
        $("#loader").load("html/submit-replay.html");
    } else {
        alert("Please select a replay to be sent.");
    }    
});

$("#settings").on("click", function() {
    activeCategory(4);
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

function activeCategory(param: number) {
    if(param == 1)    
        $("#searchreplay").addClass("rocketleague-btn-pressed");
    else
        $("#searchreplay").removeClass("rocketleague-btn-pressed");
    
    if(param == 2)    
        $("#addreplay").addClass("rocketleague-btn-pressed");
    else
        $("#addreplay").removeClass("rocketleague-btn-pressed");
    
    if(param == 3)    
        $("#submitreplay").addClass("rocketleague-btn-pressed");
    else
        $("#submitreplay").removeClass("rocketleague-btn-pressed");
    
    if(param == 4)    
        $("#settings").addClass("rocketleague-btn-pressed");
    else
        $("#settings").removeClass("rocketleague-btn-pressed");
    
}