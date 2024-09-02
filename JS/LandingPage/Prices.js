jQuery(document).ready(function() {
    $('main .switch').click(function() {
        $(this).toggleClass('switched')
        $(this).toggleClass('justify-content-end')
        $('main nav .nav-link:not(.active)').click()
    })
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
})