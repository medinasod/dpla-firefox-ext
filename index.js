var DPLA;
var Request = require("sdk/request").Request;



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
              var json = response.json;
            //   var items = json.docs;

                    //var title = items[i].title;
                    // var description = items[i].description;
                    // console.log("Title: " + title + "\nDescription: " + description + "\n\n");
               json.docs.sourceResource.forEach( function(item) {
                    console.log(item.title + ' \n\n' + item.description + '\n\n\n\n');
                });
                    
          }
      }).get();


  }
});


