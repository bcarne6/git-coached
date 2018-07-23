(function () {

    const electron = require('electron'); 
    const {app, BrowserWindow} = electron.remote;
    
   function init() { 
        $("#min-btn").on("click", function (e) {
             let window = BrowserWindow.getFocusedWindow();
             window.minimize(); 
        });

        $("#max-btn").on("click", function (e) {
             let window = BrowserWindow.getFocusedWindow();
             if(window.isMaximized()){
                 window.unmaximize();
             } 
             else{
                window.maximize();
             }
                          
        });

        $("#close-btn").on("click", function (e) {
             let window = BrowserWindow.getFocusedWindow();
             window.close();
        }); 
   }; 

   $(document).ready(init);
   
})();