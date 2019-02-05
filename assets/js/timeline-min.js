jQuery(document).ready(function(l){function e(e){e.each(function(){var t=l(this),n={};
//cache timeline components 
n.timelineWrapper=t.find(".events-wrapper"),n.eventsWrapper=n.timelineWrapper.children(".events"),n.fillingLine=n.eventsWrapper.children(".filling-line"),n.timelineEvents=n.eventsWrapper.find("a"),n.timelineDates=g(n.timelineEvents),n.eventsMinLapse=w(n.timelineDates),n.timelineNavigation=t.find(".cd-timeline-navigation"),n.eventsContent=t.children(".events-content"),
//assign a left postion to the single events along the timeline
p(n,C);
//assign a width to the timeline
var i=v(n,C);
//the timeline has been initialize - show it
t.addClass("loaded"),
//detect click on the next arrow
n.timelineNavigation.on("click",".next",function(e){e.preventDefault(),r(n,i,"next")}),
//detect click on the prev arrow
n.timelineNavigation.on("click",".prev",function(e){e.preventDefault(),r(n,i,"prev")}),
//detect click on the a single event - show new event content
n.eventsWrapper.on("click","a",function(e){e.preventDefault(),n.timelineEvents.removeClass("selected"),l(this).addClass("selected"),c(l(this)),f(l(this),n.fillingLine,i),d(l(this),n.eventsContent)}),
//on swipe, show next/prev event content
n.eventsContent.on("swipeleft",function(){var e;"mobile"==y()&&a(n,i,"next")}),n.eventsContent.on("swiperight",function(){var e;"mobile"==y()&&a(n,i,"prev")}),
//keyboard navigation
l(document).keyup(function(e){"37"==e.which&&x(t.get(0))?a(n,i,"prev"):"39"==e.which&&x(t.get(0))&&a(n,i,"next")})})}function r(e,t,n){
//retrieve translateX value of timelineComponents['eventsWrapper']
var i=u(e.eventsWrapper),r=Number(e.timelineWrapper.css("width").replace("px",""));
//translate the timeline to the left('next')/right('prev') 
//translate the timeline to the left('next')/right('prev') 
"next"==n?o(e,i-r+C,r-t):o(e,i+r-C)}function a(e,t,n){
//go from one event to the next/previous one
var i=e.eventsContent.find(".selected"),r;if(0<("next"==n?i.next():i.prev()).length){//if there's a next/prev event - show it
var a=e.eventsWrapper.find(".selected"),l="next"==n?a.parent("li").next("li").children("a"):a.parent("li").prev("li").children("a");f(l,e.fillingLine,t),d(l,e.eventsContent),l.addClass("selected"),a.removeClass("selected"),c(l),s(n,l,e,t)}}function s(e,t,n,i){
//translate timeline to the left/right according to the position of the selected event
var r=window.getComputedStyle(t.get(0),null),a=Number(r.getPropertyValue("left").replace("px","")),l=Number(n.timelineWrapper.css("width").replace("px","")),i=Number(n.eventsWrapper.css("width").replace("px","")),s=u(n.eventsWrapper);("next"==e&&l-s<a||"prev"==e&&a<-s)&&o(n,l/2-a,l-i)}function o(e,t,n){var i;t=0<t?0:t,//do not translate more than timeline width
m(e.eventsWrapper.get(0),"translateX",(//only negative translate value
t=void 0!==n&&t<n?n:t)+"px"),
//update navigation arrows visibility
0==t?e.timelineNavigation.find(".prev").addClass("inactive"):e.timelineNavigation.find(".prev").removeClass("inactive"),t==n?e.timelineNavigation.find(".next").addClass("inactive"):e.timelineNavigation.find(".next").removeClass("inactive")}function f(e,t,n){
//change .filling-line length according to the selected event
var i=window.getComputedStyle(e.get(0),null),r=i.getPropertyValue("left"),a=i.getPropertyValue("width"),l=(r=Number(r.replace("px",""))+Number(a.replace("px",""))/2)/n;m(t.get(0),"scaleX",l)}function p(e,t){for(i=0;i<e.timelineDates.length;i++){var n=h(e.timelineDates[0],e.timelineDates[i]),r=Math.round(n/e.eventsMinLapse)+2;e.timelineEvents.eq(i).css("left",r*t+"px")}}function v(e,t){var n,i=h(e.timelineDates[0],e.timelineDates[e.timelineDates.length-1])/e.eventsMinLapse,i,r=(i=Math.round(i)+4)*t;return e.eventsWrapper.css("width",r+"px"),f(e.timelineEvents.eq(0),e.fillingLine,r),r}function d(e,t){var n=e.data("date"),i=t.find(".selected"),r=t.find('[data-date="'+n+'"]'),a=r.height();if(r.index()>i.index())var l="selected enter-right",s="leave-left";else var l="selected enter-left",s="leave-right";r.attr("class",l),i.attr("class",s).one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){i.removeClass("leave-right leave-left"),r.removeClass("enter-left enter-right")}),t.css("height",a+"px")}function c(e){e.parent("li").prevAll("li").children("a").addClass("older-event").end().end().nextAll("li").children("a").removeClass("older-event")}function u(e){var t=window.getComputedStyle(e.get(0),null),n;if(0<=(n=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("-moz-transform")||t.getPropertyValue("-ms-transform")||t.getPropertyValue("-o-transform")||t.getPropertyValue("transform")).indexOf("("))var n,i=(n=(n=(n=n.split("(")[1]).split(")")[0]).split(","))[4];else var i=0;return Number(i)}function m(e,t,n){e.style["-webkit-transform"]=t+"("+n+")",e.style["-moz-transform"]=t+"("+n+")",e.style["-ms-transform"]=t+"("+n+")",e.style["-o-transform"]=t+"("+n+")",e.style.transform=t+"("+n+")"}
//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
function g(e){var n=[];return e.each(function(){var e=l(this).data("date").split("/"),t=new Date(e[2],e[1]-1,e[0]);n.push(t)}),n}function t(e){var a=[];return e.each(function(){var e,t=l(this).data("date").split("T");if(1<t.length)//both DD/MM/YEAR and time are provided
var n=t[0].split("/"),i=t[1].split(":");else if(0<=t[0].indexOf(":"))//only time is provide
var n=["2000","0","0"],i=t[0].split(":");else//only DD/MM/YEAR
var n=t[0].split("/"),i=["0","0"];var r=new Date(n[2],n[1]-1,n[0],i[0],i[1]);a.push(r)}),a}function h(e,t){return Math.round(t-e)}function w(e){
//determine the minimum distance among events
var t=[];for(i=1;i<e.length;i++){var n=h(e[i-1],e[i]);t.push(n)}return Math.min.apply(null,t)}
/*
		How to tell if a DOM element is visible in the current viewport?
		http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	*/function x(e){for(var t=e.offsetTop,n=e.offsetLeft,i=e.offsetWidth,r=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,n+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&n<window.pageXOffset+window.innerWidth&&t+r>window.pageYOffset&&n+i>window.pageXOffset}function y(){
//check if mobile or desktop device
return window.getComputedStyle(document.querySelector(".cd-horizontal-timeline"),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"")}var n=l(".cd-horizontal-timeline"),C=60;0<n.length&&e(n)});