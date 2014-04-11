(function($) {
    $.fn.log = function(msg) {
        this.each(function() {
            $(this).append('<p>' + msg + '</p>');
        });
    };
})(jQuery);
$('#log').log('<b>From jquery.log.js:</b> $.fn.log(msg)!');