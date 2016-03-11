// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var { ToggleButton } = require('sdk/ui/button/toggle');
var tabURL;

// Construct a panel, loading its content from the "menu.html"
// file in the "data" directory, and loading the "my-script.js" script
// into it.

tabs.on("ready", function() {
    tabURL = tabs.activeTab.url;
});

pageMod.PageMod({
    include: "*",
    contentScriptFile: "./my-script.js",
    // Send the content script a message inside onAttach
    onAttach: function(worker) {
        worker.port.emit("getAddress", tabURL);
    }
});



// function myListener() {
//   console.log("A selection has been made.");
// }
// var selection = require("sdk/selection");
// selection.on('select', myListener);
