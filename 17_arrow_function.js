console.log("--------------Assignment on Arrow Function---------------------");
console.log("----------------------------Q1---------------------------------");
let result = () => {
    console.log(` Inside Arrow Function-> ${"Good Afternoon, Today is Friday."}`);
}
result();
console.log("----------------------------Q2---------------------------------");
let show = (n1, n2, n3 = 2) => {
    console.log(`Multiplication of three values-> ${n1 * n2 * n3}`);
}
console.log("---------Q2-a] Value to be passed [5, 5, 2] for multiplication----------------");
show(5, 5, 2);
console.log("----------Q2-b] Value to be passed [10,4] for multiplication->3rd arg kept default value is 2-----------");
show(10, 4);

console.log("----------------------------Q3---------------------------------");
let sum = (n1, n2, n3, n4, n5) => {
    return n1 + n2 + n3 + n4 + n5
}
console.log(`Q3-A]sum of (100+100+200+349+756) is-> "${sum(100, 100, 200, 349, 756)}"`);
console.log(`Q3-B]concat of ("I am","Learning", "ES6", "features", "in depth") given arrow function is-> "${sum("I am", "Learning", "ES6", "features", "in depth")}"`);