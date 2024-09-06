jQuery(document).ready(function(){
    $('.imgPreviewContainer').css('height', $('.imgPreviewContainer').css('width'))
    $('.imgPreviewContainerSmall').css('height', $('.imgPreviewContainerSmall').css('width'))
    $(window).resize(function(){
        $('.imgPreviewContainer').css('height', $('.imgPreviewContainer').css('width'))
        $('.imgPreviewContainerSmall').css('height', $('.imgPreviewContainerSmall').css('width'))
    })

    $('body').on('click','.allColorsImages button',function() {
        $('.pickColor').removeClass('picked')
        $('.allColorsImages button').removeClass('picked')
        $(this).addClass('picked')
        $(`.pickColor[data-val="${$(this).attr('data-val')}"]`).addClass('picked')
        $('.imgPreviewContainer img').attr('src',$(`.allColorsImages button[data-val="${$(this).attr('data-val')}"] img`).attr('src'))
    })
    $('body').on('click','.pickColor',function() {
        $('.pickColor').removeClass('picked')
        $('.allColorsImages button').removeClass('picked')
        $(this).addClass('picked')
        $(`.allColorsImages button[data-val="${$(this).attr('data-val')}"]`).addClass('picked')
        $('.imgPreviewContainer img').attr('src',$(`.allColorsImages button[data-val="${$(this).attr('data-val')}"] img`).attr('src'))
    })

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
})