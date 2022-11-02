console.log("---------------Assignment -> Array for removing duplicate elements---------------");
let arrayOfNames=["Kamat", "Memon", "Nashpati", "Taimur", "Menon", "Kamat", "Andy", "Taimur"];
console.log(`Given Array->`,arrayOfNames);
console.log("--------------------------b-> after removing duplicate elements from array ------------------------");
let uniqueArray = [...new Set(arrayOfNames)];
console.log(uniqueArray);
//console.log("--------------------------c-> count of duplicate elements from array ------------------------");

//let c=arrayOfNames.length;

//console.log(`count of duplicate elements from array is->`, c-k);


let setNo=new Set();
let count=0;
for (const i of arrayOfNames) {
    setNo.add(i);
    count=count+1;
}
(setNo);

console.log("===========c->Count of duplicate element=================");
console.log("count of duplicate element given array is->", arrayOfNames.length-setNo.size);

let k=uniqueArray.length;
console.log(`----------d->Total no of unique element from Array-------------`);
console.log(`Total no of unique element from Array->`, k);

/*console.log("===============Unique element=========================");

console.log([...setNo]);*/


