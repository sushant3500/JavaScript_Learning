console.log("========Assignment No-01===========");
console.log("================= Q.01 ======================");
console.log("================= Just log Vowels ======================");
var givenString = "Good Morning IT CHamp";
var string1 = ["a", "e", "i", "o", "u"];
var strLowerCase = givenString.toLowerCase();
console.log("Given String is:-", strLowerCase);
var count = 0;
for (let index = 0; index < string1.length; index++) {
    if (strLowerCase.includes(string1[index])) {
        console.log(string1[index]);
        count = count + 1;
    }
}
console.log("Total Vowels Available in String is:-", count);
console.log("================= Q.02 ======================");
function str(string) {
    var count = 0;
    console.log(`"Input string is:-"${string}`);

    var strLowerCase = string.toLowerCase();
    var totalChar = strLowerCase.length;

    for (let index = 0; index <= totalChar; index++) {
        var char = strLowerCase.charAt(index);

        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            console.log(char);
            count = count + 1;
        }
    }
    console.log(`"Total Vowels Available in Given String:-" ${count}`);
}
str("I Love JavaScript");
console.log("================= Q.03 ======================");

var addition = function (num1) {
    var add = 0;

    for (let index = 0; index <= num1; index++) {
        add = add + index;
    }
    console.log(`"Addition of number 1 to 10 :-" ${add}`);

}

addition(10);
console.log("================= Q.04 ======================");
function summation(value) {
    let sum = 0;
    for (let index = 1; index <= value; index++)
        sum += (index * index);

    return sum;
}
console.log("*****Addition of 1 to 5 square numbers*****");

value = 5;
console.log(summation(value));
console.log("================= Q.05 ======================");
console.log("================= Q.5.1 Even Positioned Characters ======================");
string1 = "Hard work always pays back";
string2 = "Soon I will be Angular IT Champ";

function evenPositionedChars(value) {
    var finalString = "";
    for (let index = 1; index < value.length; index++) {
        if (index % 2 == 0 && value[index] != " ") {
            finalString = finalString + value[index];


        }
    } console.log(finalString);
}
evenPositionedChars(string1);
evenPositionedChars(string2);
console.log("================= Q.5.2 Odd Positioned Characters ======================");
string1 = "Hard work always pays back";
string2 = "Soon I will be Angular IT Champ";

function oddPositionedChars(value) {
    var finalString = "";
    for (let index = 1; index < value.length; index++) {
        if (index % 2 != 0 && value[index] != " ") {
            finalString = finalString + value[index];



        }
    } console.log(finalString);
}
oddPositionedChars(string1);
oddPositionedChars(string2);
console.log("===============");