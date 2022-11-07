console.log("------------Filter() Method------------");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
//console.log(`Given Array`, array_numbers);
console.log("-------Q-1----------");
const arrayNew = array_numbers.filter((element) => {
    return element > 50;
});
console.log(`Given Array`, array_numbers);
console.log(`array elements greater than 50:-`, arrayNew);
console.log("-------Q-2----------");
const array_new = array_numbers.filter((element) => {
    return element % 2 == 0;
});
console.log(`Given Array`, array_numbers);
console.log(`array elements which are Even Numbers:-`, array_new);
console.log("-------Q-3----------");
const newArray = array_numbers.filter((element) => {
    return element % 2 != 0;
});
console.log(`Given Array`, array_numbers);
console.log(`array elements which are Odd Numbers:-`, newArray);
console.log("-------Q-4----------");
const multiply_array = array_numbers.filter((element) => {
    return element % 5 == 0;
});
console.log(`Given Array`, array_numbers);
console.log(`Number which is multiple of 5:-`, multiply_array);
console.log("-------Q-5----------");
const array = array_numbers.filter((element) => {
    return element >= 20 && element <= 50;
});
console.log(`Given Array`, array_numbers);
console.log(`Number which are between 20-50:-`, array);



