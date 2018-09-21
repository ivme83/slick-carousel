// $(document).on('ready', function () {
//     $(".slider").slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
// });

$(document).on('ready', function () {
    $('.slider').slick({
        variableWidth: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    })

    $('.left').click(function () {
        $('.slider').slick('slickPrev');
    })

    $('.right').click(function () {
        $('.slider').slick('slickNext');
    })
});