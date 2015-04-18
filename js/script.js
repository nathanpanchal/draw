for (var i = 0; i < 256; i++) {
    var $newdiv = $('<div>', {"class": "unit", text: ""});
    $('.container').append($newdiv);
}

$('.unit').hover(function(){
    $(this).addClass('hover');
});

$('#button').click(function(){
    $('.unit').removeClass('hover');
});