!function(b){var c,a,d;c={interval:100};a=function(e){if(e.test()){clearInterval(e.iid);e.cb.call(e.context||window,e.data)}};d=function(e){e.iid=setInterval(function(){a(e)},e.interval)};b.doWhen=function(g,e,f){d(b.extend({test:g,cb:e},c,f))}}(window.jQuery);

