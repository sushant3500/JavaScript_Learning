console.log("============Assignment No-01================");
console.log("******************Q-1*****************");
console.log("**************1.1 & 1.2***************");
var wordLengthSquare = function (value) {
    var lengthOfWord = value.length;
    return lengthOfWord * lengthOfWord;
}
console.log(`square of length of "JavaScript:-" ${wordLengthSquare("JavaScript")}`);
console.log(`square of length of "Google:-" ${wordLengthSquare("Google")}`);
console.log(`square of length of "Developer:-" ${wordLengthSquare("Developer")}`);

console.log("******************Q-2*****************");
function statement() {
    console.log("******************2.1*****************");
    var string = "I am React Developer";
    console.log(`reverse of "I am React Developer":-  ${(string.split(" ").reverse())}`);
    console.log("******************2.2*****************");
    var givenLength = string.length;
    console.log("Length of String:-", givenLength);
    var totalLength = (string.split(" ").length);
    console.log("Words in String:-", totalLength);
    console.log("******************2.3*****************");
    var result = givenLength / totalLength;
    console.log(`Length of String / total words in string:- ${result}`);
    console.log(`Length of String * total words in string:- ${totalLength * givenLength}`);
}
statement();