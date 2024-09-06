jQuery(document).ready(function () {
    


    itemCounter = 1 ;
    $('body').on('click','.itemCounter .increase',function() {
        itemCounter++ ;
        $('.itemCounter span').text(itemCounter)
    })
    $('body').on('click','.itemCounter .decrease',function() {
        if(itemCounter >1){
            itemCounter-- ;
        $('.itemCounter span').text(itemCounter)
        }
    })

    $('.imgContainer').css('height', $('.imgContainer').css('width'))
    $(window).resize(function () {
        $('.imgContainer').css('height', $('.imgContainer').css('width'))
    })   
})