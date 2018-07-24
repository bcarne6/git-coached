function setDirectory() {
    let editJsonFile = require("edit-json-file");
    let config = editJsonFile("./config.json");
    let pathObject = (<HTMLInputElement>document.getElementById("setdir")).files[0];
    let replayPath = pathObject.path + "\\";
    config.set("filePath", replayPath);
    config.save();

    if($("settingsstatusmsg").hasClass("no-changes")){
        $("settingsstatusmsg").removeClass("no-changes").addClass("saved-changes");
    }    
    else if($("settingsstatusmsg").hasClass("pending-changes")){
        $("settingsstatusmsg").removeClass("pending-changes").addClass("saved-changes")
    }
}

$("#setdir").on("click", function() {
    if($("#settingsstatusmsg").hasClass("no-changes")){
        $("settingsstatusmsg").removeClass("no-changes");
        $("settingsstatusmsg").addClass("pending-changes");
    }
    else if($("#settingsstatusmsg").hasClass("saved-changes")){
        $("settingsstatusmsg").removeClass("saved-changes");
        $("settingsstatusmsg").addClass("pending-changes");
    }
});