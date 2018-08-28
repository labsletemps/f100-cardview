/*eslint-env jquery*/

jQuery(document).ready(function($)
{
    var $numbers 
    $('.card').click(function () {
        $numbers = this.getAttribute('card-url');
        //console.log($numbers);
        window.open($numbers, '_blank');
        
    }); 

    

});
