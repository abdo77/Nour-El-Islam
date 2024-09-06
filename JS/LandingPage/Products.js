jQuery(document).ready(function(){
    $("#productsSliders").owlCarousel({
        items:1 ,
        loop:true,
        autoplay:true,
        stagePadding:-20,
        autoplayHoverPause:true,
        responsiveClass:true,
        dots:false,
        
    });
    $('.productsPreviewContainer:first-child').addClass('ps-lg-0');

    $('.productsPreview').css('height', $('.productsPreview').css('width'))
    $(window).resize(function() {
        $('.productsPreview').css('height', $('.productsPreview').css('width'))
        console.log($('.productsPreview').css('width'));
        
    })

    $('body').on('click','.addWishList',function(e) {
      $(this).toggleClass('active');  
      e.stopPropagation();
      e.preventDefault();
    })
    $('body').on('click','.categoriesContainer button',function() {
        $('.categoriesContainer button').removeClass('selected');
        $(this).addClass('selected'); 
    })


    $('.productSearch').on('keyup', function() {
        var txt = $(this).val();
    $('.allProductsContainerDiv  .productsPreviewContainer:not(.noResults)').each(function(){
       console.log($(this).text().toUpperCase().indexOf(txt.toUpperCase()));
       
        if($(this).find('.productDetails').text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
           $('.noResults').addClass('d-none')
        }
       else{
        $(this).hide();
        $('.noResults').removeClass('d-none')
       }
    });
    })


    var products = [
        {
            category:'Perfumes',
            name:'Perfume Name',
            Price : 
            350, 
            details : 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
            rate :2.5,
            img:'../../CSS/Assests/pngtree-blue-perfume-bottle-transparent-background-png-image_12272680.png'
        },
        {
            category:'Tshirts',
            name:'Tshirt Name',
            Price : 49.99, 
            details : 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
            rate :3.5,
            img:'../../CSS/Assests/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839zoswy.png'
        },
        {
            category:'Perfumes',
            name:'Perfume Name',
            Price : 50, 
            details : 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
            rate :2.5,
            img:'../../CSS/Assests/pngtree-blue-perfume-bottle-transparent-background-png-image_12272680.png'
        },
    ]


    $('body').on('click', '.categoriesContainer button', function(){
        console.log($(this).find('span').text());
        $('.productsPreviewContainer').remove()
        if($(this).find('span').text()=='All'){
            
            addProduct()
        }
        else{
            
            for (let i = 0; i < products.length; i++) {
                if($(this).find('span').text()==products[i].category){
                    $('.allProductsContainerDiv').append(`
                        <div class="col-lg-3 col-6 productsPreviewContainer my-2">
                            <a href="" class="productsPreview d-block shadow p-3 rounded-2 bg-light shadow position-relative text-center">
                                <button class="rounded-circle addWishList position-absolute btn shadow p-0 d-flex align-items-center justify-content-center" style="top:10px ;right: 10px;width: 30px;height: 30px;">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                                <img src="${products[i].img}" alt="" class="img-fluid w-auto h-100">
                            </a>
                            <div class="productDetails mt-4 mb-2 main-font" style="font-family: 'bold Inter';">
                                <div class="d-flex fw-bold align-items-center">
                                    <span>${products[i].name}</span>
                                    <span class="ms-auto"><sup>$</sup>${products[i].Price}</span>
                                </div>
                                <p class="text-muted main-font1 my-2 mb-1 overflow-hidden" style="font-family: 'Inter';height: 40px;">${products[i].details}</p>
                                <div class="productRate" style="color: goldenrod;">
                                    
                                </div>
                            </div>
                            <button class="btn rounded-pill addCartBtn px-3 py-1 border main-font border-1 shadow" style="font-family: 'Inter light bold';">
                                Add To Cart
                            </button>
                        </div>    
                    `)
                    var decimal =  products[i].rate - Math.floor(products[i].rate) 
                    console.log(decimal);
                    
                    for (let j = 0; j < Math.ceil(products[i].rate); j++) {
                        if(j == Math.ceil(products[i].rate)-1 ){
                            if(decimal <=0.5 && decimal != 0){
                                $('.productsPreviewContainer:last-child .productRate').append(`
                                        <i class="fa fa-star-half"></i>
                                `)
                            }
                            else{
                                $('.productsPreviewContainer:last-child .productRate').append(`
                                    <i class="fa fa-star"></i>
                                `)
                            }
                        }
                        else{
                            $('.productsPreviewContainer:last-child .productRate').append(`
                                <i class="fa fa-star"></i>
                            `)
                        }
                        
                    }
                }
            }
        }
    })

    function addProduct(){
        for (let i = 0; i < products.length; i++) {
            $('.allProductsContainerDiv').append(`
                <div class="col-lg-3 col-6 productsPreviewContainer my-2">
                    <a href="" class="productsPreview d-block shadow p-3 rounded-2 bg-light shadow position-relative text-center">
                                <button class="rounded-circle addWishList position-absolute btn shadow p-0 d-flex align-items-center justify-content-center" style="top:10px ;right: 10px;width: 30px;height: 30px;">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                                <img src="${products[i].img}" alt="" class="img-fluid w-auto h-100">
                            </a>
                    <div class="productDetails mt-4 mb-2 main-font" style="font-family: 'bold Inter';">
                        <div class="d-flex fw-bold align-items-center">
                            <span>${products[i].name}</span>
                            <span class="ms-auto"><sup>$</sup>${products[i].Price}</span>
                        </div>
                        <p class="text-muted main-font1 my-2 mb-1 overflow-hidden" style="font-family: 'Inter';height: 40px;">${products[i].details}</p>
                        <div class="productRate" style="color: goldenrod;">
                            
                        </div>
                    </div>
                    <button class="btn rounded-pill addCartBtn px-3 py-1 border main-font border-1 shadow" style="font-family: 'Inter light bold';">
                        Add To Cart
                    </button>
                </div>    
            `)
            var decimal =  products[i].rate - Math.floor(products[i].rate) 
            console.log(decimal);
            
            for (let j = 0; j < Math.ceil(products[i].rate); j++) {
                if(j == Math.ceil(products[i].rate)-1 ){
                    if(decimal <=0.5 && decimal != 0){
                        $('.productsPreviewContainer:last-child .productRate').append(`
                                <i class="fa fa-star-half"></i>
                        `)
                    }
                    else{
                        $('.productsPreviewContainer:last-child .productRate').append(`
                            <i class="fa fa-star"></i>
                        `)
                    }
                }
                else{
                    $('.productsPreviewContainer:last-child .productRate').append(`
                        <i class="fa fa-star"></i>
                    `)
                }
                
            }
        }
    }
    addProduct()
})