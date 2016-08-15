$(document).ready(function() {

  $("form#button").submit(function(event) {

    var movie = $("input#movie").val();
    var food = $("input#food").val();
    var animal = $("input#animal").val();
    var sport = $("input#sport").val();
    var beer = $("input#beer").val();

    var array = [movie, food, animal, sport, beer];
    //
    var second = array[1];
    var first = array[0];
    var third = array[2];

    var array213 = [second, first, third];

    array213.push(sport, beer);

    // var array2 = array.splice(3, 2);
    // var array3 = array.splice(1, 1);
    // var array4 = array3.shift(food);

    // alert(array213);

    $("ul#final").append("<li>" + array213[0] + "</li>");
    $("ul#final").append("<li>" + array213[1] + "</li>");
    $("ul#final").append("<li>" + array213[2] + "</li>");
    $("ul#final").append("<li>" + array213[3] + "</li>");
    $("ul#final").append("<li>" + array213[4] + "</li>");


    event.preventDefault();

  });
});
