class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("===Q-1->TCS Employee Details===");
array_employess.forEach((element) => {
    if (element.emp_company == "TCS") {
        console.log(`Employee Names-> "${element.emp_name}" and Company Name-> "${element.emp_company}"`);
    }
});
console.log("===Q-2->Employee with Salary Greater than or equal to 50000===");
array_employess.forEach((element) => {
    if (element.emp_salary >= 50000) {
        console.log(`Employee Name-> "${element.emp_name}", Company-> "${element.emp_company}", salary-> "${element.emp_salary}"`);
    }
});
console.log("===Q-3->Sum of All Employee Salary===");
let sum = 0;
array_employess.forEach((element) => {
    let temp = element.emp_salary;
    sum = sum + temp;
})
console.log(`Sum of All Employee Salary, "${sum}"`);
console.log("===Q-4-> Average Salary of All Employee===");
let sum1 = 0;
array_employess.forEach((element) => {
    let temp = element.emp_salary;
    sum1 = sum1 + temp;
})
console.log(`Average Salary of All Employee, "${sum1 / array_employess.length}"`);
console.log("--------------------------------Q5-> salary is greater than or equal to `75000` and `IT` OR `HR` Department------------------------------");
array_employess.forEach((element) => {
    if (element.emp_salary >= 75000 && element.emp_dept === "IT" || element.emp_dept === "HR") {
        console.log("Employee Details->", element);
    }
});
