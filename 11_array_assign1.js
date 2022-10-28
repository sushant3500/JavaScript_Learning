console.log("=============================Assignment No-01=================================");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given Array Fruits->`, fruits_seasonal);
console.log("=============================Q-01=================================");
console.log(`First Element-> "${fruits_seasonal[0]}"`);
console.log(`Last Element-> "${fruits_seasonal[4]}"`);
console.log("=============================Q-02=================================");
console.log(`Given Array->`, fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(`Adding Element "Papaya" Before the "Banana" Element->`, fruits_seasonal);
console.log("=============================Q-03=================================");
console.log(`Given Array->`, fruits_seasonal);
fruits_seasonal.splice(4, 1);
console.log(`"Mango" Element Removed->`, fruits_seasonal);
console.log("=============================Q-04=================================");
fruits_seasonal.splice(5, 1, "Pineapple");
console.log(`"Pineapple" Element Adding in Last Position`, fruits_seasonal);
console.log("=============================Q-05=================================");
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(`Adding "Dragon Fruit" Before Water Melon->`, fruits_seasonal);
console.log("=============================Q-06=================================");
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(`Replace "Orange" with "Kiwi"->`, fruits_seasonal);
console.log("=============================Q-07=================================");
let a = fruits_seasonal.slice(1, 4);
console.log(`Elements Starting from index 1 to 4`, a);
console.log("=============================Q-08=================================");
console.log(`Given Array->`, fruits_seasonal);
console.log(`Last 3 Element->`, fruits_seasonal.splice(fruits_seasonal.length-3));



