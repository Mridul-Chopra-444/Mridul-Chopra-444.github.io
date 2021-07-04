$(document).ready(() => {
    $('.technical-skills').hide();
    $('.education-and-work').hide();
    $('.contact-me').hide();

    if ($('.menu-icon').is(":visible")) {
        $('.nav-items-container').css('display', 'none');
    }
})

$(".menu-icon").click(function () {
    hide_menu_dropdown();
});


$('#about-me').click(function () {
    change_colour('#about-me');
    show('.about-me');
    hide_menu_dropdown();
})

$('#technical-skills').click(function () {
    change_colour('#technical-skills');
    show('.technical-skills')
    hide_menu_dropdown();
})

$('#education-and-work').click(function () {
    change_colour('#education-and-work');
    show('.education-and-work')
    hide_menu_dropdown();
})

$('#contact-me').click(function () {
    change_colour('#contact-me');
    show('.contact-me')
    hide_menu_dropdown();
})

function change_colour(element) {
    var list = ['#about-me', '#technical-skills', '#education-and-work', "#contact-me"];
    $(element).css('color', '#3EA6C1');
    list.splice(list.indexOf(element), 1);
    list.forEach(ele => {
        $(ele).css('color', '#ffffff');
    });
}

function hide_menu_dropdown() {

    if ($('.menu-icon').is(":hidden")) {
        return
    }

    let opacity = $(".nav-items-container").css('opacity');

    if (opacity > 0) {
        $(".nav-items-container").animate({ opacity: 0 }, 800, function () { $(".nav-items-container").css('display', 'none'); });
    }
    else {
        $(".nav-items-container").css('display', 'block');
        $(".nav-items-container").animate({ opacity: 10 }, 1500);
    }
}

function show(item) {
    let items = ['.about-me', '.technical-skills', '.education-and-work', '.contact-me']
    items.splice(items.indexOf(item), 1)

    $(item).show();

    items.forEach(ele => {
        $(ele).hide();
    })
}