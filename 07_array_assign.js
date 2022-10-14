console.log("------Assignment - *For Loop*--------");
console.log("------Q*1-------");
console.log(`Incrementing Numbers from "5 to 15 by 1":-`);
for (var index = 5; index <= 15; index++) {
    console.log(index);

}
console.log("------Q*2-------");
console.log(`Decrementing Numbers from "50 to 40 by 1":-`);
for (var index = 50; index > 40; index--) {
    console.log(index);

}
console.log("------Q*3-------");
console.log(`First "15" Odd Numbers:-`);
var countOdd = 0;
for (let index = 0; index < 1000; index = index + 1) {
    if (index % 2 !== 0) {
        console.log(index);
        countOdd = countOdd + 1;
        if (countOdd == 15) {
            break;
        }
    }

}
console.log("------Q*4-------");
console.log(`First "10" Even Numbers:-`);
var countEven = 0;
for (let index = 0; index < 1000; index++) {
    if (index % 2 == 0) {
        console.log(index);
        countEven = countEven + 1;
        if (countEven == 10) {
            break;
        }
    }

}
console.log("------Q*5-------");
console.log(`Table of "5":-`);
for (var index = 5; index <= 50; index = index + 5) {
    console.log(index);

}
console.log("------Q*6-------");
console.log(`Table of "10":-`);
for (var index = 10; index <= 100; index = index + 10) {
    console.log(index);

}
console.log("------Q*7-------");
console.log(`Table of "10" in Reverse Order:-`);
for (var index = 100; index >= 10; index = index - 10) {
    console.log(index,);

}

console.log("-----------------------------");

