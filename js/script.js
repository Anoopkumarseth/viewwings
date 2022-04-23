$(".searchToggle").click(function () {
    $(".search-outer").toggleClass("active");
})
$(".search-form").click(function (e) {
    e.stopPropagation();
});
$(".togglePrimary").click(function () {
    $(this).toggleClass("active")
    $(".primaryMenu").toggleClass("active");
    $("body").toggleClass("open-menu");
});
$(".toggleTopbar").click(function () {
    $(".top-r-nav").toggleClass("active")
    $(this).toggleClass('dot-toggle');
    $(this).toggleClass('active');
});
$(".menu-item-has-children").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('open');
    $(this).siblings(".open").removeClass("open");
})
$(".accordion-header").click(function () {
    $(this).toggleClass("active").siblings(".accordion-content").find(".accordion-body").slideToggle(300).parents(".accordion-item").siblings(".accordion-item").find(".accordion-body").slideUp(300).parent(".accordion-content").siblings(".accordion-header").removeClass("active");
});

window.onload = function () {
    lax.init()
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })
}

if($('.gliderSlider').length){
    new Glider(document.querySelector('.gliderSlider'), {
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        dots: false,
        scrollLock: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    itemWidth: 'auto',
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    duration: 0.25
                }
            }
        ]
    });
    
    var glider = new Glider(document.querySelector('.gliderSlider'));
    function sliderAuto(slider, miliseconds) {
        const slidesCount = slider.track.childElementCount;
        let slideTimeout = null;
        let nextIndex = 1;
        function slide() {
            slideTimeout = setTimeout(
                function () {
                    if (nextIndex >= slidesCount) {
                        nextIndex = 0;
                    }
                    slider.scrollItem(nextIndex++);
                },
                miliseconds
            );
        }
        slider.ele.addEventListener('glider-animated', function () {
            window.clearInterval(slideTimeout);
            slide();
        });
        slide();
    }
    sliderAuto(glider, 2000)
}

function scrollSpy(){
    if($(".scrollspyItem").length){
        $('body').append('<ul class="scrollspy"></ul>')
        $(".scrollspyItem").each(function(index){
            $(this).addClass("spyItem" + index)
            $('.scrollspy').append(`<li class='spy-link${index}'><a href="#">${$(this).find('.card-title').text()}</a></li>`)
            var offset = $(this).offset().top - $('.main-nav').outerHeight() - 100;
            var parentOffset = $('.scrollspyItem').parents('.section').next('.section').offset().top - 160;
            $(window).scroll(function(){
                if($(window).scrollTop() > offset){
                    $('.spy-link'+ index).addClass("active").siblings().removeClass('active');
                } else{
                    $('.spy-link'+ index).removeClass('active');
                }
                if($(window).scrollTop() > parentOffset){
                    $('.scrollspy').addClass('not-active');
                } else {
                    $('.scrollspy').removeClass('not-active');
                }
            });
            $('.spy-link'+ index).click(function(e){
                e.preventDefault();
                $(this).addClass("active").siblings();
                $("html, body").animate({ scrollTop: offset + 100 }, 1000);
            })       
        })
    }
}
scrollSpy();
$(window).resize(function() {
    $('.scrollspy').remove();
    scrollSpy();
});

function modalHandler() {
    $(".button-modal").click(function () {
      var elementName = $(this).attr("id");
      $("body").append('<div class="modal-backdrop" style="display:none"></div>');
      $('.modal-backdrop').fadeIn(function(){
        $(".modal[rel='" + elementName + "']").addClass('modal-show');
      })
    })
    $(".modal-close, .modal").click(function () {
      $(".modal").removeClass('modal-show');
      $(".modal-backdrop").fadeOut(function(){
        $(".modal-backdrop").remove()
      })    
    });
    $('.modal-dialog').click(function(e){e.stopPropagation()})
  }
  modalHandler()
