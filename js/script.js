// create a square gird based on a given side length
function createGrid(sideLength) {
  var gridSize = (sideLength * sideLength);
  for (var i = 0; i < gridSize; i++) {
    var $newdiv = $('<div>', {"class": "unit", text: ""});
    $('.grid-container').append($newdiv);
  };
};

// add new function for creating an intial container. It is currently to difficult to change the res.
function containerSize(sideLength, squareSize) {
  return sideLength * squareSize;
};


// adds a js listener to each element with the class ".unit"
function paintable() {
  $('.unit').on('mouseover', function(){
  $(this).css('background-color', selectedColor);
  });
};

// change the background of the indicator element to match the currently selected color
function colorIndicator(selectedColor) {
  $(".current-swatch").removeClass("background-color").css("background-color", selectedColor)
};

// initialize the grid and default color when app is run
selectedColor = '#FF1B1B'
createGrid(16);
paintable()
colorIndicator(selectedColor)

// select a color from the palette
$('.colors').on('click', function() {
  selectedColor = $(this).data('color');
  colorIndicator(selectedColor)
});

// clear and update canvas size
$('#button').on('click', function(){
  var sideLength = prompt("A canvas is a square. What side length would you like?", 16);

  if (sideLength != null) {
    // removes the div elements in the grid container
    $('.grid-container').empty();
    // updates the width of the container to suit the newly specified sidelength
    $('.grid-container').css('width', (sideLength * 20));
    createGrid(sideLength);
    paintable()
  };
});