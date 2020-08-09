function setDirectory() {
    const editJsonFile = require("edit-json-file");
    const config = editJsonFile("app/settings/config.json");
    const pathObject = (document.getElementById("setdir") as HTMLInputElement).files[0];
    const replayPath = pathObject.path;
    config.set("filePath", replayPath);
    config.save();

    if ($("settingsstatusmsg").hasClass("no-changes")) {
        $("settingsstatusmsg").removeClass("no-changes").addClass("saved-changes");
    } else if ($("settingsstatusmsg").hasClass("pending-changes")) {
        $("settingsstatusmsg").removeClass("pending-changes").addClass("saved-changes");
    }
}

$("#setdir").on("click", () => {
    if ($("#settingsstatusmsg").hasClass("no-changes")) {
        $("settingsstatusmsg").removeClass("no-changes");
        $("settingsstatusmsg").addClass("pending-changes");
    } else if ($("#settingsstatusmsg").hasClass("saved-changes")) {
        $("settingsstatusmsg").removeClass("saved-changes");
        $("settingsstatusmsg").addClass("pending-changes");
    }
});
