// Navbar Toggle
$(document).ready(function () {
    $('#menu-btn').click(function () {
        $(this).toggleClass('fa-bars fa-x');   // change icon
        $('.navbar').toggleClass('active');    // show/hide menu
    });
});
window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
}, 9000);