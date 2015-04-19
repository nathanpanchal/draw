function createGrid(sideLength) {
  var gridSize = (sideLength * sideLength);
  for (var i = 0; i < gridSize; i++) {
    var $newdiv = $('<div>', {"class": "unit", text: ""});
    $('.container').append($newdiv);
  };
};

function paint() {
  $('.unit').on('mouseover', function(){
  console.log("Nathan")
  $(this).css('background-color', selectedColor);
  });
};

createGrid(16);
paint()



$('.colors').on('click', function() {
    selectedColor = $(this).data('color');
    console.log(selectedColor)
});

$('#button').on('click', function(){
  var sideLength = prompt("A canvas is a square. What side length would you like?", 16);

  if (sideLength != null) {
    $('.container').css('width', (sideLength * 20));
    $('.container').empty();
    createGrid(sideLength);
    paint()
  };
});