console.log("=======Assignment No-2==========");
console.log("**************Q-1***************");
var greatest_number = function (num1, num2) {
    var result = num1 > num2 ? num1 : num2;
    console.log("Greatest Number is:", result);
}
greatest_number(10, -10);
greatest_number(800, 899);

console.log("**************Q-2***************");

var isEvenOrOdd = function (num1) {
    var result = (num1 % 2 == 0) ? true : false;
    return result;
}
console.log("Result of 29:", isEvenOrOdd(29));
console.log("Result of 44:", isEvenOrOdd(44));
console.log("Result of 0:", isEvenOrOdd(0));
console.log("Result of 101:", isEvenOrOdd(101));

console.log("**************Q-2***************");
var EvenOrOdd = function (word) {
    var fullLength = word.length;
    var character = fullLength % 2 == 0 ? "EVEN" : "ODD";
    return character;
}
console.log("Length of JavaScript: ", EvenOrOdd("JavaScript"));
console.log("Length of Google: ", EvenOrOdd("Google"));
console.log("Length of Developer: ", EvenOrOdd("Developer"));

console.log("-------------------------------------------------");


