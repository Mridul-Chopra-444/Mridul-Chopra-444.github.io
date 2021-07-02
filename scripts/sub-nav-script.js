var items = ['education', 'work-experience', 'publications']



$('#education').click(function () {
    change_underline('education')
});

$('#work-experience').click(function () {
    change_underline('work-experience')
});

$('#publications').click(function () {
    change_underline('publications')
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