$(document).ready(function() {
  $("form#button").submit(function(event) {

var movie = $("input#movie").val();
var food = $("input#food").val();
var animal = $("input#animal").val();
var sport = $("input#sport").val();
var beer = $("input#beer").val();

var array = [movie, food, animal, sport, beer];
//
// var second = array [1];
var array2 = array.splice(3, 2);
var array3 = array.splice(1, 1);
var array4 = array3.shift(food);

event.preventDefault();

});
});
