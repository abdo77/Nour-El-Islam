jQuery(document).ready(function() {
    $(window).scroll(function(){ 

        var scrollPos = $(window).scrollTop();
    
        if( ( scrollPos >100 )  ) {
            $('header').removeClass('py-3')
            $('header').css('background-color','rgba(255,255,255,.7)!important')
            $('header').css('backdrop-filter',' blur(20px)')    
        }       
        else{
            $('header').addClass('py-3')    
        }
        
    
    });
})