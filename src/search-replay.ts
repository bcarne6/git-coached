function searchBtnChange(searchBar: any) {
    const fs = require("fs");
    const replayDirectory = setReplayDirectory();
    const searchString = $(searchBar).val().toString();

    fs.readdir(replayDirectory, (err: any, files: any) => {
        document.getElementById("searchresultstarget").innerHTML = "";

        if (err) { throw err; }

        for (const file of files) {
            const filepath = replayDirectory + file;
            const text = fs.readFileSync(filepath);

            if (text.indexOf(searchString) >= 0) {
                $("#searchresultstarget")
                .append("<button class=\"btn btn-info file-spacing\" onclick=\"toggleFileClass(this)\">"
                + file + "</button><br />");
            }
        }
    });
}

function toggleFileClass(fileHTML: any) {
    $("#searchresultstarget").children().removeClass("btn-success").addClass("btn-info");
    $(fileHTML).removeClass("btn-info");
    $(fileHTML).addClass("btn-success");
}


function setReplayDirectory() {
    const fs = require("fs");
    const os = require("os");
    const homeDir = os.homedir();
    const settingsFile = fs.readFileSync("./config.json").toString();
    const parsedSettings = JSON.parse(settingsFile);
    const replayDirectory = parsedSettings.filePath;

    if (replayDirectory === "") {
        return homeDir + "\\Documents\\My Games\\Rocket League\\TAGame\\Demos\\";
    } else {
        return replayDirectory;
    }
}
