/*eslint-env jquery*/
/*global mixitup*/
/*global ScrollMagic*/

jQuery(document).ready(function($)
{
    // var $numbers 
    // $('.card').click(function () {
    //     $numbers = this.getAttribute('card-url');
    //     //console.log($numbers);
    //     window.open($numbers, '_blank');
        
    // }); 

    
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
    $('.grid button.mdl-js-button').click(function (e) {
        e.stopPropagation();
        return false;
    }); 

    //JS link on promo bloc
    $('button.promo--button').click(function (e) {
        window.open(' https://boutique.letemps.ch/abonnements', '_blank');
    }); 

    //-------------------------------------------------------------------------------------//
    //  SCROLLMAGIC STICKY CONFIG
    //-------------------------------------------------------------------------------------//

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

    // var initialFilter = ".category-premium";
    // var targetSelector = ".event";

   

    // function getSelectorFromHash() {
    //     var hash = window.location.hash.replace(/^#/g, '');
    //     var selector = hash ? '.' + hash : targetSelector;
    //     return selector;
    // }


    // mixitup('.grid', {
    //     multifilter: { 
    //         enable: true 
    //     },
    //     selectors: {
    //         target: '.event'
    //     },
    //     animation: {
    //         "duration": 250,
    //         "nudge": true,
    //         "reverseOut": false,
    //         "effects": "fade translateZ(-100px)"
    //     },
    //     load: {
    //         filter: getSelectorFromHash()
    //     },
    //     pagination: {
    //         limit: 6, 
    //         hidePageListIfSinglePage: true
    //     },
    //     callbacks: {
    //         onMixStart: function() {
    //             stylePagination();
    //         },
    //         onMixEnd: function() {
    //             stylePagination();
    //         }
    //     }  
    // });
    
    // function stylePagination(){
    //     //alert('coucou');
    //     $('.mixitup-page-list').find('button').addClass('mdl-button');
    //     $('html, body').animate({
    //         scrollTop:$('.hello-form').offset().top - 20
    //     });
    // }
    // stylePagination();


    var containerEl = document.querySelector('.grid');
    var targetSelector = '.event';

    function getSelectorFromHash() {
        var hash = window.location.hash.replace(/^#/g, '');
        var selector = hash ? '.' + hash : targetSelector;
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
        var newHash = '#' + selector.replace(/^\./g, '');
        if (selector === targetSelector && window.location.hash) {
            // Equivalent to filter "all", remove the hash
            history.pushState(null, document.title, window.location.pathname); // or history.replaceState()
        } else if (newHash !== window.location.hash && selector !== targetSelector) {
            // Change the hash
            history.pushState(null, document.title, window.location.pathname + newHash); // or history.replaceState()
        }

        stylePagination();
        scrollToTop();
    }



    window['mixer'] = mixitup(containerEl, {
        multifilter: {
            enable: true
        },
        selectors: {
             target: '.event'
        },
         pagination: {
             limit: 6, 
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
            filter: getSelectorFromHash()
        },
        callbacks: {
            onMixStart: function() {
                stylePagination();
            },
            onMixEnd: setHash,
            onMixFail: function() {
                 showErrorMessage();
            }
        }
    });

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
    
    //JS link on promo bloc

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
                    //console.log('hello');
            });
        }
       
    }

});
