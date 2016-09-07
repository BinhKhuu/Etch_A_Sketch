$(document).ready(function() {
  var mode = 'draw';
  var row = 16;
  var col = 16;
  var width = 100/row;
  var height = 100/row;
  var ii = 1;
  var jj = 1;
  height = height + '%';
  width = width + '%';
  var add_Squares = function () { 
    while(ii <= row) {
      while(jj <=col) {
        $('.grid').append('<div class="squares"></div>');   
        jj +=1;
      }
      ii+=1;
      jj=1;
    }
  }
  add_Squares();
  $('.squares').css({'width':width,'height':height,'border':'1px solid #DCDCDC'});
  
  //drawing
  $('.background').on('mouseover','.squares',function() {
    $(this).addClass('highlight');
  });
  
  var random_color;
  $('.background').on('mouseleave','.squares',function() {
    //trail functionality
    if(mode == 'trail'){
      $(this).fadeTo(300,0.5, function(){
        $(this).removeClass('highlight');
        $(this).fadeTo(1000,1);
      });
    }
    else if (mode =='draw') {
      $(this).removeClass('highlight');
      $(this).css({'background-color':'#f28bfc'});
    } 
    //mode = random
    else {
      //random color code from css-tricks/snippets/javascript/random-hex-color
      random_color = Math.floor(Math.random()*16777215).toString(16);
      random_color = '#'+random_color;
      $(this).removeClass('highlight');
      $(this).css({'background-color':random_color});      
    }
  });
  
  //event for button click
  var clicked_Button = function () {
    var new_grid = prompt("enter size of new grid (default 16): ","16");
    if ( ! isNaN(parseInt(new_grid,10)) ) {
      //remove grids contents
      $('.grid').empty(); 
      //width and heigh calculations
      row = new_grid;
      col = new_grid;
      width = 100/row;
      height = 100/col;
      width = width+'%';
      height = height+'%';
      ii = 1;
      jj = 1;
      add_Squares();
      //grid square css dimentions
      $('.squares').css({'width':width,'height':height,'border':'1px solid #DCDCDC'});
    }
    else {
      window.alert("please enter and integer preferably between 1 and 128");
    }
  }
  //event handlers for button click
  $('#draw').click(function(){
    mode = 'draw';
    clicked_Button();
  });  
  $('#trail').click(function(){
    mode = 'trail';
    clicked_Button();
  });
  //clearing
  $('#clear').click(function(){
    if (mode !== 'trail') {
      $('.squares').css({'background-color':'#CBD5D4'});
    }
  });
  $('#random').click(function(){
    mode = 'random';
    clicked_Button();
  });
  
});//end DOM

