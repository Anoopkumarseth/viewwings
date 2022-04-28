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

if ($('.gliderSlider').length) {
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

function scrollSpy() {
    if ($(".scrollspyItem").length) {
        $('body').append('<ul class="scrollspy"></ul>')
        $(".scrollspyItem").each(function (index) {
            $(this).addClass("spyItem" + index)
            $('.scrollspy').append(`<li class='spy-link${index}'><a href="#">${$(this).find('.card-title').text()}</a></li>`)
            var offset = $(this).offset().top - $('.main-nav').outerHeight() - 100;
            var parentOffset = $('.scrollspyItem').parents('.section').next('.section').offset().top - 160;
            $(window).scroll(function () {
                if ($(window).scrollTop() > offset) {
                    $('.spy-link' + index).addClass("active").siblings().removeClass('active');
                } else {
                    $('.spy-link' + index).removeClass('active');
                }
                if ($(window).scrollTop() > parentOffset) {
                    $('.scrollspy').addClass('not-active');
                } else {
                    $('.scrollspy').removeClass('not-active');
                }
            });
            $('.spy-link' + index).click(function (e) {
                e.preventDefault();
                $(this).addClass("active").siblings();
                $("html, body").animate({ scrollTop: offset + 100 }, 1000);
            })
        })
    }
}
scrollSpy();
$(window).resize(function () {
    $('.scrollspy').remove();
    scrollSpy();
});

function modalMaker() {
    modalLength = $('.makeModal').length;
    if (modalLength) {
        $(".makeModal").each(function (index) {
            title = $(this).find('.card-title').text();
            $(this).find('a').addClass('button-modal link-stretch').attr('id', 'makeModal' + index);
            image = ($(this).find('.card-img-big').attr('src')) ? $(this).find('.card-img-big').attr('src') : $(this).find('img').attr('src');
            $('body').append(`      
                <div class="modal modalMaded" rel="makeModal${index}">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${title}</h5>
                                <a href='#' class='modal-expand modalExpand'><span class='screen-reader-text'>Modal Expand</span></a>
                                <button class="btn-icon modal-close" type="button">close</button>
                            </div>
                            <div class="modal-body">
                                <img class='w-100 radius mb-2 modalExpand zoom-cursor' src='${image}' alt='Modal Image'>
                            </div>
                        </div>
                    </div>
                </div>
                `)
        })
    }
    if (modalLength > 1) {
        $(".modalMaded").append('<ul class="modal-navigator"><li class="prev">prev</li><li class="next">next</li></ul>');
        $(".modal-navigator .next").click(function () {
            $(".modal-navigator li").removeClass('disabled');
            $(this).parents(".modalMaded").removeClass('modal-show').next().addClass('modal-show');
            navitems = $(this).parents(".modalMaded").next('.modalMaded').next(".modalMaded")
            if (!navitems.length) {
                $(".modal-navigator .next").addClass('disabled')
            } else {
                $(".modal-navigator .next").removeClass('disabled')

            }
        });
        $(".modal-navigator .prev").click(function () {
            $(".modal-navigator li").removeClass('disabled');
            $(this).parents(".modalMaded").removeClass('modal-show').prev().addClass('modal-show');
            navitems2 = $(this).parents(".modalMaded").prev('.modalMaded').prev(".modalMaded")
            if (!navitems2.length) {
                $(".modal-navigator .prev").addClass('disabled')
            } else {
                $(".modal-navigator .prev").removeClass('disabled')

            }
        });
    }
}
modalMaker();

function modalHandler() {
    $(".button-modal").click(function (e) {
        e.preventDefault();
        var elementName = $(this).attr("id");
        var elementModal = $(".modal[rel='" + elementName + "']");
        $("body").append('<div class="modal-backdrop" style="display:none"></div>').addClass('overflow-hidden');
        $('.modal-backdrop').fadeIn(function () {
            elementModal.addClass('modal-show');
        })

        // modal navigator 
        var ModalMaded = $(".modalMaded[rel='" + elementName + "']");
        ModalMadedPrev = ModalMaded.prev('.modalMaded');
        ModalMadedNext = ModalMaded.next('.modalMaded');
        if (!ModalMadedPrev.length) {
            $(".modal-navigator .prev").addClass('disabled');
        } else {
            $(".modal-navigator .prev").removeClass('disabled');

        }
        if (!ModalMadedNext.length) {
            $(".modal-navigator .next").addClass('disabled');
        } else {
            $(".modal-navigator .next").removeClass('disabled');
        }
    })
    $(".modal-close, .modal").click(function () {
        modalClose();
    });

    $('.modal-dialog, .modal-navigator li').click(function (e) { e.stopPropagation() })
    $(".modalExpand").click(function () {
        $('.modalMaded').find('.modal-dialog').toggleClass("modal-xl").find('.modalExpand').toggleClass('expanded');

    })
}
modalHandler()

function modalClose() {
    $(".modal").removeClass('modal-show');
    $('body').removeClass('overflow-hidden')
    $(".modal-backdrop").fadeOut(function () {
        $(".modal-backdrop").remove()
    })
}


$(document).on('keydown', function (event) {
    if (event.key == "Escape") {
        modalClose();
    }
    if (event.key == "ArrowRight") {
        $(".modal-show .modal-navigator .next:not(.disabled)").trigger('click')
    }
    if (event.key == "ArrowLeft") {
        $(".modal-show .modal-navigator .prev:not(.disabled)").trigger('click')
    }
});