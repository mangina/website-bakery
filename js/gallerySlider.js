$(function() {
    var $container = $('.block-pancakes__slider-container'),
        $arrow = $('.block-pancakes__arrow'),
        i = 0, len = 2;

    $arrow.on('click', function() {
        var isLeft = $(this).hasClass('block-pancakes__arrow-left');
        i += (isLeft) ? 2 : -2;
        i > len && (i = len);
        i < 0 && (i = 0);
        var left = -i * 190 + "px";
        $container.stop().animate({
            left: left
        }, 300);
    });
});