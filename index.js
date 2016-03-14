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

            json.docs.forEach(function(items) {

                console.log(JSON.stringify(items.sourceResource.title));
                console.log(JSON.stringify(items.sourceResource.description));

              });

              // var items = json.docs;
// for (var i=0; i < items.sourceResource; i++) {
  // var title = items[i].title;
  // var description = items[i].description;
  // console.log("Title: " + title + "\nDescription: " + description + "\n\n");
// }

              //  items.forEach( function(item) {
              //       console.log('title: ' + item.title + ' \n\n' + 'description: ' + item.description + '\n\n');
              //   });

          }
      }).get();


  }
});
