(function () {

    const electron = require('electron'); 
    const {app, BrowserWindow} = electron.remote;
    
   function init() { 
        document.getElementById("min-btn").addEventListener("click", function (e) {
             var window = BrowserWindow.getFocusedWindow();
             window.minimize(); 
        });

        document.getElementById("max-btn").addEventListener("click", function (e) {
             var window = BrowserWindow.getFocusedWindow();
             if(window.isMaximized()){
                 window.unmaximize();
             } 
             else{
                window.maximize();
             }
                          
        });

        document.getElementById("close-btn").addEventListener("click", function (e) {
             var window = BrowserWindow.getFocusedWindow();
             window.close();
        }); 
   }; 

   document.onreadystatechange = function () {
        if (document.readyState == "complete") {
             init(); 
        }
   };

})();