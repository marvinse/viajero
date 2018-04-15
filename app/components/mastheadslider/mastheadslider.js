'use strict';

var APP = window.APP = window.APP || {};

APP.mastheadslider = (function () {

    var bindEventsToUI = function () {
        $('.mastheadslider .mastheadslider__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
        $('.mastheadslider__controls--left').click(function(){
            $('.mastheadslider ul').slick('slickPrev');
        });
        $('.mastheadslider__controls--right').click(function(){
            $('.mastheadslider ul').slick('slickNext');
        });
    };

    var init = function () {
        console.log('APP.mastheadslider');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());