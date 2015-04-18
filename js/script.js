function createGrid(gridSize) {
  for (var i = 0; i < gridSize; i++) {
      var $newdiv = $('<div>', {"class": "unit", text: ""});
      $('.container').append($newdiv);
  };
  
  $('.unit').hover(function(){
      $(this).addClass('hover');
  });
};

createGrid(256)

$('#button').click(function(){
  $('.unit').removeClass('hover');
  
  var gridSize = prompt("What size grid would you like?");
});