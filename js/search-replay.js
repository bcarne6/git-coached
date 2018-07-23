const fs = require("fs");
const os = require("os");

var settingsFile = fs.readFileSync("config.json");
var parsedSettings = JSON.parse(settingsFile);
var replayDirectory = parsedSettings.filePath;

function searchBtnChange(val) {
    console.log("The directory in the config file is: " + setReplayDirectory());
    let searchString = $(val).val();

    let fileArray = fs.readdir(replayDirectory, (err, files) => {
        document.getElementById("searchresultstarget").innerHTML = "";
        'use strict';
        //if an error is thrown when reading the directory, we throw it. Otherwise we continue
        if (err) throw  err;
        //the files parameter is an array of the files and folders in the path we passed. So we loop through the array, printing each file and folder
        for (let file of files) {
            let filepath = replayDirectory + file;
            let text = fs.readFileSync(filepath);

            if(text.indexOf(searchString) >= 0){
                $("#searchresultstarget").html("<button class=\"btn btn-info file-spacing\" onclick=\"toggleFileClass(this)\">" + file + "</button><br />");
            }            
        }
    });    
}

function toggleFileClass(val) {    
    $('#searchresultstarget').children().removeClass("btn-success").addClass("btn-info");
    $(val).removeClass("btn-info");
    $(val).addClass("btn-success");    
}


function setReplayDirectory() {    
    let homeDir = os.homedir();

    if(replayDirectory === ""){
        return homeDir + "\\Documents\\My Games\\Rocket League\\TAGame\\Demos";
    } else {
        return replayDirectory;
    }
}
