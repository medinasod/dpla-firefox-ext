


// "self" is a global object in content scripts
// Listen for a message, and replace the document's
// contents with the message payload.

self.port.on("getAddress", function(tabURL) {
    console.log("url is: " + tabURL);
    var myH1 = document.getElementById("page-title");
    console.log(myH1.textContent);
}); // end of self.port.on

window.addEventListener("mouseup", function() {
    // if (document.selection) {
    // var text = document.selection.createRange().textContent;
selection = window.getSelection();

    console.log(selection.toString());
    // }
    
});