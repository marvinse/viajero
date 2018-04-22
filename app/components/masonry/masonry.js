'use strict';

var APP = window.APP = window.APP || {};

APP.masonry = (function () {

    var bindEventsToUI = function () {

    };

    var init = function () {
        console.log('APP.masonry');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());