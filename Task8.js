//Task1

let Employees=[
 {id:1,name:"Rahul",salary:25000},
 {id:2,name:"Kavin",salary:50000},
 {id:3,name:"John",salary:75000}
]
//Employee Salary Greater than 40000
let employeeDetails=  Employees.filter(emp=>{
        return emp.salary>40000
})
console.log(employeeDetails)

//First Employee Salary is above 60000
let employeeName = Employees.find(function(emp) {
    return emp.salary > 60000;
});

console.log(employeeName);


//Total Salary
let totalSalaryExpense=0
for(let emp of Employees){
    totalSalaryExpense+=emp.salary
}
console.log(totalSalaryExpense)

//Emplyees name
let newEmployee= Employees.map((emp,index)=>{
    return emp.name
})
console.log(newEmployee)


//Task2

function checkAdmission(student) {

    if (student.age >= 18) {

        if (student.percentage >= 60) {
            return "Admission Approved";
        } else {
            return "Admission Rejected - Percentage is below 60";
        }

    } else {
        return "Admission Rejected - Age is below 18";
    }

}

let student = {
    name: "Rahul",
    age: 19,
    percentage: 75
};

let result = checkAdmission(student);

console.log("Student Name :", student.name);
console.log("Admission Status :", result);


//Task3

let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

//  Calculation of Total Bill

let totalBill = cart.reduce(function(total, item) {
    return total + (item.price * item.qty);
}, 0);

console.log("Total Bill : " + totalBill);

//  Most Expensive Product

let expensiveProduct = cart.reduce(function(max, item) {
    return item.price > max.price ? item : max;
});

console.log("Most Expensive Product :", expensiveProduct.product);

//  All Product Names

console.log("Product Names :");

cart.forEach(function(item) {
    console.log(item.product);
});


//Task4

let signal = "red";
let fine = 0;

switch (signal) {

    case "red":
        console.log("Stop");

        fine = 1000;
        console.log("Traffic Rule Violated");
        console.log("Fine Amount : " + fine);
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");

}


//Task5


let students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

// Passed Students (mark >= 50)

let passedStudents = students.filter(function(student) {
    return student.mark >= 50;
});

console.log("Passed Students:");
console.log(passedStudents);

// Failed Students (mark < 50)

let failedStudents = students.filter(function(student) {
    return student.mark < 50;
});

console.log("Failed Students:");
console.log(failedStudents);

// Grade List

let gradeList = students.map(function(student) {

    let grade;

    if (student.mark >= 90) {
        grade = "A";
    } else if (student.mark >= 75) {
        grade = "B";
    } else if (student.mark >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    return {
        name: student.name,
        mark: student.mark,
        grade: grade
    };
});

console.log("Grade List:");
console.log(gradeList);


//Task6


function placeOrder(customerName, ...items) {

    console.log("Customer Name :", customerName);

    console.log("Ordered Items :");
    for (let item of items) {
        console.log(item);
    }

    console.log("Total Items :", items.length);
}

placeOrder(
    "Rahul",
    "Pizza",
    "Burger",
    "French Fries",
    "Coke"
);


// Task7

let balance = 10000;

// Deposit 
function deposit(amount) {
    balance = balance + amount;
    return balance;
}

// Withdraw 
function withdraw(amount) {

    if (amount <= balance) {
        balance = balance - amount;
        return balance;
    } else {
        return "Insufficient Balance";
    }
}

// Check Balance
function checkBalance() {
    return balance;
}

// Transactions

console.log("Current Balance :", checkBalance());

console.log("After Deposit :", deposit(5000));

console.log("After Withdrawal :", withdraw(3000));

console.log("Available Balance :", checkBalance());


//Task8

let bookedSeats=[1,4,6,15,20]

function bookSeat(seatNumber){
    if(!bookedSeats.includes(seatNumber)){
         bookedSeats.push(seatNumber)
        console.log("Seat " + seatNumber + " Booked Successfully")
       
    }else{
        console.log("!!!Ooops Seat " + seatNumber + " Already Booked ")
    }
}

function checkSeat(seatNumber){
     if(!bookedSeats.includes(seatNumber)){
        console.log("Seat " + seatNumber + " is Available")
    }else{
        console.log("!!!Ooops Seat " + seatNumber + " is not Available")
    }
}

function showBookedSeats() {

    console.log("Booked Seats:");

    for (let seat of bookedSeats) {
        console.log(seat);
    }
}

checkSeat(5);

checkSeat(8);

bookSeat(6);

bookSeat(10);

showBookedSeats();


//Task9


let username = "Rahul";
let password = "rahul1234";
let email = "rahul@gmail.com";

if (
    !username.includes(" ") &&
    password.length >= 8 &&
    email.includes("@")
) {
    console.log("Login Validation Successful");
} else {
    console.log("Invalid Login Details");
}


//Task10

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {

        console.log("Product Titles");

        products.forEach(product =>
            console.log(product.title)
        );

        let expensiveProducts = products.filter(
            product => product.price > 1000
        );

        console.log("Products Above 1000Rs");
        console.log(expensiveProducts);

        console.log("Total Products :", products.length);
    })
    .catch(err => console.log(err));


    //Task11

    let dob = "2000-08-15";

let birthDate = new Date(dob);

let day = birthDate.getDate();
let month = birthDate.getMonth() + 1;
let year = birthDate.getFullYear();

let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let weekDayName = weekDays[birthDate.getDay()];

console.log("Day :", day);
console.log("Month :", month);
console.log("Year :", year);
console.log("Weekday :", weekDayName);


//Task12


let plan = "Premium";

let benefits =
    plan === "Mobile"
        ? "Watch on 1 Mobile Device"
        : plan === "Basic"
        ? "Watch on 1 Screen in HD"
        : plan === "Standard"
        ? "Watch on 2 Screens in Full HD"
        : plan === "Premium"
        ? "Watch on 4 Screens in Ultra HD"
        : "Invalid Plan";

console.log("Plan :", plan);
console.log("Benefits :", benefits);


//Task13


let patients = [
    { id: 1, name: "Rahul", condition: "Normal" },
    { id: 2, name: "Kiran", condition: "Critical" },
    { id: 3, name: "John", condition: "Critical" },
    { id: 4, name: "Priya", condition: "Normal" }
];

// Critical Patients

let criticalPatients = patients.filter(function(patient) {
    return patient.condition === "Critical";
});

console.log("Critical Patients:");
console.log(criticalPatients);

//  Patient By ID

let patient = patients.find(function(patient) {
    return patient.id === 3;
});

console.log("Patient Found:");
console.log(patient);

// Total Patients

console.log("Total Patients :", patients.length);


// Task14


let inventory1 = [
    { id: 1, product: "Laptop", price: 50000 },
    { id: 2, product: "Mobile", price: 20000 }
];

let inventory2 = [
    { id: 3, product: "Headphone", price: 3000 },
    { id: 4, product: "Smartwatch", price: 5000 }
];



let allProducts = [...inventory1, ...inventory2];

console.log("Merged Inventory:");
console.log(allProducts);


let { id, product, price } = allProducts[0];

console.log("Product Details:");
console.log("ID :", id);
console.log("Product :", product);
console.log("Price :", price);


let updatedInventory = [
    ...allProducts,
    { id: 5, product: "Tablet", price: 25000 }
];

console.log("Updated Inventory:");
console.log(updatedInventory);


//Task15

let groupMembers = ["Rahul", "Kiran", "John"];

console.log("Initial Group:");
console.log(groupMembers);


groupMembers.push("Priya");

groupMembers.unshift("Naveen");

groupMembers.pop();

groupMembers.shift();


groupMembers.splice(1, 0, "Anu");

console.log("Final Group List:");
console.log(groupMembers);





