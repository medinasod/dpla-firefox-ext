var title;
var desc;
var list;


var titleTextNode;        // Create a text node
var descTextNode; 

self.port.on("sendJSON", function(json) {

    json.docs.forEach(function(items) {
        title = JSON.stringify(items.sourceResource.title);
        desc = JSON.stringify(items.sourceResource.description);

        var node = document.createElement("LI");                 // Create a <li> node     
        titleTextNode = document.createTextNode(title);
        descTextNode = document.createTextNode(desc);
        node.appendChild(titleTextNode);                              // Append the text to <li>
        node.appendChild(descTextNode);                              // Append the text to <li>
        document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
    });
});    



// self.port.emit("receiveJSON", "hi from the content script");
