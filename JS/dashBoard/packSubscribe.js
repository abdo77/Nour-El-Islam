jQuery(document).ready(function() {
    $('body').on('click','.daysContainer label', function(){
        $(this).closest('.daysContainer').find('label').removeClass('selected');
        
        $(this).addClass('selected');
        $(this).find('input:radio').prop("checked", true);
        $(this).closest('.daysContainer').find('.value').val($(this).find('input').val())
    })

    counter = 1
    $('.addDate').click(function(){
        $('.datesContainer').append(`
            <div class="col-lg-6 col-12 dates removable my-2">
                    <div class="card shadow rounded-20 border-0 overflow-hidden">
                        <div class="card-body">
                            <div class="daysContainer d-flex bg-light shadow aling-items-center rounded-pill mb-3 ">
                                <label class="text-dark inter fw-bold main-font2 d-flex align-items-center border-end justify-content-center p-2 " for="Sunday">Sun
                                    <input type="radio" name="days${counter}" class="d-none" value="Sunday" id="">
                                </label>
                                <label class="text-dark inter fw-bold main-font2 d-flex align-items-center border-end border-start justify-content-center p-2 " for="Monday">Mon
                                    <input type="radio" name="days${counter}" class="d-none" value="Monday" id="">
                                </label>
                                <label class="text-dark inter fw-bold main-font2 d-flex align-items-center border-end border-start justify-content-center p-2 " for="Tuesday">Tues
                                    <input type="radio" name="days${counter}" class="d-none" value="Tuesday" id="">
                                </label>
                                <label class="text-dark inter fw-bold main-font2 d-flex align-items-center border-end border-start justify-content-center p-2 " for="Wednesday">wed
                                    <input type="radio" name="days${counter}" class="d-none" value="wednesday" id="">
                                </label>
                                <label class="text-dark inter fw-bold main-font2 d-flex align-items-center border-end border-start justify-content-center p-2 " for="Thursday">Thurs
                                    <input type="radio" name="days${counter}" class="d-none" value="Thursday" id="">
                                </label>
                                <label class="text-dark inter fw-bold main-font2 d-flex align-items-center border-end border-start justify-content-center p-2 " for="Friday">Fri
                                    <input type="radio" name="days${counter}" class="d-none" value="Friday" id="">
                                </label>
                                <label class="text-dark inter fw-bold main-font2 d-flex align-items-center  border-start justify-content-center p-2 " for="Saturday">Sat
                                    <input type="radio" name="days${counter}" class="d-none" value="Saturday" id="">
                                </label>
                                <input type="text" class="value d-none days">
                            </div>
                            <input type="time" placeholder="" class="form-control mb-3 time" name="" id="">
                            <input type="number" name="" placeholder="Duration" id="" class="inter fw-bold form-control duration">
                        </div>
                    </div>
                </div>
        `)
    counter++ ;
    })
    $('.removeDate').click(function(){
        $('.removable:last-child').remove();
        counter-- ;
    })


    $('body').on('click','.daysContainer', function(){
        $(this).removeClass('border border-danger')
    })
    $('body').on('focus','.dates input', function(){
        $(this).removeClass('border border-danger')
    })


    var dates = [];
    valid = true ;
    $('.submit').click(function(){
        dates = [];
        $('.dates').each(function(){
            $(this).find('input:not([type=radio])').each(function(){
                if($(this).val() == 0 || $(this).val() == null){
                    valid = false ;
                    if($(this).hasClass('days')){
                        $(this).closest('.daysContainer').addClass('border-danger border')
                        
                    }
                    else if($(this).hasClass('duration')){
                    }
                    else if($(this).hasClass('time')){
                        
                    }
                    $(this).addClass('border-danger')
                   return false 
                } 
                else{
                    valid=true ;
                }
            })
            
        })
        if(valid){
            $('.dates').each(function(){
                dates.push({
                    date : $(this).find('.days').val() + ' ' + $(this).find('.time').val() ,
                    duration:$(this).find('.duration').val(),
                })
            })
            console.log(dates);
            
            $('.message').addClass('show')
            $('.message').text('Your now Subscribed in Package Name')
            setTimeout(() => {
                $('.message').removeClass('show')
            }, 2000);
        }
    })
})