$(document).ready(function() {
    var number = prompt("Yo! Enter your number to initiate FizzBuzz, homie!")

    function fizzbuzz(number) {
        var number1 = parseInt(number);
        for (var i = 1; i < number1 + 1; i += 1) {
            if ((i % 3 == 0) && (i % 5 == 0)) {
                $('body').append('<p>FizzBuzz</p>');
            } else if (i % 3 == 0) {
                $('body').append('<p>Fizz</p>');
            } else if (i % 5 == 0) {
                $('body').append('<p>Buzz</p>');
            } else {
                $('body').append('<p>' + i + '</p>');
            }
        };
    };

    fizzbuzz(number);

});