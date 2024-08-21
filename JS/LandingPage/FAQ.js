jQuery(document).ready(function() {
    $(this).find('.animationDiv').removeClass('start-50')
        $(' .animationDiv').removeClass('end-50')
        $('.animationDiv').removeClass('opacity-0')
        
        $(' .animationDiv').removeClass('start-50')
        $(' .animationDiv').removeClass('end-50')
        $(' .animationDiv').removeClass('opacity-0')
        $(' .animationDiv').removeClass('top-60')

        $('main input').on('keyup', function() {
            var txt = $(this).val();
        $('.FAQS .col-12:not(.noResults)').each(function(){
           console.log($(this).text().toUpperCase().indexOf(txt.toUpperCase()));
           
            if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
               $(this).addClass('d-flex')
               $('.noResults').addClass('d-none')
            }
           else{
            $(this).removeClass('d-flex')
            $(this).hide();
            $('.noResults').removeClass('d-none')
           }
        });
        })

    })