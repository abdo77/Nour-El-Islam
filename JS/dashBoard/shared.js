jQuery(document).ready(function(){
    new SimpleBar($('aside')[0]);
    new SimpleBar($('.notiMenu .card-body')[0]);


    $('.toggleNoti').click(function(e) {
        $('.notiMenu').toggleClass('show');
        $('.userMenu').removeClass('show');

        e.stopPropagation();
    })
    $('body').click(function() {
        $('.notiMenu').removeClass('show');
    })
    $('.notiMenu').click(function(e) {
        e.stopPropagation();
    })


    $('.toggleUser').click(function(e) {
        $('.userMenu').toggleClass('show');
        $('.notiMenu').removeClass('show');
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
})