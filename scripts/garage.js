console.log('testify');

$(document).ready(function() {
  console.log('jQ ready freddy');
  $('#parkCarButton').on('click', function() {
    console.log('parking a car');

    var newCar = {
      year: $('#year').val(),
      make: $('#make').val(),
      model: $('#model').val(),
      description: $('#description').val(),
      imageUrl: $('#imageUrl').val()
    };
    console.log(newCar);
  });
});
