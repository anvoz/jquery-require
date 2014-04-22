(function($) {
    'use strict';

    var cachedScriptPromises = {};

    $.require = function(url) {
        var urls = (url instanceof Array) ? url : [url],
            promises = [];
        for (var i = 0; i < urls.length; i++) {
            var url = urls[i];
            if ( ! cachedScriptPromises[url]) {
                cachedScriptPromises[url] = $.ajax({
                    dataType: 'script',
                    cache: true,
                    url: url
                });
            }
            promises.push(cachedScriptPromises[url]);
        }
        return $.when.apply($, promises);
    };
})(jQuery);