function redirectTo(url) {
    window.location.href = url;
}

// Function to apply style changes to buttons
function applyButtonStyles() {
    var buttons = document.getElementsByClassName("menu-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#3d404d";
        buttons[i].style.color = "#fff";
    }
}

// Apply button styles when the page loads
window.onload = function() {
    applyButtonStyles();
};
