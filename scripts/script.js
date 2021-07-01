
$(".menu-icon").click(function () {

    let opacity = $(".nav-items-container").css('opacity');

    if (opacity > 0)
        $(".nav-items-container").animate({ opacity: 0 }, 800);
    else
        $(".nav-items-container").animate({ opacity: 10 }, 2000);
});