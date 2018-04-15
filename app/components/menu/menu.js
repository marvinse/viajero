'use strict';

var APP = window.APP = window.APP || {};

APP.menu = (function () {

    var activateSubitemsForMobile = function(){
        $('.menu__items > ul > li').each(function(){
            if( $(this).has('.menu__subitems').length > 0 ){
                if( APP.utils.tools.isMobile() ){
                    $(this).find('a').off('click');
                    $(this).off('click');
                    $(this).find('a').click(function(e){
                        e.preventDefault();
                    });
                    $(this).click(function(){
                        $(this).find('.menu__subitems').slideToggle();
                    });   
                }else{
                    $('.menu__items').attr('style', '');
                    $(this).find('a').off('click');
                    $(this).off('click');
                    $(this).find('.menu__subitems').attr('style', '');
                }
            }
        });
    };

    var bindEventsToUI = function () {
        $('.menu__hamburguer').click(function(){
            $('.menu__items').slideToggle();
        });
        activateSubitemsForMobile();

        $( window ).resize(function() {
            activateSubitemsForMobile();
        });
    };

    var init = function () {
        console.log('APP.menu');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());