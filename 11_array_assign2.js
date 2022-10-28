console.log("=============================Assignment No-02=================================");
const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("-----------------------------------Q-01---------------------------------------");
console.log(`Given Array Numbers->`, array_numbers);
let totalLength = array_numbers.length;
console.log(`Length of Given Array is "${totalLength}".`);
console.log("-----------------------------------Q-02---------------------------------------");
console.log(`Given Array Numbers->`, array_numbers);
console.log(`First Element is "${array_numbers[0]}" and Last Element is "${array_numbers[totalLength - 1]}".`);
console.log("-----------------------------------Q-03---------------------------------------");
console.log(`Given Array:`, array_numbers);
console.log(`Third Last Element From Array->`, array_numbers[8]);
console.log("-----------------------------------Q-04---------------------------------------");
console.log("Even Numbers of Array->");
for (let i = 0; i < totalLength; i = i + 1) {
    if (array_numbers[i] % 2 == 0) {
        console.log(array_numbers[i]);
    }
}
console.log("-----------------------------------Q-05---------------------------------------");
console.log("Odd Numbers of Array->");
for (let index = 0; index < totalLength; index = index + 1) {
    if (array_numbers[index] % 2 !== 0) {
        console.log(array_numbers[index]);
    }
}
console.log("-----------------------------------Q-06---------------------------------------");
console.log("Even Positioned Element of Array->");
for (let index = 0; index < totalLength; index = index + 2) {
    console.log(array_numbers[index]);
}
console.log("-----------------------------------Q-07---------------------------------------");
console.log("Odd Positioned Element of Array->");
for (let i = 1; i < totalLength; i = i + 2) {
    console.log(array_numbers[i]);
}
console.log("-----------------------------------Q-08---------------------------------------");
let sum_numbers = 0;
for (let index = 0; index < totalLength; index++) {
    let temp = array_numbers[index];
    sum_numbers = sum_numbers + temp;

}
console.log(`Sum of All Array Numbers is->`, sum_numbers);
console.log("-----------------------------------Q-09---------------------------------------");
console.log("------------Multiple of 5-------------------");
for (let index = 0; index < totalLength; index++) {
    if (array_numbers[index] % 5 == 0) {

        console.log(array_numbers[index]);

    }

}
console.log("-----------------------------------Q-10---------------------------------------");
console.log(`Given Array is->`, array_numbers);
console.log(`"115" is available in Array->`, `${array_numbers.includes(115)}.`);
console.log("-----------------------------------Q-11---------------------------------------");
console.log(`Given Array is->`, array_numbers);
console.log(`"23" is available in Array->`, `${array_numbers.includes(23)}.`);