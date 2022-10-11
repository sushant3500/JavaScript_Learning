console.log("===Assignment Function Expression====");
console.log("===Q1===");

var square = function (value) {
    console.log("square of " + value, ":-" + value * value);
}
square(5);
square(6);
square(25);
square(100);
console.log("===Q2===");
console.log(typeof square);

console.log("===Q3===");

var triangle = function (height, base) {
    console.log("Area of a Triangle", ":-", 0.5 * height * base);
}
triangle(45, 34);

console.log("===Q4===");
var rectangle = function (length, width) {
    console.log("area of rectangle land:-", length * width);
}
rectangle(499, 917);

console.log("===Q5===");
var swap_values = function (arg1, arg2) {
    console.log("before the swapping:-", arg1, arg2)
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("after the swapping:-", arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values(1000, 2000);

console.log("===Q6===");
var sentence = "JavaScript the most popular language"
console.log(sentence);

var count = sentence.length;
console.log("Total Characters:-", count);

var char = sentence.indexOf('S');
console.log("Index of Character(S):-",char);

var index = sentence.indexOf("lang");
console.log("Index of String(lang):-", index);

var character = sentence.charAt(count-1);
console.log("Last Character:-", character);

var sushant = sentence.charAt(count-3);
console.log("Last 3rd Character:-", sushant);




