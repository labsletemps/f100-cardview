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

   

    
    //empèche le link quand on share une carte
    $('.grid button.mdl-js-button').click(function (e) {
        e.stopPropagation();
        return false;

    }); 

    //Fait apparaître la newsletter
    // var $newsletter = $('.popup-newsletter');
    // var $newsletterCloseButton = $newsletter.find('.popup-newsletter--close-button');

 //    $('header').click(function () {
 //        showNewsletter()
 //    });

 //    $($newsletterCloseButton).click(function () {
 //        hideNewsletter()
 //    }); 

	// function showNewsletter(){
	// 	$newsletter.css('visibility', 'visible').css('display', 'block');
	// }

	// function hideNewsletter(){
	// 	$newsletter.css('visibility', 'hidden').css('display', 'none');
	// }
	
    var initialFilter = ".category-premium";
    var targetSelector = ".event";

    //var hash = window.location.hash.replace(/^#/g, '');

    //alert(hash);


    function getSelectorFromHash() {
        var hash = window.location.hash.replace(/^#/g, '');

        var selector = hash ? '.' + hash : targetSelector;
        //alert(hash);
        return selector;


    }


    mixitup('.grid', {
        selectors: {
            target: '.event'
        },
        animation: {
            "duration": 250,
            "nudge": true,
            "reverseOut": false,
            "effects": "fade translateZ(-100px)"
        },
        load: {
            //filter: initialFilter
            filter: getSelectorFromHash()
        },
        pagination: {
            limit: 6, // impose a limit of 8 targets per page
            hidePageListIfSinglePage: true
        },
        callbacks: {
            onMixStart: function() {
                

                finishPagination();
            },
            onMixEnd: function() {
                

                finishPagination();
            }
        }  
    });

    $('button.promo--button').click(function (e) {
        window.open(' https://boutique.letemps.ch/abonnements', '_blank');
    }); 
    
    function finishPagination(){
        //alert('coucou');
        $('.mixitup-page-list').find('button').addClass('mdl-button');
        $('html, body').animate({
            scrollTop:$('.hello-form').offset().top - 20
        });
    }
    finishPagination();


    //$('.mixitup-page-list').find('button').addClass('mdl-button').addClass('mdl-button--raised');

    // var mixer = mixitup('.grid', {
    //     selectors: {
    //         target: '.blog-item'
    //     },
    //     animation: {
    //         duration: 300
    //     }
    // });

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({triggerElement: ".mixitup-page-list-trigger", triggerHook: 0.9})
        //.setPin("footer")

        .on('enter leave', function(e){
              $('.mixitup-page-list').toggleClass('is-pinned');
          })
        //.addIndicators({name: "PAGE LIST PINNED"}) // add indicators (requires plugin)
        .addTo(controller);
    

});
