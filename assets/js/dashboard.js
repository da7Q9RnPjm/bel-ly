/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function dropdownMenuNavigation() {
    document.getElementById("navDropdown").classList.toggle("nav");
}

function dropdownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("avatar-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.with-sub')) {
        var dropdows = document.getElementById("navDropdown");
        if (dropdows.classList.contains("nav")) {
            dropdows.classList.remove('nav');
        }
    }
}