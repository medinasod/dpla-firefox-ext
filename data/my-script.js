


// "self" is a global object in content scripts
// Listen for a message, and replace the document's
// contents with the message payload.

// self.port.on("getAddress", function(tabURL) {
//     console.log("url is: " + tabURL);
//     var myH1 = document.getElementById("page-title");
//     console.log(myH1.textContent);
// }); // end of self.port.on

// window.addEventListener("mouseup", function() {
//     // if (document.selection) {
//     // var text = document.selection.createRange().textContent;
// selection = window.getSelection();

//     console.log(selection.toString());
//     // }
    
// });

self.on("click", function(node, data) {
selection = window.getSelection();
    self.postMessage(selection.toString());
});

// var url;

// function reqListener () {
//   console.log(this.responseText);
// }
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener); 

// function makeRequest(url) {       
//     oReq.open("GET", url);
//     oReq.send(null);
// }

// self.on("click", function () {
//     var text = window.getSelection().toString();
//     // url = "http://api.dp.la/v2/items?q=" + text + "&api_key=3c568662019567df1b9f99e0704680f3";
//     url = "https://www.drupal.org/files/1874500-routing-take-2_1.patch";
//     makeRequest(url);
// });


// function reqListener () {
//     // self.postMessage(JSON.stringify(this.response));
//     self.postMessage(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://www.drupal.org/files/issues/localize_event_date-2171709-4.patch");
// oReq.send();




