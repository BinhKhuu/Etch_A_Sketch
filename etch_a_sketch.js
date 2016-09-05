$(document).ready(function() {
  var row = 16;
  var col = 16;
  var width = 100/row;
  var height = 100/row;
  var ii = 1;
  var jj = 1;
  height = height + '%';
  width = width + '%';
  while(ii <= row) {
    while(jj <=col) {
      var id = 'r'+ii+'c'+jj;
      $('.grid').append('<div id='+id+'>'+id+'</div>');
      $('#'+id).css({'width':width,'height':height,'float':'left','border':'1px solid black'});
      console.log('jj is: '+jj);
      jj +=1;
    }
    console.log('ii is: '+ii);
    ii+=1;
    jj=1;
  }
});