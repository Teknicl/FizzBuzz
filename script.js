var x = 3;
var y = 5;

for(var i = 1; i<100; i++) {
    if(i % x == 0 && i % y == 0) {
        console.log("FizzBuzz");
    } else if(i % x == 0) {
        console.log("Fizz");
    } else if(i % y == 0) {
        console.log("Buzz");
    } else {
    console.log(i);
    }
}