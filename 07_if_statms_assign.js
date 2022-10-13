
console.log("----------------Q-1-----------------");
function numbers(num) {
   if (num % 2 == 0) {
      return console.log(num, ": is EVEN Number.");
   }
   return console.log(num, ": is ODD Number.");

}
numbers(45);
numbers(70);
numbers(67);
numbers(98);
console.log("----------------Q-2-----------------");
function person(age) {
   if (age >= 18) {
      return console.log(age, ":- is eligible for voting.");

   }
   return console.log(age, ":- is not eligible for voting.");
}
person(16);
person(20);
person(17);
person(40);

console.log("----------------Q-3-----------------");

function string(value) {
   var stringLen = value.length;
   if (stringLen > 10) {
      return console.log(`string ${value} contains more than 10 characters.`);
   }
   return console.log(`string ${value} not contains more than 10 characters.`);


}
string(`"JavaScript-ES6"`);

console.log("----------------Q-4--------------------");
function stringWith(statement) {
   var result = statement.startsWith("Java");
   console.log(statement, `This string start with "Java".`);
}
stringWith("JavaScript Language");
console.log("-----------------------------------------------------");

