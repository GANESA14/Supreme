document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && /^[a-zA-Z]$/.test(event.key)) {
        if (event.key.toLowerCase() === 's') {
            alert("Ctrl + S is disabled!");
        }
        event.preventDefault(); 
    }
});
document.addEventListener("dragstart", function(event) {
    if (event.target.tagName === "IMG") {
        event.preventDefault(); 
    }
});
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 
});