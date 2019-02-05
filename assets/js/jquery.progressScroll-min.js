$.fn.progressScroll=function(r){var e=$.extend({fontSize:20,fontFamily:"sans-serif",color:"#009ACF",height:"5px",textArea:"dark"},r),o={},t;
// namespace
return"dark"===e.textArea?($(".scrollWrapper").css({"background-color":"rgba(0,0,0,0.75)"}),$(".scrollWrapper h3").css({color:"white"})):($(".scrollWrapper").css({"background-color":"rgba(255,255,255,0.75)"}),$(".scrollWrapper h3").css({color:"black"})),o.targetScroll=0,o.headHeight=$("header").outerHeight(),o.screenh=screen.height,o.divHeight=$(this).outerHeight(),o.numberOfH2=$("h2").length,console.log(o.numberOfH2),console.log("divHeight "+o.divHeight),console.log("headHeight "+o.headHeight),$(window).scroll(function(){var e=$(this).scrollTop()-o.headHeight,r=e/(o.divHeight-o.screenh)*100;
// console.log("scroll amount"+scrollAmount);
// console.log("scroll percent "+scrollPercent+"%");
// console.log("screen height"+progress.screenh)
//blank out the text if above the first h2 tag
e<=$("h2:first").position().top&&$(".scrollWrapper h3").text(""),
//everytime it passes an h2 it grabs it's text
$("h2").each(function(){if(e+o.headHeight>=$(this).position().top){var r=$(this).text();$(".scrollWrapper h3").text(r)}}),
//calculate scroll amount
$(".scroll-bar").css("width",r+"%"),
// $('.scroll-bar').css('opacity', scrollPercent/100 );
e>=o.targetScroll?$(".scrollWrapper").removeClass("hidden"):$(".scrollWrapper").addClass("hidden")}),$(".scroll-bar").css(e);
// });
};