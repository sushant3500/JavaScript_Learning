console.log("=========Assignment On Map() Method==================");
const array_numbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
//console.log(`Given Array:-`, array_numbers);
console.log("----Q-1-----");
const newArray = array_numbers.map((element, index) => {
    return element + 10;
});
console.log(`Original Given Array:-`, array_numbers);
console.log(`adding 10 into each element:-`, newArray);
console.log("----Q-2-----");
let array_square = array_numbers.map((element, index) => {
    return element * element;
});
console.log(`Original Given Array:-`, array_numbers);
console.log(`Square of each element of Array`, array_square);
console.log("----Q-3-----");
let index_array = array_numbers.map((element, index) => {
    return element + index;
});
console.log(`Original Given Array:-`, array_numbers);
console.log(`After adding index in each element array is`, index_array);