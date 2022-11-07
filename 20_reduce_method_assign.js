console.log("-----Reduce() Method---------");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("----Q-1----");
const sum = array_numbers.reduce((runningTotal, value) => {
    return runningTotal + value;
});
console.log(`Given Array:-`, array_numbers);
console.log(`Sum of All Array Numbers:-`, sum);
console.log("----Q-2----");
const even_numbers = array_numbers.filter((element) => {
    return element % 2 == 0;
});
console.log(`Given Array:-`, array_numbers);
console.log(`Even Numbers from Array:-`, even_numbers);

const sum_even_numbers = even_numbers.reduce((value, runningTotal) => {
    return value + runningTotal;
});
console.log(`Sum of Even Numbers:-`, sum_even_numbers);