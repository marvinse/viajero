'use strict';

var APP = window.APP = window.APP || {};

APP.author = (function () {

    var bindEventsToUI = function () {

    };

    var init = function () {
        console.log('APP.author');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());