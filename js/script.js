function createGrid(sideLength) {
  var gridSize = (sideLength * sideLength);
  for (var i = 0; i < gridSize; i++) {
    var $newdiv = $('<div>', {"class": "unit", text: ""});
    $('.container').append($newdiv);
  };
};

function changeColor() {
  $('.unit').on('mouseover', function(){
    $(this).addClass('hover');
  });
};

function selectColor() {
  colorSelected = red
};

createGrid(16);
changeColor();

$('#button').on('click', function(){
  var sideLength = prompt("A canvas is a square. What side length would you like?", 16);

  if (sideLength != null) {
    $('.container').css('width', (sideLength * 20));
    $('.container').empty();
    createGrid(sideLength);
    changeColor();
  };
});