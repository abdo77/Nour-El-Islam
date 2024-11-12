jQuery(document).ready(function(){
    new SimpleBar($('aside')[0]);
    new SimpleBar($('.notiMenu .card-body')[0]);


    $('.toggleNoti').click(function(e) {
        $('.notiMenu').toggleClass('show');
        $('.userMenu').removeClass('show');
        $('.language').removeClass('show');
        e.stopPropagation();
    })
    $('.toggleLang').click(function(e) {
        $('.language').toggleClass('show');
        $('.notiMenu').removeClass('show');
        $('.userMenu').removeClass('show');
        
        e.stopPropagation();
    })
    $('body').click(function() {
        $('.notiMenu').removeClass('show');
    })
    $('.notiMenu').click(function(e) {
        e.stopPropagation();
    })
    $('body').click(function() {
        $('.language').removeClass('show');
    })
    $('.language').click(function(e) {
        e.stopPropagation();
    })


    $('.toggleUser').click(function(e) {
        $('.userMenu').toggleClass('show');
        $('.notiMenu').removeClass('show');
        $('.language').removeClass('show');
        e.stopPropagation();
    })
    $('body').click(function() {
        $('.userMenu').removeClass('show');
    })
    $('.userMenu').click(function(e) {
        e.stopPropagation();
    })

    $('#nav-toggle').click(function(e) {
        $('aside').toggleClass('closed');
    })


    $('.language ul li a').click(function(){
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