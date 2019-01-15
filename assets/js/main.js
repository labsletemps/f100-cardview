/*eslint-env jquery*/
/*global mixitup*/
/*global ScrollMagic*/
/*global Handlebars*/


jQuery(document).ready(function($)
{

    //Google API
    // Problème avec search url
    // partage
    // Générer filtres ?
    //icon partage ? <i class="material-icons md-18">face</i>

    // https://labs.letemps.ch/interactive/2018/_archives_f100/_f100-2019-preview/data/f100_bridge.php
    // http://localhost/~rnp/_lab/f100_bridge.php
    //$.getJSON( "https://sheets.googleapis.com/v4/spreadsheets/18Jd5UrdYXOr1CEpTU9qzsxDHEnlhE0o5b5OL3buepHk/values/A7:L105?key=AIzaSyDUR2B07e6TGonmFjLIqbEr8yxiYf7SA4k", function( data ) {
    $.getJSON( "http://web.tcch.ch/tv-test/f100_get.php?7", function( data ) {
      var items = [];
      var columns = data['values'].shift();
      var colNumber = columns.length;

      data = data['values'].filter(row => row[0] == 1);

      $.each(data, function(key, val){
        item = {'id': key,
          'status': 'publish'
        };
        var rowLength = val.length;
        for(var i = 0; i < rowLength; i++){
          item[ columns[i] ] = val[i];
        }

        item['title'] = item['firstname'] + ' ' + item['name'];
        item['slug'] = item['title'].toLowerCase(); // + ' ' + item['sector'];

        if( (item['storylink']) && (item['storylink'].substring(0, 5) == 'https') )
        {
          items.push(item);
        }
      });

      var cards = {
        'count': 10,
        'count_total': 10,
        'pages': 1,
        'posts': items
      }
      displayEvents(cards);
    });

    function displayEvents(data){
        var source   = $("#event-template").html();
        var template = Handlebars.compile(source);
        var html = template({'post':data.posts});
        $(".grid").html(html);

        initMixer();
        hideOverlay()
        preventLinkBehavior();
    }

    Handlebars.registerHelper('checkIfPremium', function(value, options) {
        if ( value == '1')
        {
            var badgeReturned = '<span class="card-chip mdl-chip"><span class="card-chip__text mdl-chip__text">Premium</span></span>'
        }
        return badgeReturned;
    })


    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var today = d.getFullYear() +
        (month<10 ? '0' : '') + month +
        (day<10 ? '0' : '') + day;


    Handlebars.registerHelper('testIfPastEventOrder', function(value, options) {
        var dateIndex = value;
        if (parseInt(today) > value)
        {
            dateIndex = parseInt(value) + 10000000;
        }
        return dateIndex;
    })



    Handlebars.registerHelper('givesEventPremium', function(value, options) {
        if (value == '1')
        {
            var givesEventPremium = 'premium';
        }
        else
        {
            var givesEventPremium = 'not-premium';
        }
        return givesEventPremium;
    })

    Handlebars.registerHelper('givesEventCategory', function(value, options) {
        var givesEventCategory = value;
        return givesEventCategory;
    })


    Handlebars.registerHelper('givesEventYear', function(value, options) {
        var givesEventYear = 'y' + String(value).slice(0, 4);
        return givesEventYear;
    })





    Handlebars.registerHelper('testIfPastEventClass', function(value, options) {
        var datePassedClass = value;
        if (parseInt(today) > value)
        {
            datePassedClass = 'is-passed';
        }
        else
        {
            datePassedClass = '';
        }
        return datePassedClass;
    })

    Handlebars.registerHelper('formatDate', function(value, options) {

        var year = String(value).slice(0, 4);
        var month = String(value).slice(4, 6);
        switch(month) {
            case '01':
                month = 'janvier';
                break;
            case '02':
                month = 'février';
                break;
            case '03':
                month = 'mars';
                break;
            case '04':
                month = 'avril';
                break;
            case '05':
                month = 'mai';
                break;
            case '06':
                month = 'juin';
                break;
            case '07':
                month = 'juillet';
                break;
            case '08':
                month = 'août';
                break;
            case '09':
                month = 'septembre';
                break;
            case '10':
                month = 'octobre';
                break;
            case '11':
                month = 'novembre';
                break;
            case '12':
                month = 'décembre';
                break;
            default:
                break;
        }
        var day = String(value).slice(6, 8);

        var dateReturned = day + ' ' + month + ' ' + year;

        return dateReturned;
    })

    function hideOverlay(){
        var tlIntroduction =  new TimelineMax({ paused: false });
        var $overlay = $('.overlay');
        var $spinner = $overlay.find('.spinner');
        tlIntroduction
            .to($spinner, 0.5, {autoAlpha: 0, ease:Linear.easeNone}, '-=0.0')
            .to($overlay, 0.5, {autoAlpha: 0, ease:Linear.easeNone}, '-=0.0');
    }



    //Pour ne pas générer une erreur de formulaire dans le cas d'un ENTER dans le champ email
    $('#mc-embedded-subscribe-form').keyup(function (e) {
        e.stopPropagation();
        if ( e.which == 13 ) {
             $('.newsletter-submit.mdl-button').focus();
          }
    });

   //Ce bouton Google material trigger le bouton mailchimp qui est caché
    $('.newsletter-submit').click(function (e) {
        e.stopPropagation();
        $( "#mc-embedded-subscribe" ).trigger( "click" );
        return false;

    });

    //Empèche le link quand on share une carte
    function preventLinkBehavior(){
        $('.grid button.mdl-js-button').click(function (e) {
            e.stopPropagation();
            return false;
        });
    }


    //JS link on promo bloc
    $('button.promo--button').click(function (e) {
        window.open(' https://boutique.letemps.ch/abonnements', '_blank');
    });

    //Pagination is stick on mobile
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({triggerElement: ".mixitup-page-list-trigger", triggerHook: 0.9})
        //.setPin("footer")

        .on('enter leave', function(e){
              $('.mixitup-page-list').toggleClass('is-pinned');
          })
        //.addIndicators({name: "PAGE LIST PINNED"}) // add indicators (requires plugin)
        .addTo(controller);



    //-------------------------------------------------------------------------------------//
    //  MIXITUP CONFIG
	//-------------------------------------------------------------------------------------//
    var containerEl = document.querySelector('.grid');
    var targetSelector = '.event';

    function getSelectorFromHash() {
        var pathname = ''; // window.location.pathname.replace(/^.+\/index\.php\/?|\/|\/?evenements\-staging\/?|\/?evenements\/?/g, '');
        pathname = pathname.split('/').join('.');

        var selector = pathname ? '.' + pathname : targetSelector;
        //var parsedSelector = selector.split('.');
        // console.log('selector =' + selector);
        // console.log('parsed selector =' + parsedSelector[1]);

        //console.log(parsedSelector.length);
        // for(i = 1; i < parsedSelector.length; i++) {
        //   console.log('.' + parsedSelector[i]);
        //   $('li.' + parsedSelector[i]).remove();
        // }
        return selector;

    }

    function setHash(state) {
        var selector = state.activeFilter.selector;

        parts = selector.split('.');
        for (var i = parts.length - 1; i >= 0; i--) {
            if(parts[i].indexOf('data-title') > -1 || parts[i].indexOf('event') > -1) {
                delete parts[i];
            }
        }
        parts = parts.filter(function(el){ return el !== null; });
        selector = parts.join('.');



        stylePagination();
        scrollToTop();
    }


    function initMixer(){
        window['mixer'] = mixitup(containerEl, {
            multifilter: {
                enable: true
            },
            selectors: {
                 target: '.event'
            },
             pagination: {
                 limit: 12,
                 hidePageListIfSinglePage: true
             },
            animation: {
                "queue": false,
               "duration": 250,
               "nudge": true,
               "reverseOut": true,
               "effects": "fade translateZ(-100px)"
            },
            load: {
                // filter: getSelectorFromHash(),
                //sort: 'date:asc'
            },
            callbacks: {
                onMixStart: function() {
                    stylePagination();
                    hideErrorMessage();
                },
                onMixEnd: setHash,
                onMixFail: function() {
                     showErrorMessage();
                }
            }
        });
    }

    window.onhashchange = function() {
        var selector = getSelectorFromHash();
        if (selector === mixer.getState().activeFilter.selector) return; // no change
        mixer.filter(selector);
    };

    function stylePagination(){
        $('.mixitup-page-list').find('button').addClass('mdl-button');
    }
    stylePagination();

    var $errorMessage = $('.error-message');
    var $resetFiltersButton = $('button.reset-filters');


    $($resetFiltersButton).click(function (e) {
       resetUi();
    });

    hideErrorMessage();
    function hideErrorMessage(){
         $errorMessage.fadeOut();
    }

    function showErrorMessage(){
         $errorMessage.fadeIn();
    }

    function resetUi(){
        $("form").each(function() {
          $(this).find( ".reset" ).trigger( "click" );
          $(this).find( "ul li:first-child" ).trigger( "click" );
        });

        $('.mdl-textfield').removeClass('is-dirty');
        setTimeout(function(){ hideErrorMessage(); }, 1000);
    }

    var uiScrolling = false;
    function scrollToTop(){
        if (uiScrolling == true)
        {

        }
        else
        {
            uiScrolling = true;
            $('html, body').animate({
                scrollTop:$('.hello-form').offset().top - 20
                }, function(){
                    uiScrolling = false;
            });
        }

    }

});
