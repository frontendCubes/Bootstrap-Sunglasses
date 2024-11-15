$(document).ready(function () {
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();



    //COUNTER
    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            time: 2000
        });
    }



    //PRODUCT SLIDER
    if($('.product-slider').length > 0){
        $('.product-slider').owlCarousel({
            loop: true,
            dots:false,
            nav:true,
            navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items: 2,
                    margin:20
                },
                992:{
                    items: 3,
                    margin:20
                },
                1200:{
                    items:4,
                    margin:20
                }
            }
        });
    }

    
    //validate form



    if ($('.contact-form').length > 0) {
        $('.contact-form').validate({
            
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'The Name* field is required'
                },
                email: {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                message: {
                    required: 'The Message* field is required'
                }
            },

            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-element").find(".invalid-feedback"));
            }

        });
    }




});

