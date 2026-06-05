//Task1

let marks = 75;

console.log(marks >= 35? "Pass" : "Fail");      //Pass

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");                    //Grade B
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("No Grade");
}


// Task2

let salary = 25000;

let bonus = salary * 10/100;                   //Bonus : 2500
let finalSalary = salary + bonus;              //Final Salary : 27500

console.log("Original Salary :", salary);      //Original Salary : 25000
console.log("Bonus :", bonus);                 //Bonus : 2500
console.log("Final Salary :", finalSalary);    //Final Salary : 27500


// Task3

let email = "admin@gmail.com";
let password = "12345";

if (email === "admin@gmail.com" && password === "12345") {        //Login Success
    console.log("Login Success");
} else {
    console.log("Login Failed");
}


// Task4

let price = 2000;

let finalAmount = price>1000 ? price-(price * 20 / 100):price;
   
console.log("Final Amount :", finalAmount);


// Task5

let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product :", products[0]);                      //First Product : Laptop

console.log("Last Product :", products[products.length - 1]);     //Last Product : Keyboard

console.log("Total Products :", products.length);                 //Total Products : 4


// Task6

let employee = {
    name: "Prashant",
    department: "Development",
    salary: 30000
};

console.log(employee);                                           //{ name: 'Prashant', department: 'Development', salary: 30000 }

console.log("Employee Name :", employee.name);

console.log("Salary :", employee.salary);


// Task7


let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;                         //Total Bill : 3000
  
let discount = totalBill * 10 / 100;                         //Discount : 300

let finalamount = totalBill - discount;                      //Final Amount : 2700
 
console.log("Total Bill :", totalBill);

console.log("Discount :", discount);

console.log("Final Amount :", finalamount);


// Task8

let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");                   //Eligible for Voting
} else {
    console.log("Not Eligible");
}


// Task9

let a = 10;

console.log("Initial Value :", a);                        //Initial Value : 10

a++;
console.log("After a++ :", a);                            //After a++ : 11

++a;
console.log("After ++a :", a);                            //After ++a : 12

a--;
console.log("After a-- :", a);                            //After a-- : 11

--a;
console.log("After --a :", a);                            //After --a : 10


// Task10

let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");                  //Eligible for Salary
} else {
    console.log("Not Eligible");
}


// Task11

let Employee = {
    id: 101,
    name: "John",
    department: "Development",
    salary: 35000,
    experience: 2
};

console.log("Employee ID :", Employee.id);                       //Employee ID : 101
console.log("Employee Name :", Employee.name);                  //Employee Name : John
console.log("Department :", Employee.department);               //Department : Development
console.log("Salary :", Employee.salary);                       //Salary : 35000
console.log("Experience :", Employee.experience, "Years");      //Experience : 2 Years

let Bonus = Employee.salary * 10 / 100;                         //Bonus : 3500

let finalsalary = Employee.salary + Bonus;                      //Final Salary : 38500
console.log("Bonus :", Bonus);
console.log("Final Salary :", finalsalary);               

let performance = Employee.experience >= 2 ? "Good" : "Average"; //Performance Status : Good
   

console.log("Performance Status :", performance);