console.log('testify');

var garageArray = [];

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
    garageArray.push(newCar);
    console.log("The garage: ", garageArray);
    displayGarage();
  });
});

function displayGarage() {
  console.log("displaying the garage: ", garageArray);
  $('#garageDisplay').html('');
  garageArray.forEach(function(car) {
    console.log("Displaying car: ", car);
    $('#garageDisplay').append(
      '<div class="carDisplay"><img src="' + car.imageUrl + '"><p>Year: ' + car.year + '</p><p>Make: '
      + car.make + '</p><p>Model: ' + car.model + '</p><p>Description: ' + car.description + '</p></div>'
    );
  });
}
