'use strict';

var APP = window.APP = window.APP || {};

APP.countries = (function () {

    var bindEventsToUI = function () {

    };

    var init = function () {
        console.log('APP.countries');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());