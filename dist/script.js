$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#myNav").toggleClass('width100');
    $("#myNav").fadeIn();

});