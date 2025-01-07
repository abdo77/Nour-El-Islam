jQuery(document).ready(function() {
  
        
        
        $('.videoCover').click(function(){
            $(this).addClass('hide');
            $('#video').get(0).play()
        })
        $('#video').click(function(){
            $('#video').on('pause', function() {
                //Actions when video pause selected
                $('.videoCover').removeClass('hide');
              });
        })
})