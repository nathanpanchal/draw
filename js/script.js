// create a square gird based on a given side length
function createGrid(sideLength) {
  var gridSize = (sideLength * sideLength);
  for (var i = 0; i < gridSize; i++) {
    var $newdiv = $('<div>', {"class": "unit", text: ""});
    $('.container').append($newdiv);
  };
};

// color the elements in the grid
function paint() {
  $('.unit').on('mouseover', function(){
  $(this).css('background-color', selectedColor);
  });
};

// initialize the grid and default color when app is run
selectedColor = '#FF1B1B'
createGrid(16);
paint()

// select a color from the palette
$('.colors').on('click', function() {
    selectedColor = $(this).data('color');
});

// clear and update canvas size
$('#button').on('click', function(){
  var sideLength = prompt("A canvas is a square. What side length would you like?", 16);

  if (sideLength != null) {
    $('.container').css('width', (sideLength * 20));
    $('.container').empty();
    createGrid(sideLength);
    paint()
  };
});