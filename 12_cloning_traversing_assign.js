console.log("=====================Assignment No-0A=====================");
console.log("========================Q-01=============================");
let bank_sbi = {
    bankName: "SBI",
    chairperson: "Dinesh Kumar Khara",
    founded: "1955",
    headquarter: "Mumbai"
}
console.log(bank_sbi);
console.log("========================Q-02=============================");
let bank_location = {
    street: "No 1277, Kumar Renaissance, Jangali Maharaj Rd, Deccan Gymkhana",
    city: "Pune",
    pin_code: "411004"
}
console.log(bank_location);
console.log("========================Q-03=============================");
console.log(`---------------Clone Objects by Using "Object.assign()"--------------`);

let cloned_bank_sbi = Object.assign({}, bank_sbi);
console.log(`Bank Name-> "${cloned_bank_sbi.bankName}", Chairperson-> "${cloned_bank_sbi.chairperson}", Founded-> "${cloned_bank_sbi.founded}", headquarter-> "${cloned_bank_sbi.headquarter}"`);

let sbi_bank = Object.assign({}, bank_location);
console.log(`Street-> "${sbi_bank.street}", City-> "${sbi_bank.city}", Pin_code-> "${sbi_bank.pin_code}"`);

console.log(`---------------Clone Objects by Using "Spread Operator"->--------------`);

let clone_bank_sbi = { ...bank_sbi };
console.log(`Bank Name-> "${clone_bank_sbi.bankName}", Chairperson-> "${clone_bank_sbi.chairperson}", Founded-> "${clone_bank_sbi.founded}", headquarter-> "${clone_bank_sbi.headquarter}"`);

let locationClone = { ...bank_location };
console.log(`Street-> "${locationClone.street}", City-> "${locationClone.city}", Pin_code-> "${locationClone.pin_code}"`);

console.log("========================Q-04=============================");
let rate_of_interest = {
    home_loan_interest: "13%",
    personal_loan_interest: "12%",
    due_interest: "7.50%"
}
console.log(rate_of_interest);
console.log("========================Q-05=============================");
let sbi_details = Object.assign(bank_sbi, bank_location, rate_of_interest);
console.log(`Merged All Object in New Object->`);
console.table(sbi_details);
/*let sbi_details={...bank_sbi, ...bank_location, ...rate_of_interest};
console.log(`Merged All Object in New Object->`);
console.table(sbi_details);*/
console.log("========================Q-06=============================");
console.log(`"Traverse the Merged Object"`);
for (const key in sbi_details) {
    const element = sbi_details[key];
    console.log(`${key} :${element}`);
}