console.log("====Assignment on forEach Method====");
console.log("====Q-1-> index====");
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array_numbers.forEach((currentValue, index) => {
    console.log(`Array element:${currentValue}, Index:${index}`);
});
console.log("====Q-2-> Positive Numbers from Array:- ====");
array_numbers.forEach((element) => {
    if (element >= 0) {
        console.log(`${element}`);
    }
});
console.log("====Q-3-> Negative Numbers from Array:- ====");
array_numbers.forEach((element) => {
    if (element < 0) {
        console.log(`${element}`);
    }
});
console.log("====Q-4-> Even Numbers from Array:-====");
array_numbers.forEach((element, index) => {

    if (element % 2 == 0) {
        console.log(`${element}`);
    }
});

/*let sum_numbers=0
array_numbers.forEach(  ( element) => {
    
    let temp = element;
    sum_numbers = sum_numbers + temp;
    
});
console.log(`Q-5]->Sum of All Array Numbers is->`, sum_numbers);*/
//console.log("====== reduce()=====");
let sum = array_numbers.reduce((value, runningTotal) => {
    return value + runningTotal;
});
console.log(`Q-5]->Sum of All Array Numbers is->`, sum);

console.log("====Q-6-> Even Position Numbers from Array:-====");
array_numbers.forEach((element, index) => {

    if (index % 2 == 0) {
        console.log(`Element:- ${element}, Index:- ${index}`);
    }
});

console.log("====Q-7-> Odd Position and Negative Numbers from Array:-====");
array_numbers.forEach((element, index) => {

    if (index % 2 != 0 && element < 0) {
        console.log(`Element:- ${element}, Index:- ${index}`);
    }
});




