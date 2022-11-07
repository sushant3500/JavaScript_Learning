const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`----Q-1----`);
console.log(`Given Array:-`, array_roll_numbers);
array_roll_numbers.reverse();
console.log(`Reverse the array:-`, array_roll_numbers);

console.log(`--Q-2--`);
const array = array_roll_numbers.sort();
console.log(`Sort Method Without Argument:-`, array);

console.log(`--Q-3--`);
const asc_order = array_roll_numbers.sort((a, b) => {
    return (a > b) ? 1 : -1;
});
//console.log(`Given Array:-`, array_roll_numbers);
console.log(` Sort the array in ascending order:-`, asc_order);

console.log(`--Q-4--`);
const desc_order = array_roll_numbers.sort((a, b) => {
    return (a < b) ? 1 : -1;
});
//console.log(`Given Array:-`, array_roll_numbers);
console.log(` Sort the array in descending order:-`, desc_order);

console.log(`--Q-5--`);
const array_sort = array_roll_numbers.sort((a, b) => {
    return (a > b) ? 1 : -1;
});
//console.log(`Given Array:-`, array_roll_numbers);
console.log(`Sort Method:-`, array_sort);
const sorting = array_sort.reverse();
console.log(`After using Reverse() Method:-`, sorting);

console.log(`--Q-6--`);
/*array_roll_numbers.sort((a,b,c)=>{
   return (a<b)?1:-1;
});
console.log(array_roll_numbers[0]);*/
const great_number = array_roll_numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(`Greatest number from the array:-`, great_number[great_number.length - 1]);

console.log(`--Q-7--`);

const smallestNoArray = array_roll_numbers.sort((a, b) => {
    return (a > b) ? 1 : -1;
});
console.log(`smallest number from the array:-`, smallestNoArray[0]);

console.log(`--Q-8--`);
const newArray = [...new Set(array_roll_numbers)];
console.log(`Remove duplicates from array:-`, newArray);

