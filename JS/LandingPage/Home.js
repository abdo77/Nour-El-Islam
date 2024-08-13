jQuery(document).ready(function() {
    $('.menuBtn').click(function() {
        $('header').toggleClass('collapsed')
    })
    
    

    

    $(".ourFeatures").owlCarousel({
        items:1 ,
        loop:true,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            950 :{
                items:3,
            }
        }
    });
    $(".payment-method-slider").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            950 :{
                items:3,
            }
        }
    });
    $("#productsSliders").owlCarousel({
        items:1 ,
        loop:true,
        autoplay:true,
        responsiveClass:true,
        
    });

    


    var bottom  = Math.floor($('.visitors-section').offset().top) + Math.floor($('.visitors-section').outerHeight(true))
    var flag = true
    $('section').each(function () {
        if (Math.floor($(window).scrollTop()) >= Math.floor($(this).offset().top - 500) && Math.floor($(window).scrollTop()) <= ($(this).offset().top) + Math.floor($(this).outerHeight(true) )) {
            $(this).find('.animationDiv').removeClass('start-50')
    $(this).find(' .animationDiv').removeClass('end-50')
    $(this).find('.animationDiv').removeClass('opacity-0')
    
    $(this).find(' .animationDiv').removeClass('start-50')
    $(this).find(' .animationDiv').removeClass('end-50')
    $(this).find(' .animationDiv').removeClass('opacity-0')
    $(this).find(' .animationDiv').removeClass('top-60')
        }     
       })
    if ( Math.floor($(window).scrollTop()) >= Math.floor($('.visitors-section').offset().top - 1000) && Math.floor($(window).scrollTop()) <=bottom ) {
           
       if(flag){
           $('.counter-value').each(function () {
               console.log($(this).prop('Counter',0));
               $(this).prop('Counter',0).animate({
                   Counter: $(this).text()
               }, {
                   duration: 4000,
                   easing: 'swing',
                   step: function (now) {
                       $(this).text(Math.ceil(now));
                   }
               });
           });
       }
       flag = false 
   }
     var $w = $(window).scroll(function () {
       console.log(Math.floor($w.scrollTop()));
       $('section').each(function () {
        if (Math.floor($w.scrollTop()) >= Math.floor($(this).offset().top - 400) && Math.floor($(window).scrollTop()) <= ($(this).offset().top) + Math.floor($(this).outerHeight(true) )) {
            $(this).find('.animationDiv').removeClass('start-50')
    $(this).find(' .animationDiv').removeClass('end-50')
    $(this).find('.animationDiv').removeClass('opacity-0')
    
    $(this).find(' .animationDiv').removeClass('start-50')
    $(this).find(' .animationDiv').removeClass('end-50')
    $(this).find(' .animationDiv').removeClass('opacity-0')
    $(this).find(' .animationDiv').removeClass('top-60')

        }     
       })
       
       if (Math.floor($w.scrollTop()) >= Math.floor($('.visitors-section').offset().top - 300) && Math.floor($(window).scrollTop()) <=bottom ) {
           
           if(flag){
               $('.counter-value').each(function () {
                   console.log($(this).prop('Counter',0));
                   $(this).prop('Counter',0).animate({
                       Counter: $(this).text()
                   }, {
                       duration: 4000,
                       easing: 'swing',
                       step: function (now) {
                           $(this).text(Math.ceil(now));
                       }
                   });
               });
           }
           flag = false 
       }
   });

})