console.log("==========Assignment-> Array Of Objects==============")
class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}

let axis_bank = new Bank("AXIS Bank", "Pune", 123456, "AXIS0123", "10%");
let sbi_bank = new Bank("SBI Bank", "Mumbai", 456789, "SBI0456", "11%");
let icici_bank = new Bank("ICICI Bank", "Madras", 112233, "ICICI0789", "9%");
let kotak_bank = new Bank("KOTAK Bank", "Jaipur", 445566, "KTK0789", "10.5%");
let hdfc_bank = new Bank("HDFC Bank", "Sangli", 778899, "HDFC02112", "9.5%");
let punjab_bank = new Bank("PUNJAB Bank", "Mohali", 010203, "PNB02134", "11.5%");


const array = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank];

console.log(`***************************C-> "Bank Name and Location"**************************`);

for (const a of array) {
    console.log(`Bank Name-> "${a.bank_name}" & Location-> "${a.location}"`);
}
console.log(`**************************D-> "Kotak Bank Details"*******************************`);

for (const b of array) {
    if (b.bank_name == "KOTAK Bank") {
        console.log(`Bank Name-> "${b.bank_name}", Location-> "${b.location}", Account Number-> "${b.account_no}", IFSC-> "${b.ifsc}", Interest Rate-> "${b.interest_rate}"`);
    }
}

console.log(`**************************E-> "All Bank Details"*******************************`);

for (const c of array) {
    console.log(`Bank Name-> "${c.bank_name}", Location-> "${c.location}", Account Number-> "${c.account_no}", IFSC-> "${c.ifsc}", Interest Rate-> "${c.interest_rate}"`);
}
