 // Task1

let basicSalary = 25000;

let hra = basicSalary * 20 / 100;                  //HRA : 5000
let bonus = basicSalary * 10 / 100;                //Bonus : 2500

let totalSalary = basicSalary + hra + bonus;       //Total Salary : 32500

let tax = totalSalary * 5 / 100;                   //Tax : 1625

let finalSalary = totalSalary - tax;               //Final Salary : 30875

console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);


// Task2

let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("A+");
}
else if (marks >= 80) {
    console.log("A");
}
else if (marks >= 70) {
    console.log("B");                          // A
}
else if (marks >= 60) {
    console.log("C");
}
else {
    console.log("Fail");
}


// Task3

let username = "admin";
let password = "12345";

if (username === "admin") {

    if (password === "12345") {
        console.log("Login Success");
    }
    else {                                     // Login success
        console.log("Invalid Password");
    }

}
else {
    console.log("Invalid Username");
}


// Task4

let balance =5000;
let withdrawAmount =2000;

if (withdrawAmount > balance) {
    console.log("Insufficient Balance");
}
else {
  let   balance = balance - withdrawAmount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance :",balance);     // Remaining Balance : 3000
}


// Task5

let purchaseAmount = 12000;
let discount = 0;

if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 20 / 100;
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 10 / 100;
}
else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 5 / 100;
}
else{
    console.log("No Discount")
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount :", purchaseAmount);      //12000
console.log("Discount :", discount);                   //2400
console.log("Final Amount :", finalAmount);            //9600


// Task6

let helmet = false;
let license = false;

if (!helmet && !license) {
    console.log("Fine : 3000RS");              //Fine : ₹3000
}
else if (!helmet) {
    console.log("Fine : 1000RS");                    
}
else if (!license) {
    console.log("Fine : 2000RS");
}
else {
    console.log("No Fine");
}

// Task7

let Present =0;
let Absent =0;

attendance = ["P","P","A","P","A","P","P"]
for (let i = 0; i < attendance.length; i++) {
    if(attendance[i] === "P") {
        Present++;                             //Present : 5
    } else {
        Absent++;                              //Absent : 2
    }   
}

// Task8

let product = {
    productName : "Laptop",
    price : 50000,
    stock : 10
};

for(let a in product) {

    console.log(a + " : " + product[a]);              //productName : Laptop    //price : 50000    //stock : 10

}    


// Task9

let distance = 12;
let fare = 0;

if(distance <= 5){

    fare = distance * 20;              //Fare : Rs 100

}
else if(distance <= 10){

    fare = (5 * 20) + ((distance - 5) * 15);       //Fare : Rs 175
} 
else{

    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);    //Fare : Rs 195
}

console.log("Total Fare : Rs" + fare);                     //Total Fare : Rs195


// Task10

let employees = [

    {id:1, name:"Rahul", salary:25000},
    {id:2, name:"Kiran", salary:30000},
    {id:3, name:"Navi", salary:40000}

];

console.log("All Employees");

for(let emp of employees){        //All Employees : {id:1, name:"Rahul", salary:25000}    
    console.log(emp);             //All Employees : {id:2, name:"Kiran", salary:30000}
 }                                //All Employees : {id:3, name:"Navi", salary:40000}


let highest = employees[0];
let lowest = employees[0];

let totalsalary = 0;

for(let emp of employees){

    if(emp.salary > highest.salary){
        highest = emp;
    }

    if(emp.salary < lowest.salary){
        lowest = emp;
    }

    totalSalary += emp.salary;
}

console.log("Highest Salary Employee :", highest);        //Highest Salary Employee : {id:3, name:"Navi", salary:40000}

console.log("Lowest Salary Employee :", lowest);          //Lowest Salary Employee : {id:1, name:"Rahul", salary:25000}

console.log("Total Employees :", employees.length);       //Total Employees : 3

console.log("Total Salary Expenditure :", totalSalary);    //Total Salary Expenditure : 95000