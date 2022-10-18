console.log("==========Assignment No-0A=============");
console.log("===================Q-1=====================");
var string = "I am very good IT Developer";
var lowerCaseVowels = ("aeiou");
var upperCaseVowels = ("AEIOU");
var count = 0;
for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    var isLower = lowerCaseVowels.includes(char);
    var isUpper = upperCaseVowels.includes(char);
    if (isLower || isUpper) {
        count = count + 1;
    }
}
console.log(`total Vowels Available in Given String:-"${count}"`);
console.log("===================Q-2=====================");
function cube(arg) {
    var addition = 0;
    var result = 0;
    for (let index = 0; index <= arg; index++) {
        result = index * index * index;
        addition = addition + result;
    }
    console.log(`"Sum of Cube Number from 1 to 5":-${addition}`);
}
cube(5);
console.log("===================Q-3=====================");
string1 = "Hard work always pays back";
string2 = "Soon I will be Angular IT Champ";

function oddPositionedChars(value) {
    var finalString = "";
    for (let index = 1; index < value.length; index++) {
        if (index % 2 != 0 && value[index] != " ") {
            finalString = finalString + value[index];



        }
    }
    console.log(`Given String:- "${value}"`);
    console.log(`Odd Positioned Characters:- "${finalString}"`);
    console.log("-----------------------------------------------");
}
oddPositionedChars(string1);
oddPositionedChars(string2);
