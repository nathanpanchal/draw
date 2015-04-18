function createGrid(sideLength) {
  var gridSize = (sideLength * sideLength);
  for (var i = 0; i < gridSize; i++) {
    var $newdiv = $('<div>', {"class": "unit", text: ""});
    $('.container').append($newdiv);
  };
  $('.unit').hover(function(){
    $(this).addClass('hover');
  });
};

createGrid(16)

$('#button').click(function(){
  var sideLength = prompt("A canvas is a square. What side length would you like?", 16);

  if (sideLength != null) {
    $('.container').css('width', (sideLength * 20));
    $('.container').empty();
    createGrid(sideLength);
  };
});