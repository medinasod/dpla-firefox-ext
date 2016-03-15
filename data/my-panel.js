var title;
var desc;
var list;
var titleTextNode;   
var descTextNode; 

self.port.on("sendJSON", function(json) {

    json.docs.forEach(function(items) {
        title = JSON.stringify(items.sourceResource.title);
        desc = JSON.stringify(items.sourceResource.description);
        image = items.object;       
        console.log(image);
        var node = document.createElement("li");                 // Create a <li> node
        var imgTag = document.createElement("img");                 // Create a <img> node
        imgTag.setAttribute('src', image);
        imgTag.setAttribute('alt', desc);
        titleTextNode = document.createTextNode(title);
        descTextNode = document.createTextNode(desc);
        node.appendChild(titleTextNode);                         // Append the text to <li>
        node.appendChild(descTextNode);                          // Append the text to <li>
        //document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
        document.getElementById("photos").appendChild(imgTag);
    });
});