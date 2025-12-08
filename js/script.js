// Navbar Toggle
$(document).ready(function () {
    $('#menu-btn').click(function () {
        $(this).toggleClass('fa-bars fa-x');   // change icon
        $('.navbar').toggleClass('active');    // show/hide menu
    });
});
