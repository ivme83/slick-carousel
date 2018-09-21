const divTarget     = $(".team-info-target");

const defaultText   = "<div class='default-info'><h1>Default Page</h1><p>Team Members</p></div>";
const memInfo1      = "<div class='team-member-1--info'><h1>Team Member 1</h1><p>Description of Team Member</p></div>";
const memInfo2      = "<div class='team-member-2--info'><h1>Team Member 2</h1><p>Description of Team Member</p></div>";
const memInfo3      = "<div class='team-member-3--info'><h1>Team Member 3</h1><p>Description of Team Member</p></div>";
const memInfo4      = "<div class='team-member-4--info'><h1>Team Member 4</h1><p>Description of Team Member</p></div>";
const memInfo5      = "<div class='team-member-5--info'><h1>Team Member 5</h1><p>Description of Team Member</p></div>";

$(document).on('ready', function () {
    $('.slider').slick({
        variableWidth: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.left').click(function () {
        $('.slider').slick('slickPrev');
    });

    $('.right').click(function () {
        $('.slider').slick('slickNext');
    });

    $('.close').click(function () {
        divTarget.html('');
        divTarget.html(defaultText);
    });

    $('.team-member-1-img').click(function () {
        divTarget.html('');
        divTarget.html(memInfo1);
    });

    $('.team-member-2-img').click(function () {
        divTarget.html('');
        divTarget.html(memInfo2);
    });

    $('.team-member-3-img').click(function () {
        divTarget.html('');
        divTarget.replaceWith(memInfo3);
    });

    $('.team-member-4-img').click(function () {
        divTarget.html('');
        divTarget.replaceWith(memInfo4);
    });

    $('.team-member-5-img').click(function () {
        divTarget.html('');
        divTarget.replaceWith(memInfo5);
    });
});