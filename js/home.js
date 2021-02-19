const _js_hamburger = $('.js-hamburger');
const _nav_bar = $('.js-nav-bar');
const _nav_bar_mark = $('.js-nav-bar-mark');


_js_hamburger.on('click', function () {
    $(this).hasClass('active') ? fn_remove() : fn_add();
});
_nav_bar_mark.on('click', function () {
    $(this).hasClass('active') ? fn_remove() : fn_add();
});

function fn_add() {
    _js_hamburger.addClass('active');
    _nav_bar.addClass('active');
    _nav_bar_mark.addClass('active');
}

function fn_remove() {
    _js_hamburger.removeClass('active');
    _nav_bar.removeClass('active');
    _nav_bar_mark.removeClass('active');
}