
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
const emp_monika = m = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("-------Assignment b]: Sorting Method in ascending and Descending-----------");
console.log(`----Q-1--> Sort the array_employees in ascending order of Employee Ids----`);
const newArray1 = array_employees.sort((a, b) => {
    if (a.emp_id > b.emp_id) {
        return 1;
    }
    else
        return -1;
});
newArray1.forEach((value) => {
    console.log(`Employee Id==>"${value.emp_id}" , Name==>"${value.emp_name}" , Department==>"${value.emp_dept}"`);
})

console.log(`----Q-2--> Sort the array_employees in ascending order of employee department----`);

const newArray = array_employees.sort((a, b) => {
    if (a.emp_dept > b.emp_dept) {
        return 1;
    }
    else
        return -1;
});
newArray.forEach((value) => {
    console.log(` Department==>"${value.emp_dept}",Employee Id==>"${value.emp_id}" ,Company==>"${value.emp_company}"`);
})

console.log(`----Q-3--> Sort the employee array in descending order of employee salary----`);

const newArray2 = array_employees.sort((a, b) => {
    if (a.emp_salary > b.emp_salary) {
        return -1;
    }
    else
        return 1;
});
newArray2.forEach((value) => {
    console.log(` Name==>"${value.emp_name}",Employee Salary==> "${value.emp_salary}" ,Company==> "${value.emp_company}"`);
})

console.log(`----Q-4--> Sort the employee array in ascending order of company name ----`);

const newArray4 = array_employees.sort((a, b) => {
    if (a.emp_company > b.emp_company) {
        return 1;
    }
    else
        return -1;
});
newArray4.forEach((value) => {
    console.log(`Company==> "${value.emp_company}", Employee Id==> "${value.emp_id}", Emp Name==> "${value.emp_name}", Employee Salary==> "${value.emp_salary}", Department==> "${value.emp_dept}"`);
})