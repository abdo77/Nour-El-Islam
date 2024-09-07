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

    $('body').on('click','.removeBtn',function(){
        $(this).closest('.singleItem').remove()
    })
    var counter=0 ;
    $('body').on('click',function(){
        counter = 0 
        $('.singleItem').each(function(){
            counter++;
        })
        if(counter==0){
            $('.noItems').removeClass('d-none')
        }
    })

    $('.singleItem').each(function(){
        counter++;
    })
    if(counter==0){
        $('.noItems').removeClass('d-none')
    }
    
    $('.imgContainer').css('height', $('.imgContainer').css('width'))
    $(window).resize(function () {
        $('.imgContainer').css('height', $('.imgContainer').css('width'))
    })   
})