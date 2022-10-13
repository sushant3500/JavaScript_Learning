console.log("------------Assignment 0A---------------------");
console.log("------------Question-1------------------------");

function maleMarriageEligibility(gender, age, boyName) {
    var result = gender = "Male" && age >= 21
        ? `Hey ${boyName}, you are eligible for Marriage.`
        : `${boyName}, you are Not eligible for Marriage.`;
    console.log(result);
}
maleMarriageEligibility("Male", 25, "BillGates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log("------------Question-2---------------------");

function femaleMarriageEligibility(gender, age, girlName) {
    if (gender == "Female" && age >= 18) {
        return console.log(`hey ${girlName} you are Eligible for Marriage.`);
    }
    return console.log(`hey ${girlName} you are Not Eligible for Marriage.`);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");

console.log("-------------------------------------------------------------");