/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */
!function(a,o,n,l){var h=a(o);a.fn.lazyload=function(e){function t(){var t=0;r.each(function(){var e=a(this);if(!f.skip_invisible||e.is(":visible"))if(a.abovethetop(this,f)||a.leftofbegin(this,f));else if(a.belowthefold(this,f)||a.rightoffold(this,f)){if(++t>f.failure_limit)return!1}else e.trigger("appear"),
/* if we found an image we'll load, reset the counter */
t=0})}var r=this,i,f={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:o,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return e&&(
/* Maintain BC for a couple of versions. */
l!==e.failurelimit&&(e.failure_limit=e.failurelimit,delete e.failurelimit),l!==e.effectspeed&&(e.effect_speed=e.effectspeed,delete e.effectspeed),a.extend(f,e))
/* Cache container as jQuery as object. */,i=f.container===l||f.container===o?h:a(f.container),
/* Fire one scroll event per scroll. Not one scroll event per image. */
0===f.event.indexOf("scroll")&&i.bind(f.event,function(){return t()}),this.each(function(){var o=this,n=a(o);o.loaded=!1,
/* If no src attribute given use data:uri. */
n.attr("src")!==l&&!1!==n.attr("src")||n.is("img")&&n.attr("src",f.placeholder)
/* When appear is triggered load original image. */,n.one("appear",function(){if(!this.loaded){if(f.appear){var e=r.length;f.appear.call(o,e,f)}a("<img />").bind("load",function(){var e=n.attr("data-"+f.data_attribute);n.hide(),n.is("img")?n.attr("src",e):n.css("background-image","url('"+e+"')"),n[f.effect](f.effect_speed),o.loaded=!0;
/* Remove image from array so it is not looped next time. */
var t=a.grep(r,function(e){return!e.loaded});if(r=a(t),f.load){var i=r.length;f.load.call(o,i,f)}}).attr("src",n.attr("data-"+f.data_attribute))}}),
/* When wanted event is triggered load original image */
/* by triggering appear.                              */
0!==f.event.indexOf("scroll")&&n.bind(f.event,function(){o.loaded||n.trigger("appear")})}),
/* Check if something appears when window is resized. */
h.bind("resize",function(){t()}),
/* With IOS5 force loading images when navigating with back button. */
/* Non optimal workaround. */
/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&h.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&r.each(function(){a(this).trigger("appear")})})
/* Force initial check if images should appear. */,a(n).ready(function(){t()}),this},
/* Convenience methods in jQuery namespace.           */
/* Use as  $.belowthefold(element, {threshold : 100, container : window}) */
a.belowthefold=function(e,t){var i;return(i=t.container===l||t.container===o?(o.innerHeight?o.innerHeight:h.height())+h.scrollTop():a(t.container).offset().top+a(t.container).height())<=a(e).offset().top-t.threshold},a.rightoffold=function(e,t){var i;return(i=t.container===l||t.container===o?h.width()+h.scrollLeft():a(t.container).offset().left+a(t.container).width())<=a(e).offset().left-t.threshold},a.abovethetop=function(e,t){var i;return(i=t.container===l||t.container===o?h.scrollTop():a(t.container).offset().top)>=a(e).offset().top+t.threshold+a(e).height()},a.leftofbegin=function(e,t){var i;return(i=t.container===l||t.container===o?h.scrollLeft():a(t.container).offset().left)>=a(e).offset().left+t.threshold+a(e).width()},a.inviewport=function(e,t){return!(a.rightoffold(e,t)||a.leftofbegin(e,t)||a.belowthefold(e,t)||a.abovethetop(e,t))},
/* Custom selectors for your convenience.   */
/* Use as $("img:below-the-fold").something() or */
/* $("img").filter(":below-the-fold").something() which is faster */
a.extend(a.expr[":"],{"below-the-fold":function(e){return a.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!a.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return a.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!a.rightoffold(e,{threshold:0})},"in-viewport":function(e){return a.inviewport(e,{threshold:0})},
/* Maintain BC for couple of versions. */
"above-the-fold":function(e){return!a.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return a.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!a.rightoffold(e,{threshold:0})}})}(jQuery,window,document);