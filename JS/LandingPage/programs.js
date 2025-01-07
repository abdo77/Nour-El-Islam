jQuery(document).ready(function() {
    
        
        
        $('.videoCover').click(function(){
            $(this).addClass('hide');
            $(this).closest('.lessonThumbnail').find('video').get(0).play()
        })
        $('video').click(function(){
            if(!$(this).closest('.container').find('div').hasClass('singleProgram')){
                $(this).get(0).pause()
            $(this).on('pause', function() {
                //Actions when video pause selected
                $(this).closest('.lessonThumbnail').find('.videoCover').removeClass('hide');
              });
              console.log('hi');
              
            }
            else{
                console.log('hello');
                
                $(this).on('pause', function() {
                    //Actions when video pause selected
                    $(this).closest('.lessonThumbnail').find('.videoCover').removeClass('hide');
                  });
            }
        })
        
})