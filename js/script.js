$(document).ready(function() {
    $('.cart').on('click', function(event) {
        event.preventDefault();
        var cartPanel = $('#cart-panel');
        if (cartPanel.hasClass('visible')) {
            cartPanel.removeClass('visible');
        }
        else {
            cartPanel.addClass('visible');
        }
    });

    $('.tababble li a').on('click', function(event) {
        event.preventDefault();
        var tababble = $(this).closest('.tababble'), target = $(this).parent('li').data('target');
        tababble.find('li').removeClass('selected');
        tababble.find('section').removeClass('selected');
        $(this).parent('li').addClass('selected');
        tababble.find('section[data-name="' + target + '"]').addClass('selected');
    });

    $('.menu-handler').on('click', function(event) {
        event.preventDefault();
        $(this).siblings('ul').slideToggle(300);
    });


    // Scrolling
    $(window).scroll(function() {
        positionTopPanel();
    });

    function positionTopPanel() {
        var scrolledTop = $(window).scrollTop();
        if (scrolledTop > 20) {
            $('#top-container, #searcher-container, #searcher-panel').addClass('sticked');
        } else {
            $('#top-container, #searcher-container, #searcher-panel').removeClass('sticked');
        }
    }

    positionTopPanel();

});