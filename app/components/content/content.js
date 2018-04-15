'use strict';

var APP = window.APP = window.APP || {};

APP.content = (function () {

    var bindEventsToUI = function () {

    };

    var init = function () {
        
        console.log('APP.content');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());