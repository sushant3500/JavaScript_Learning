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

let array_emps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("---Filter() & Reduce() Method---");
console.log("----Q-1----");
const wiproEmp = array_emps.filter((element) => {
    if (element.emp_company == "Wipro") {
        console.log(`Employee from Wipro:-`, element);
    }
});
console.log("----Q-2----");
const emp_it_hr = array_emps.filter((element) => {
    if (element.emp_dept == "IT" || element.emp_dept == "HR") {
        //console.log(`Employee from IT or HR:-, ${element.emp_id}, ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company} `);
        console.log(`Employee from IT or HR:-`, element);
    }
});

console.log("----Q-3----");
array_emps.filter((element) => {
    if (element.emp_id > 50) {
        console.log(`Emp ID Grater than 50:-`, element);
    }
});
console.log("----Q-4----");
array_emps.filter((element) => {
    if (element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")) {
        console.log(`start with letter A or V or M:-`, element);
    }
});
console.log("----Q-5----");
const salary = [];
let all_salary = array_emps.filter((element) => {
    salary.push(element.emp_salary)
});

const sumOfSalary = salary.reduce((value, sum) => {
    return value + sum;
});
console.log(`Sum of All Emp Salary:- ${sumOfSalary}`);
const len = salary.length;
console.log(`Number of Emp:- ${len}`);
const average_salary = sumOfSalary / salary.length;
console.log(`Average Salary of All Emp:- ${average_salary}`);

console.log("----Q-6----");
const dept_it = [];
array_emps.filter((element) => {
    if (element.emp_dept == "IT") {
        dept_it.push(element.emp_salary);
    }
});
console.log(`Salaries from IT Department:-`, dept_it);
const salaryIt = dept_it.reduce((sum, value) => {
    return sum + value;
});
console.log(`Total Salary of IT Department:- ${salaryIt}`);
const len1 = dept_it.length;
console.log(`Number of Salaries:- ${len1}`);
const it_avg = salaryIt / len1;
console.log(`Average Salary of IT Department:-${it_avg}`);
