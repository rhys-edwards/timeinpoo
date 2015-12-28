$(document).ready(function(){
    $("#hide").click(function(){
        $("#front").hide();
        $("#about").show();
    });
    $("#show").click(function(){
        $("#front").show();
        $("#about").hide();
    });
});


$(document).ready(function () {

  // FLIP IT

  // PROGRESS BAR

  $('#calculator input').keyup(function() {

  var numValid = 0;
  $('#calculator input[required]').each(function() {
      if (this.validity.valid) {
          numValid++;
      }
  });

  var progress = $('#progress');

  if (numValid == 0) {
      progress.attr('value', '0');
  }
  if (numValid == 1) {
      progress.attr('value', '0');
  }
  if (numValid == 2) {
      progress.attr('value', '33');
  }
  if (numValid == 3) {
      progress.attr('value', '66');
  }
  if (numValid == 4) {
      progress.attr('value', '99');
  }

  });

});
