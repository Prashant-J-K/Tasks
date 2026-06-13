//Task1

let employeeName = "Prashant";
let salary = 30000;
let experience = 4;

let bonus = 0;

if (experience >= 5) {

    bonus = salary * 20 / 100;

}
else if (experience >= 2) {

    bonus = salary * 10 / 100;

}
else {

    bonus = salary * 5 / 100;

}

let finalSalary = salary + bonus;

console.log("Employee Name :", employeeName);
console.log("Salary :", salary);
console.log("Experience :", experience + " Years");
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);


//Task2

let studentName="shyam"
let age = 18;
let percentage = 75

if(age>=17 && percentage>=60){
    console.log("Admission Approved")
}
else{
    console.log("Admission Rejected")
}


//Task3

let choice = 1;

switch(choice){

    case 1:
        console.log("Order Confirmed : Pizza");
        break;

    case 2:
        console.log("Order Confirmed : Burger");
        break;

    case 3:
        console.log("Order Confirmed : Shawarma");
        break;

    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;

    default:
        console.log("Invalid Choice");
}

//Task4

let students = [
    "Rahul",
    "Kiran",
    "Navi",
    "Ajay",
    "Ravi",
    "Priya",
    "Sneha",
    "Arjun",
    "John",
    "David"
];

console.log("Student List");

for(let student of students){

    console.log(student);

}

console.log("Total Students :", students.length);


//Task5

let cart = [
  { product: "Mobile", price: 15000 },
  { product: "Headset", price: 2000 },
  { product: "Charger", price: 1000 }
]

let totalPrice=0
for( let item of cart){
    console.log(item.product)
 totalPrice+=item.price
}
console.log("total cart value:",totalPrice)

let highest= cart[2]



for( let item of cart){
    if(item.price>highest.price){
        highest=item
        console.log(`${highest.product} is the expensive Product`)
    }
}


//Task7




let balance = 10000;

// Deposit Function
function deposit(amount) {

    balance = balance + amount;

    console.log("Deposited Amount :", amount);
}

// Withdraw Function
function withdraw(amount) {

    if (amount <= balance) {

        balance = balance - amount;

        console.log("Withdraw Amount :", amount);

    } else {

        console.log("Insufficient Balance");

    }
}

// Check Balance Function
function checkBalance() {

    console.log("Current Balance :", balance);

}


// Function Calls

checkBalance();

deposit(5000);

checkBalance();

withdraw(3000);

checkBalance();



//Task7


let Age =70

if(Age<5){
    console.log("Free Ticket")
}
else if(Age>=5&& Age<=18){
    console.log("Ticket Price is 100 Rupees")
}
else if(Age>18&& Age<=60){
    console.log("Ticket Price is 200 Rupees")
}
else{
    console.log("Ticket Price is 120 Rupees")
}



//Task8

let purchaseAmount = 6000;

let discount = 0;

if (purchaseAmount > 5000) {

    discount = purchaseAmount * 20 / 100;

}
else if (purchaseAmount > 3000) {

    discount = purchaseAmount * 10 / 100;

}
else if (purchaseAmount > 1000) {

    discount = purchaseAmount * 5 / 100;

}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);


//Task9


let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

console.log("Original Inventory :", inventory);

// Add 2 items
inventory.push("Bread");
inventory.push("Butter");

console.log("After Adding Items :", inventory);

// Remove first item
inventory.shift();

console.log("After Removing First Item :", inventory);

// Remove last item
inventory.pop();

console.log("After Removing Last Item :", inventory);


if (inventory.includes("Milk")) {
    console.log("Milk Exists");
} else {
    console.log("Milk Not Found");
}


console.log("Final Inventory :", inventory);


//Task10

let patient = {
    patientName: "Rahul",
    aGe: 45,
    disease: "Fever",
    doctor: "Dr. Sharma"
};

console.log("Patient Details");


for(let key in patient){

    console.log(key + " : " + patient[key]);

}

// Destructuring
let { patientName, aGe, disease, doctor } = patient;

console.log("----- After Destructuring -----");

console.log("Patient Name :", patientName);
console.log("Age :", aGe);
console.log("Disease :", disease);
console.log("Doctor :", doctor);

//Task11

// Callback Function
function sendSMS() {

    console.log("SMS Sent To Customer");

}

// Main Function
function placeOrder(callback) {

    console.log("Order Placed Successfully");

    callback();

}

// Function Call
placeOrder(sendSMS);


//Task12

function* cashbackOffers() {

    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";

}

let offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);


//Task13

let employees=[
 {id:1,name:"Rahul",Salary:25000},
 {id:2,name:"Kavin",Salary:30000},
 {id:3,name:"John",Salary:40000}
]

let TotalSalary=0

for( let emp of employees){
    console.log(emp.name)

    TotalSalary+=emp.Salary

}
console.log(TotalSalary)

let Highest = employees[0]
for(let emp of employees){
if(emp.Salary>Highest.Salary){
    Highest=emp
}
}
console.log("Employee with highest salary:",Highest.name)


//Task15

let availableSeats = 50;

// Booking Function
function bookSeats(seatsRequired) {

    if (seatsRequired <= availableSeats) {

        availableSeats = availableSeats - seatsRequired;

        console.log("Booking Successful");
        console.log("Booked Seats :", seatsRequired);
        console.log("Remaining Seats :", availableSeats);

    } else {

        console.log("Booking Rejected");
        console.log("Only", availableSeats, "Seats Available");

    }
}

// Function Calls

bookSeats(10);

bookSeats(15);

bookSeats(30);


//Task15

// Products Object

let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

// Customer Selected Products

let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];

let totalAmount = 0;

console.log("Selected Products");

// Calculate Total Amount

for(let product of selectedProducts){

    console.log(product + " : ₹" + products[product]);

    totalAmount += products[product];

}

// GST Calculation

let gst = totalAmount * 18 / 100;

let finalBill = totalAmount + gst;

// Print Bill

console.log("Total Amount : " + totalAmount+"Rs");

console.log("GST (18%) : " + gst+"Rs");

console.log("Final Bill : " + finalBill+"Rs");




