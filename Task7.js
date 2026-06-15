//Task1

let signal = "red";

switch(signal.toLowerCase()) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal Color");
}


//Task2

for( let i=1; i<=30;i++){
    console.log("Employee "+ i + " Present")
}

//Task3

let balance = 10000;

while(balance > 0){

    balance = balance - 500;

    console.log("Remaining Balance : ₹" + balance);

}

//Task4

let age = 19;
let percentage = 65
let entranceExamPassed = true;

if(age>=18){
    if(percentage>=70){
        if(entranceExamPassed){
            console.log("Admision Approved")
        }else{
            console.log("Admision Rejected")
            console.log("Reason: Entrance Exam Not Passed");
        }
    }else{
         console.log("Admision Rejected")
        console.log("Reason: Percentage Below 70");
    }
}else{
    console.log("Admision Rejected")
    console.log("Reason: Age Below 18")
}

//Task5

function deliveryStatus(customerName, foodItem, deliveryAddress) {

    console.log("Order Confirmed");
    console.log("Customer Name :", customerName);
    console.log("Food Item :", foodItem);
    console.log("Delivery Address :", deliveryAddress);
    console.log("Your order is on the way!");
}


deliveryStatus( "Prashant","Pizza","BTM Layout, Bangalore");


//Task6


function calculateSalary(basicSalary, hra, allowance) {

    let totalSalary = basicSalary + hra + allowance;

    return totalSalary;
}


function calculateBonus(salary) {

    let bonus = salary * 10 / 100;

    return bonus;
}


let salary = calculateSalary(25000, 5000, 2000);

let bonus = calculateBonus(salary);

console.log("Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", salary + bonus);


//Task7


function generateInvoice(finalAmount) {

    console.log("Invoice Generated");
    console.log("Final Amount : ₹" + finalAmount);

}


function applyDiscount(amount, callback) {

    let discount = amount * 10 / 100;

    let finalAmount = amount - discount;

    console.log("Original Amount : ₹" + amount);
    console.log("Discount : ₹" + discount);

    callback(finalAmount);

}


applyDiscount(5000, generateInvoice);


//Task8



function* promotionalOffers() {

    yield "10% OFF";

    yield "20% OFF";

    yield "Free Delivery";

    yield "Buy 1 Get 1";

}


let offers = promotionalOffers();

// Display Offers One By One

console.log(offers.next());

console.log(offers.next());

console.log(offers.next());

console.log(offers.next());

console.log(offers.next());



//Task9


let scienceStudents = [
    "Rahul",
    "Kiran",
    "John"
];

let commerceStudents = [
    "Priya",
    "Anjali",
    "Ravi"
];



let allStudents = [...scienceStudents, ...commerceStudents];

console.log("Science Students :", scienceStudents);

console.log("Commerce Students :", commerceStudents);

console.log("Merged Student Database :", allStudents);


//Task10


function calculateMarks(studentName, ...marks) {

    let total = 0;

    for(let mark of marks) {
        total += mark;
    }

    console.log("Student Name :", studentName);
    console.log("Total Marks :", total);

}

calculateMarks("Prashant", 85, 90, 78, 88, 92);


//Task11


let employee = {
    name: "Rahul",
    department: "Development",
    Salary: 50000,
    experience: 3
};


let { name, department, Salary, experience } = employee;


console.log("Name :", name);
console.log("Department :", department);
console.log("Salary :", Salary);
console.log("Experience :", experience + " Years");



//Task12

let products = [
    { name: "Mobile", price: 15000, category: "Electronics" },
    { name: "Headphone", price: 2000, category: "Electronics" },
    { name: "Laptop", price: 55000, category: "Electronics" },
    { name: "Smartwatch", price: 6000, category: "Electronics" }
];


let expensiveProducts = products.filter(function(product) {
    return product.price > 5000;
});

console.log(expensiveProducts);


//Task13

let customers = [
    { name: "Rahul", purchaseAmount: 25000 },
    { name: "Kiran", purchaseAmount: 45000 },
    { name: "John", purchaseAmount: 60000 },
    { name: "Priya", purchaseAmount: 80000 }
];


let premiumCustomer = customers.find(function(customer) {
    return customer.purchaseAmount > 50000;
});

console.log(premiumCustomer);


//Task14


let expenses = [12000, 8000, 15000, 5000, 10000];

let totalExpense = expenses.reduce(function(total, expense) {
    return total + expense;
}, 0);

console.log("Total Company Expense : ₹" + totalExpense);



//Task15


let players = [
    { name: "Rahul", age: 20 },
    { name: "Kiran", age: 25 },
    { name: "John", age: 19 },
    { name: "Priya", age: 22 }
];

// Check if all players are above 18

let result = players.every(function(player) {
    return player.age > 18;
});

console.log("All Players Eligible :", result);


//Task16


let candidates = [
    { name: "Rahul", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Kiran", skills: ["Java", "Spring Boot"] },
    { name: "John", skills: ["React", "Node.js"] },
    { name: "Priya", skills: ["Python", "Django"] }
];

let reactCandidate = candidates.some(function(candidate) {
    return candidate.skills.includes("React");
});

console.log("React Candidate Available :", reactCandidate);


//Task17


let mobileNumber = "9876543210";

if (
    mobileNumber.length === 10 &&
    (
        mobileNumber.startsWith("6") ||
        mobileNumber.startsWith("7") ||
        mobileNumber.startsWith("8") ||
        mobileNumber.startsWith("9")
    )
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}


//Task18


let title = "Learn JavaScript Complete Course";

let slug = title.toLowerCase().split(" ").join("-");

console.log(slug);


//Task19


let employees = [
    { name: "Rahul", salarY: 30000 },
    { name: "Kiran", salarY: 50000 },
    { name: "John", salarY: 25000 },
    { name: "Priya", salarY: 45000 }
];

// Highest to Lowest

let highToLow = [...employees];

highToLow.sort(function(a, b) {
    return b.salarY - a.salarY;
});

console.log("Highest to Lowest Salary");
console.log(highToLow);

// Lowest to Highest

let lowToHigh = [...employees];

lowToHigh.sort(function(a, b) {
    return a.salarY - b.salarY;
});

console.log("Lowest to Highest Salary");
console.log(lowToHigh);


//Task20


let movies = [
    "Leo",
    "Jailer",
    "Vikram",
    "Master"
];

let bookingIds = movies.map(function(movie, index) {
    return "BOOK" + (index + 1);
});

console.log("Movies :", movies);
console.log("Booking IDs :", bookingIds);


