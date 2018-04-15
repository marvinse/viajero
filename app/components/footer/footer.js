'use strict';

var APP = window.APP = window.APP || {};

APP.footer = (function () {

    var bindEventsToUI = function () {
        /* eslint-disable */
        var feed = new Instafeed({
            get: 'user',
            userId: 1384127063, //mase9207profile
            accessToken: '1384127063.374c2fd.e539a34258fe42c896def53fbbdc1245',
            target: 'instafeed',
            limit: 6,
            resolution: 'thumbnail',
            template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /></a>'
        });
        feed.run();
        /* eslint-enable */
    };

    var init = function () {
        console.log('APP.footer');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());