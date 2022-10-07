console.log("===function_assignment");

console.log("****Q1****");
function name() {
    console.log("Sushant Shankar Sawant");
}
name();
function dept() {
    console.log("I am ReactJS Developer");
}
dept();
console.log("----------------------------");

console.log("****Q2****");
function concat(firstName, lastName) {
    console.log(firstName + lastName);
}
concat("Sushant", "Sawant");

console.log("----------------------------");

console.log("====Q3====");

function swap_values(arg1, arg2) {
    console.log("====Before swap===");
    console.log(arg1, arg2);
    console.log("===After swap===");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values("1000", "2000");
console.log("----------------------------");

console.log("===Q4====");
function add_three_numbers(arg1, arg2, arg3) {
    console.log(arg1 + arg2 + arg3);
}
add_three_numbers(10.23, 600, 40);
add_three_numbers("Hello", "Good", "Morning");
console.log("----------------------------");