jQuery(document).ready(function() {
    

    $('.menuBtn').click(function() {
        $('header').toggleClass('collapsed')
    })
    if($('body').attr('dir')=='rtl'){
        $('link[href="../../CSS/shared/bootstrap.min.css"]').attr('href','../../CSS/shared/bootstrapArabic.min.css');   
    }
    var scrollPos = $(window).scrollTop();

    if( ( scrollPos >100 )  ) {
        $('header').removeClass('py-3')
        $('header').addClass('scrolling')    
        
    }       
    else{
        $('header').addClass('py-3')
        $('header').removeClass('scrolling')    
    }
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


    $('.language a').click(function(){
        if($(this).prop('id')=='Arabic'){
            $('link[href="../../CSS/shared/bootstrap.min.css"]').attr('href','../../CSS/shared/bootstrapArabic.min.css')
            $('body').attr('dir','rtl')
            localStorage.setItem('language',$(this).prop('id'))
        }
        else{
            $('link[href="../../CSS/shared/bootstrapArabic.min.css"]').attr('href','../../CSS/shared/bootstrap.min.css')
            $('body').attr('dir','ltr')
            localStorage.setItem('language',$(this).prop('id'))
        }
    })

    language = localStorage.getItem('language')

    console.log(language);
    
    if(language=='Arabic'){
        $('link[href="../../CSS/shared/bootstrap.min.css"]').attr('href','../../CSS/shared/bootstrapArabic.min.css')
        $('body').attr('dir','rtl')
    }
    else{
        $('link[href="../../CSS/shared/bootstrapArabic.min.css"]').attr('href','../../CSS/shared/bootstrap.min.css')
        $('body').attr('dir','ltr')
    }
})