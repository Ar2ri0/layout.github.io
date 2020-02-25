$('.menu_btn').on('click', function() {
    $('.menu_btn').toggleClass('menu_btn_active')
    $('nav').toggleClass('active');
    $('main').toggleClass('active');
    $('.slide_menu').toggleClass('slide_menu_active');
});
