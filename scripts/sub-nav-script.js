var items = ['education', 'work', 'publications']

$(document).ready(() => {
    $('.work').hide();
    $('.publications').hide();
})

$('#education').click(function () {
    change_underline('education')
    reveal('education');
});

$('#work').click(function () {
    change_underline('work')
    reveal('work');
});

$('#publications').click(function () {
    change_underline('publications')
    reveal('publications')
});

function change_underline(element) {
    let elements = [...items];
    elements.splice(elements.indexOf(element), 1)
    $('#' + element + ' .underline').css({
        'width': '100%',
        'background-color': 'tomato'
    });

    elements.forEach(ele => {
        $('#' + ele + ' .underline').css({
            'width': '55%',
            'background-color': 'gray'
        })
    });
}

function reveal(element) {
    let elements = [...items];
    elements.splice(elements.indexOf(element), 1);

    $('.' + element).show();

    elements.forEach((ele) => {
        $("." + ele).hide();
    });
}
