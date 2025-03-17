function hamburger_menu() {
    var x = document.getElementById("navBar");
    if (x.className === "nav-links") {
        x.className += " responsive";
    } else {
        x.className = "nav-links";
    }
}