jQuery(document).ready(function() {

    var options = {
        series: [44, 55, 67, ],
        colors:['#198754','#dc3545' ,'#f59e0b'],
        chart: {
        width:'100%',
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '0px',
            },
            value: {
              fontSize: '0px',
            },
            total: {
              show: false,
              label: 'Total',
              
            }
          }
        },
        
        
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Apples', 'Oranges', 'Bananas',],
      };

      var chart = new ApexCharts(document.querySelector("#tasksChart"), options);
      chart.render();


      $('.like-btn').click(function(){
        if(!$(this).hasClass('liked')){
            $(this).closest('.card').find('.reacts-num').text((Number($(this).closest('.card').find('.reacts-num').text())+1))
        }
        else{
            $(this).closest('.card').find('.reacts-num').text((Number($(this).closest('.card').find('.reacts-num').text())-1))
        }

        $(this).toggleClass('liked')
      
        
    })
    $('body').on('click','.like-reply-btn',function(){
        if(!$(this).hasClass('liked')){
            $(this).closest('.comment-option').find('.reacts-reply-num').text((Number($(this).closest('.comment-option').find('.reacts-reply-num').text())+1))
        }
        else{
            $(this).closest('.comment-option').find('.reacts-reply-num').text((Number($(this).closest('.comment-option').find('.reacts-reply-num').text())-1))
        }

        $(this).toggleClass('liked')
      
        
    })
    $('body').on('click','.comment-btn',function(){
        $(this).closest('.card').find('.comments-container').toggle()
    })

    $('body').on('click','.reply-btn',function(){
        $(this).closest('li').find('.reply-container').toggle()
    })
    $('.comments-num').click(function(){
        $(this).closest('.card').find('.comment-btn').click()
    })

    $("[contenteditable]").focusout(function(){
        var element = $(this);        
        if (!element.text().trim().length) {
            element.empty();
        }
    });


    userName = 'Ahmed'
    $('.send-comment').click(function(){
        if($(this).closest('.input-group').find('.form-control').text().trim().length){
            $(this).closest('.card-footer').find('.comments').append(`
            <li class="border-bottom py-2">
                                    <div class="d-flex align-items-start my-2">
                                        <div class="avtr-xs rounded-circle overflow-hidden me-2 flex-shrink-0">
                                            <img src="../../Assests/149071.png" class="w-100 h-100" alt="">
                                        </div>
                                        <div class="main-font flex-grow-1">
                                            <p class="my-0 px-2">
                                                <span class="commenterName fw-bold">`+userName+`</span> `+$(this).closest('.input-group').find('.form-control').html()+`
                                            </p>
                                            <div class="comment-option d-flex align-items-center my-2">
                                                <div
                                                    class="react-reply rounded-circle border border-2 border-white me-1">
                                                    <div
                                                        class="bg-primary w-100 h-100 d-flex justify-content-center align-items-center">
                                                        <i class="fa fa-thumbs-up"></i>
                                                    </div>
                                                </div>
                                                <div class="reacts-reply-num main-font fw-bold">
                                                    0
                                                </div>
                                                <button
                                                    class="btn shadow-none like-reply-btn p-0 main-font ms-3 fw-bold">
                                                    <i class="fa-regular fa-thumbs-up"></i>
                                                    Like
                                                </button>
                                                <button class="btn shadow-none reply-btn p-0 main-font ms-3 fw-bold">
                                                    <i class="fa-regular fa-comment"></i>
                                                    Reply
                                                </button>
                                            </div>
                                            <div class="reply-container">
                                                <div class="input-group d-flex align-items-center border border-2">
                                                    <p placeholder="Write your reply ...." contenteditable="true"
                                                        class="form-control shadow-none main-font border-0 m-0 px-2"></p>
                                                    <button class="btn text-white shadow-none send-reply">
                                                        <i class="fa fa-paper-plane"
                                                            style="color: #0d6efd!important;"></i>
                                                    </button>
                                                </div>

                                                <ul class="replies list-unstyled">
                                                   
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            `)
        }
    })
    $('body').on('click','.send-reply',function(){
        if($(this).closest('.input-group').find('.form-control').text().trim().length){
            $(this).closest('.reply-container').find('.replies').append(`
            <li class="py-2">
                                                    <div class="d-flex align-items-start my-2">
                                                        <div
                                                            class="avtr-xs rounded-circle overflow-hidden me-2 flex-shrink-0">
                                                            <img src="../../Assests/149071.png" class="w-100 h-100"
                                                                alt="">
                                                        </div>
                                                        <div class="main-font flex-grow-1 px-2">
                                                            <p class="my-0">
                                                                <span class="commenterName fw-bold">`+userName+`</span> `+$(this).closest('.input-group').find('.form-control').html()+`
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
            `)
        }
    })
});