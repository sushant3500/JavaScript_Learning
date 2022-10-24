console.log("******Assignment - Object Cloning and Array basics******");
console.log("-------------------------Q-1--------------------------");
const array_nums = [20, 3, 4, 56, 90, 400, 49];
let clone_nums = array_nums;
clone_nums.push(55, 66);
console.log(`"Original Array"->`, array_nums);
console.log(`"Shallow Cloned Array"->`, clone_nums);
console.log("-------------------------Q-2--------------------------");
const array_numbers = [20, 3, 4, 56, 90, 400, 49];
console.log(`"Before Updated Original Array"->`, array_numbers);
let clone_numbers = { ...array_numbers };
array_numbers.push(10, 26);
console.log(`"After Updated Original Array"->`, array_numbers);
console.log(`"Deep Cloned Array using Spread Operator"->`, clone_numbers);
console.log("-------------------------Q-3--------------------------");
array_even = [2, 30, 14, 8];
console.log(`"array_nums and array_even"->`, array_nums, array_even);
const all = { ...array_nums, ...array_even };
console.log(`"Merge or Concat using Spread Operator"->`, all);
console.log("-------------------------Step-4--------------------------");
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,000INR",
        aug_month: "50,000INR",
        june_month: "65,000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"]
}
console.log(`Employee Details->`, employee_info, `Employee Salary->`, employee_info.salary,
 `Employee Address->`, employee_info.address.locality, employee_info.address, `Employee Mobiles->`, employee_info.mobiles);
console.log("-------------------------Q-5(a)--------------------------");
console.log(employee_info.address);
console.log("-------------------------Q-5(b)--------------------------");
console.log(employee_info.mobiles);
console.log("-------------------------Q-6--------------------------");
const employee_details = { ...employee_info };
console.log(`"Original Object"->`, employee_info.address.locality.street, employee_info.mobiles);
console.log(`"Deep Cloned Object"->`, employee_details.address.locality.street, employee_details.mobiles);
employee_details.address.locality.street = "Sangli, 416416";
employee_details.mobiles[0] = "+91 9156 0058 81";
console.log(`"Updated Cloned Object with street and Mobile"->`, employee_details.address.locality.street, employee_details.mobiles);
console.log(`"Original Object After Updated Cloned Object with street and Mobile"->`, employee_info.address.locality.street, employee_info.mobiles);

console.log(`point out issue->`, "Original Object have also updated new values.");
console.log("-------------------------Q-7--------------------------");
const emp_details = JSON.parse(JSON.stringify(employee_info));
console.log(`"Original Object"->`, employee_info.salary, employee_info.address.country);
console.log(`"Before Updated Cloned Object"->`, emp_details.salary, emp_details.address.country);
emp_details.salary.july_month = "80,000INR";
emp_details.address.country = "United Kingdom";
console.log(`After(Salary & Country) "Updated Cloned Object"->`, emp_details.salary, emp_details.address.country);
console.log(`"Original Object" After (Salary & Country) Updated Cloned Object->`, employee_info.salary, employee_info.address.country);



