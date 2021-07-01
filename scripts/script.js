$(document).ready(() => {
    $('.technical-skills').hide();
})


$(".menu-icon").click(function () {

    let opacity = $(".nav-items-container").css('opacity');

    if (opacity > 0)
        $(".nav-items-container").animate({ opacity: 0 }, 800);
    else
        $(".nav-items-container").animate({ opacity: 10 }, 2000);
});


$('#about-me').click(function () {
    change_colour('#about-me');
    $('.about-me').show();
    $('.technical-skills').hide();
})

$('#technical-skills').click(function () {
    change_colour('#technical-skills');
    $('.technical-skills').show();
    $('.about-me').hide();
})

function change_colour(element) {
    var list = ['#about-me', '#technical-skills'];
    $(element).css('color', '#3EA6C1');
    list.splice(list.indexOf(element), 1);
    list.forEach(ele => {
        $(ele).css('color', '#ffffff')
    });
}