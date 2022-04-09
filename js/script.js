$(".searchToggle").click(function () {
    $(".search-outer").toggleClass("active");
})
$(".search-form").click(function (e) {
    e.stopPropagation();
});
$(".togglePrimary").click(function () {
    $(".primaryMenu").toggleClass("active");
});
$(".toggleTopbar").click(function () {
    $(".top-r-nav").toggleClass("active")
    $(this).toggleClass('dot-toggle');
    $(this).toggleClass('active');
});
$(".accordion-header").click(function () {
    $(this).toggleClass("active").siblings(".accordion-content").find(".accordion-body").slideToggle(300).parents(".accordion-item").siblings(".accordion-item").find(".accordion-body").slideUp(300).parent(".accordion-content").siblings(".accordion-header").removeClass("active");          
});