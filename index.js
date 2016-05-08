var Request = require("sdk/request").Request;
var DPLA;
var json;
var title;
var desc;

var panel = require("sdk/panel").Panel({
  width: 500,
  height: 500,
  contentURL: "./popup.html",
  contentScriptFile: "./my-panel.js"
});

var contextMenu = require("sdk/context-menu");
var menuItem = contextMenu.Item({
  label: "Log Selection",
  context: contextMenu.SelectionContext(),
  contentScriptFile: "./my-script.js",
  onMessage: function(selectionText) {

      DPLA = "http://api.dp.la/v2/items?q=" + selectionText + "&api_key=3c568662019567df1b9f99e0704680f3";

      Request({
          url: DPLA,
          onComplete: function(response) {
               // Get the JSON data.
              json = response.json;
              // Launch the popup/panel.
              panel.show();
              panel.port.emit("sendJSON", json);
          }
      }).get();
  }
});
