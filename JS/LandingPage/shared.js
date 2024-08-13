jQuery(document).ready(function() {
    $(window).scroll(function(){ 

        var scrollPos = $(window).scrollTop();
    
        if( ( scrollPos >100 )  ) {
            $('header').removeClass('py-3')
            $('header').addClass('scrolling')    
            
        }       
        else{
            $('header').addClass('py-3')
            $('header').removeClass('scrolling')    
        }
        
        
    
    });
})