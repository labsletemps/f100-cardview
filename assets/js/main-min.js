var _data;jQuery(document).ready(function(e){function t(){e(".mixitup-page-list").find("button").addClass("mdl-button"),setTimeout(function(){g.sendHeight()},200)}function n(t){"2019"==t?e.getJSON("https://labs.letemps.ch/forum-des-100/data-2019/static.json",function(t){var n=[];data=[],e.each(t.values,function(e,t){data.push(t)});var r=data.shift(),i=r.length,s;if(data=data.filter(function(e){return 1==e[0]}),data.reverse(),window.location.search.indexOf("auteur=")>0){var o=decodeURI(window.location.search.split("auteur=")[1]);data=data.filter(function(e){return e[i-4].indexOf(o)>=0})}e.each(data,function(e,t){for(var a={id:e,status:"publish"},i=t.length,s=0;s<i;s++)a[r[s]]=t[s];a.title=a.firstname+" "+a.name,a.slug=(a.title+" "+a.company+" "+a.function+" "+a.sector).toLowerCase(),a.slug=a.slug.normalize("NFD").replace(/[\u0300-\u036f]/g,""),a.storylink&&"https"==a.storylink.substring(0,5)&&"https"==a.image.substring(0,5)&&n.push(a)}),a({count:10,count_total:10,pages:1,posts:n})}):"archive"==t&&e.getJSON("data/archive.json",function(e){var t;a({count:10,count_total:10,pages:1,posts:e.data})})}function a(e){r(e),t(),j.revalidate(),g.sendHeight(),componentHandler.upgradeAllRegistered()}function r(t){var n=e("#event-template").html(),a,r=Handlebars.compile(n)({post:t.posts});e(".grid").html(r),c()}function i(){var t=new TimelineMax({paused:!1}),n=e(".overlay"),a=n.find(".spinner");t.to(a,.5,{autoAlpha:0,ease:Linear.easeNone},"-=0.0").to(n,.5,{autoAlpha:0,ease:Linear.easeNone},"-=0.0")}function s(){e(".grid button.mdl-js-button").click(function(e){return e.stopPropagation(),!1})}function o(){j.revalidate();var e="",t;return(e=e.split("/").join("."))?"."+e:x}function l(e){j.revalidate();var n=e.activeFilter.selector;parts=n.split(".");for(var a=parts.length-1;a>=0;a--)(parts[a].indexOf("data-title")>-1||parts[a].indexOf("event")>-1)&&delete parts[a];parts=parts.filter(function(e){return null!==e}),n=parts.join("."),t()}function c(){window.mixer=mixitup(w,{multifilter:{enable:!0},selectors:{target:".event"},pagination:{limit:4,hidePageListIfSinglePage:!0},animation:{queue:!1,duration:250,nudge:!0,reverseOut:!0,effects:"fade translateZ(-100px)"},load:{sort:"name"},callbacks:{onMixStart:function(){t(),u()},onMixEnd:l,onMixFail:function(){d()}}})}function u(){H.fadeOut()}function d(){H.fadeIn(),g.sendHeight()}function f(){e("form").each(function(){e(this).find(".reset").trigger("click"),e(this).find("ul li:first-child").trigger("click")}),e(".mdl-textfield").removeClass("is-dirty"),setTimeout(function(){u()},1e3)}function p(){1==S||(S=!0,e("html, body").animate({scrollTop:e(".hello-form").offset().top-20},function(){S=!1}))}var g=new pym.Child;n("2019"),e("#load2019").click(function(){e(".grid, .mixitup-page-list-trigger, .mixitup-page-list is-pinned").html(""),n("2019")}),e("#loadArchive").click(function(){n("archive")});var m=new Date,v=m.getMonth()+1,b=m.getDate(),h=m.getFullYear()+(v<10?"0":"")+v+(b<10?"0":"")+b;Handlebars.registerHelper("testIfPastEventOrder",function(e,t){var n=e;return parseInt(h)>e&&(n=parseInt(e)+1e7),n}),Handlebars.registerHelper("givesEventPremium",function(e,t){if("1"==e)var n="premium";else var n="not-premium";return n}),Handlebars.registerHelper("givesEventCategory",function(e,t){var n;return e}),Handlebars.registerHelper("givesEventYear",function(e,t){var n;return"y"+String(e).slice(0,4)}),Handlebars.registerHelper("testIfPastEventClass",function(e,t){var n=e;return n=parseInt(h)>e?"is-passed":""}),Handlebars.registerHelper("formatDate",function(e,t){var n=String(e).slice(0,4),a=String(e).slice(4,6),r,i;switch(a){case"01":a="janvier";break;case"02":a="février";break;case"03":a="mars";break;case"04":a="avril";break;case"05":a="mai";break;case"06":a="juin";break;case"07":a="juillet";break;case"08":a="août";break;case"09":a="septembre";break;case"10":a="octobre";break;case"11":a="novembre";break;case"12":a="décembre";break;default:break}return String(e).slice(6,8)+" "+a+" "+n}),e("#mc-embedded-subscribe-form").keyup(function(t){t.stopPropagation(),13==t.which&&e(".newsletter-submit.mdl-button").focus()}),e(".newsletter-submit").click(function(t){return t.stopPropagation(),e("#mc-embedded-subscribe").trigger("click"),!1}),e("button.promo--button").click(function(e){window.open(" https://boutique.letemps.ch/abonnements","_blank")});var k=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".mixitup-page-list-trigger",triggerHook:.9}).on("enter leave",function(t){e(".mixitup-page-list").toggleClass("is-pinned")}).addTo(k);var w=document.querySelector(".grid"),x=".event";window.onhashchange=function(){var e=o();e!==mixer.getState().activeFilter.selector&&mixer.filter(e)},t();var H=e(".error-message"),y=e("button.reset-filters");e(y).click(function(e){f()}),u();var S=!1,j=new Blazy});