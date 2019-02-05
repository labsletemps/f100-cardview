/*eslint-env jquery*/
/*global mixitup*/
/*global ScrollMagic*/
/*global Handlebars*/
/* TODO
change dataset
https://www.kunkalabs.com/mixitup/docs/api-methods/
*/
jQuery(document).ready(function(i){function r(){i(".mixitup-page-list").find("button").addClass("mdl-button")}
// basé sur fcn par naveen: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd/7091965#7091965
function e(e){
// bypass for now
return"";var t="",n=" ans";if(!e)return"";e.indexOf("/")<0&&e.indexOf("T00:00:00.000Z")<0&&(t="~",n+="");var r=new Date,i=new Date(e),a=r.getFullYear()-i.getFullYear(),o=r.getMonth()-i.getMonth();return(o<0||0===o&&r.getDate()<i.getDate())&&a--,t+String(a)+n}function t(e){"2019"==e?i.getJSON("http://web.tcch.ch/tv-test/f100_get.php?lastx",function(e){var a=[],o=e.values.shift(),t=o.length,n;if((e=e.values.filter(function(e){return 1==e[0]})).reverse(),0<window.location.search.indexOf("auteur=")){var r=decodeURI(window.location.search.split("auteur=")[1]);e=e.filter(function(e){return 0<=e[t-4].indexOf(r)})}i.each(e,function(e,t){for(var n={id:e,status:"publish"},r=t.length,i=0;i<r;i++)n[o[i]]=t[i];n.title=n.firstname+" "+n.name,n.slug=(n.title+" "+n.company+" "+n.function+" "+n.sector).toLowerCase(),// + ' ' + item['sector'];
n.age=(n.birthdate,""),
// TODO allow multiple sectors?
//var sector_parts = item['sector']
n.storylink&&"https"==n.storylink.substring(0,5)&&"https"==n.image.substring(0,5)&&a.push(n)}),s({count:10,count_total:10,pages:1,posts:a})}):"archive"==e&&i.getJSON("data/archive.json",function(e){var t;s({count:10,count_total:10,pages:1,posts:e.data})})}function s(e){n(e),r(),O.revalidate()}function n(e){var t=i("#event-template").html(),n,r=Handlebars.compile(t)({post:e.posts});i(".grid").html(r),u(),a(),o()}function a(){var e=new TimelineMax({paused:!1}),t=i(".overlay"),n=t.find(".spinner");e.to(n,.5,{autoAlpha:0,ease:Linear.easeNone},"-=0.0").to(t,.5,{autoAlpha:0,ease:Linear.easeNone},"-=0.0")}
//Pour ne pas générer une erreur de formulaire dans le cas d'un ENTER dans le champ email
//Empèche le link quand on share une carte
function o(){i(".grid button.mdl-js-button").click(function(e){return e.stopPropagation(),!1})}
//JS link on promo bloc
function l(){O.revalidate();var e="",t;// window.location.pathname.replace(/^.+\/index\.php\/?|\/|\/?evenements\-staging\/?|\/?evenements\/?/g, '');
//var parsedSelector = selector.split('.');
// console.log('selector =' + selector);
// console.log('parsed selector =' + parsedSelector[1]);
//console.log(parsedSelector.length);
// for(i = 1; i < parsedSelector.length; i++) {
//   console.log('.' + parsedSelector[i]);
//   $('li.' + parsedSelector[i]).remove();
// }
return(e=e.split("/").join("."))?"."+e:x}function c(e){O.revalidate();var t=e.activeFilter.selector;parts=t.split(".");for(var n=parts.length-1;0<=n;n--)(-1<parts[n].indexOf("data-title")||-1<parts[n].indexOf("event"))&&delete parts[n];parts=parts.filter(function(e){return null!==e}),t=parts.join("."),r()}function u(){window.mixer=mixitup(w,{multifilter:{enable:!0},selectors:{target:".event"},pagination:{limit:6,hidePageListIfSinglePage:!0},animation:{queue:!1,duration:250,nudge:!0,reverseOut:!0,effects:"fade translateZ(-100px)"},load:{},callbacks:{onMixStart:function(){r(),f()},onMixEnd:c,onMixFail:function(){g()}}})}function f(){H.fadeOut()}function g(){H.fadeIn()}function d(){i("form").each(function(){i(this).find(".reset").trigger("click"),i(this).find("ul li:first-child").trigger("click")}),i(".mdl-textfield").removeClass("is-dirty"),setTimeout(function(){f()},1e3)}function p(){1==y||(y=!0,i("html, body").animate({scrollTop:i(".hello-form").offset().top-20},function(){y=!1}))}t("2019"),
/*setTimeout(function(){
      var bLazy = new Blazy();

      //loadProfiles('archive')
    }, 1000);*/
i("#load2019").click(function(){i(".grid, .mixitup-page-list-trigger, .mixitup-page-list is-pinned").html(""),t("2019")}),i("#loadArchive").click(function(){t("archive")});var m=new Date,v=m.getMonth()+1,b=m.getDate(),h=m.getFullYear()+(v<10?"0":"")+v+(b<10?"0":"")+b;Handlebars.registerHelper("testIfPastEventOrder",function(e,t){var n=e;return parseInt(h)>e&&(n=parseInt(e)+1e7),n}),Handlebars.registerHelper("givesEventPremium",function(e,t){if("1"==e)var n="premium";else var n="not-premium";return n}),Handlebars.registerHelper("givesEventCategory",function(e,t){var n;return e}),Handlebars.registerHelper("givesEventYear",function(e,t){var n;return"y"+String(e).slice(0,4)}),Handlebars.registerHelper("testIfPastEventClass",function(e,t){var n=e;return n=parseInt(h)>e?"is-passed":""}),Handlebars.registerHelper("formatDate",function(e,t){var n=String(e).slice(0,4),r=String(e).slice(4,6),i,a;switch(r){case"01":r="janvier";break;case"02":r="février";break;case"03":r="mars";break;case"04":r="avril";break;case"05":r="mai";break;case"06":r="juin";break;case"07":r="juillet";break;case"08":r="août";break;case"09":r="septembre";break;case"10":r="octobre";break;case"11":r="novembre";break;case"12":r="décembre";break;default:break}return String(e).slice(6,8)+" "+r+" "+n}),i("#mc-embedded-subscribe-form").keyup(function(e){e.stopPropagation(),13==e.which&&i(".newsletter-submit.mdl-button").focus()}),
//Ce bouton Google material trigger le bouton mailchimp qui est caché
i(".newsletter-submit").click(function(e){return e.stopPropagation(),i("#mc-embedded-subscribe").trigger("click"),!1}),i("button.promo--button").click(function(e){window.open(" https://boutique.letemps.ch/abonnements","_blank")});
//Pagination is stick on mobile
var k=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".mixitup-page-list-trigger",triggerHook:.9}).on("enter leave",function(e){i(".mixitup-page-list").toggleClass("is-pinned")}).addTo(k);
//-------------------------------------------------------------------------------------//
//  MIXITUP CONFIG
//-------------------------------------------------------------------------------------//
var w=document.querySelector(".grid"),x=".event";window.onhashchange=function(){var e=l();e!==mixer.getState().activeFilter.selector&&// no change
mixer.filter(e)},r();var H=i(".error-message"),S=i("button.reset-filters");i(S).click(function(e){d()}),f();var y=!1,O=new Blazy});