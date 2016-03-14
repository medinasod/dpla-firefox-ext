self.on("click", function(node, data) {
selection = window.getSelection();
    self.postMessage(selection.toString());
});