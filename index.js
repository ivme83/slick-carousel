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
        arrows: false,
        variableWidth: true
    })

    $('.left').click(function () {
        $('.slider').slick('slickPrev');
    })

    $('.right').click(function () {
        $('.slider').slick('slickNext');
    })
});