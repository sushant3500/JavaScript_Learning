console.log("--------------------------------Assignment On Class with Constructor-----------------------------------");
console.log("--------------------------------Q-1-----------------------------------");
class Vehicle {
    constructor(companyName, model) {
        this.companyName = companyName,
            this.model = model
    }
    result() {
        console.log(`Company Name:- "${this.companyName}", Model:- "${this.model}"`);
    }
}
let vehicle1 = new Vehicle("Tata Motors", "Tata Harrier.");
let vehicle2 = new Vehicle("Mahindra & Mahindra", "Mahindra Scorpio-N.");
let vehicle3 = new Vehicle("Hyundai", "Venue.");
let vehicle4 = new Vehicle("Toyota", "Innova Crysta.");
let vehicle5 = new Vehicle("Maruti Suzuki", "Ertiga.");
console.log(vehicle1); vehicle1.result();
console.log(vehicle2); vehicle2.result();
console.log(vehicle3); vehicle3.result();
console.log(vehicle4); vehicle4.result();
console.log(vehicle5); vehicle5.result();
console.log("--------------------------------Q-2-----------------------------------");
class College {
    collegeName;
    address;
    constructor(collegeName, address) {
        this.collegeName = collegeName,
            this.address = address
    }
    details() {
        console.log(`College Name:- "${this.collegeName}", Address:- "${this.address}"`);
    }
}
let c1=new College("R.I.T.", "Islampur.");
let c2=new College("A.D.C.E.T", "Ashta.");
let c3=new College("G.P", "Karad.");
let c4=new College("Department of Technology", "Kolhapur.");
console.log(c1); c1.details();
console.log(c2); c2.details();
console.log(c3); c3.details();
console.log(c4); c4.details();
console.log("--------------------------------Q-3-----------------------------------");
let personalDetails={
    fullName: "Sushant Sawant",
    age: 25,
    Address: "Sangli",
    mobileNo: 9156005881 ,
    graduation:"B.E"
}
for (const key in personalDetails) {
    if (Object.hasOwnProperty.call(personalDetails, key)) {
        const element = personalDetails[key];
        console.log(`key:-"${key}", element:-"${element}."`);
        
    }
}
console.log("---------------------------------Q-4------------------------------------");
function fabo(myNumber) {
    if (myNumber == 0) {
        return 0;
    }
    
    let fN = 0; sN=1;
     nextN = fN + sN;
    
    for (let index = 0; index < myNumber; index++) {
        fN = sN;
        sN = nextN;
        nextN = fN + sN;
        console.log(nextN);
    }
}
fabo(7);





