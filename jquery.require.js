(function($) {
    'use strict';

    var loadedUrls = {},
        cachedScriptPromises = {};

    $.require = function(url, callback, errback) {
        var urls = (url instanceof Array) ? url : [url],
            promises = [];
        for (var i = 0; i < urls.length; i++) {
            var url = urls[i];
            if ( ! cachedScriptPromises[url]) {
                cachedScriptPromises[url] = $.Deferred(function(defer) {
                    $.ajax({
                        dataType: 'script',
                        cache: true,
                        url: url
                    }).then(defer.resolve, defer.reject);
                }).promise();
            }
            promises.push(cachedScriptPromises[url]);
        }
        $.when.apply($, promises).done(callback).fail(errback);
    };
})(jQuery);