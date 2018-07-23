function setDirectory() {
    let userDefinedDirectory = $("#setdir").val();
    let configFile = JSON.parse(fs.readFileSync("./config.json").toString());
    configFile.filePath = userDefinedDirectory;
    fs.writeFile("./config.json", configFile, "utf8");
}