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
console.log(`---------Q1-> list of all employee names from objects----------`);
const name_array = [];
array_employess.forEach((element) => {
    name_array.push(element.emp_name)
});
console.log(`Employee Names`, name_array);

console.log(`---------Q2-> list of Departments -----------`);

//const new_dept= [];
newArray = new Set()
array_employess.forEach((element) => {
    newArray.add(element.emp_dept)
    //new_dept.push(element.emp_dept) 

});
console.log(`List of Departments:-`, newArray);

console.log(`---------Q3->list of Employee ID -----------`);
const id_array = [];
array_employess.forEach((element) => {
    id_array.push(element.emp_id)
});
console.log(`Employee ID:-`, id_array);