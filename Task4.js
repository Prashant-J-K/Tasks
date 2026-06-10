//Task1

let age = Number(prompt("Enter your age"));
if(age >= 0 && age <= 12) {
    console.log("Child");
}
else if(age<=19) {
    console.log("Teenager");
}
else if(age<=59) {
    console.log("Adult");
}
else {
    console.log("Senior Citizen");
}


// Task2

let salary = 10000

let hike = 0;

if(salary < 20000){
    hike = salary * 20 / 100;
}                                          // Hike : 2000
else if(salary <= 50000){
    hike = salary * 10 / 100;         
}
else{
    hike = salary * 5 / 100;
}

console.log("Old Salary :", salary);                  // Old Salary : 10000
console.log("New Salary :", salary + hike);            // New Salary : 12000


// Task3

let units = 105

let bill;

if(units <= 100){
    bill = units * 5;            
}
else if(units>=101 && units <= 200){      
    bill = units * 7;                         // Electricity Bill : 735
}
else{
    bill = units * 10;
}

console.log("Electricity Bill :", bill);       // Electricity Bill : 735


// Task4

let balance = 10000;

let amount = Number(prompt("Enter Withdrawal Amount"));

if(amount <= balance){
    balance -= amount;           //balance = 5000

    console.log("Withdrawal Successful");
    console.log("Remaining Balance :", balance);   // Remaining Balance : 5000
}
else{
    console.log("Insufficient Funds");
}


// Task5

let username = "admin"
let password = "12345"

if(username === "admin" && password === "12345"){
    console.log("Login Successful");                         // Login Successful
}
else{
    console.log("Invalid Credentials");
}

// Task6

let recharge = Number(prompt("Enter Recharge Amount"));    // Enter Recharge Amount : 500

if(recharge >= 499){
    console.log("Netflix Offer");                     // Netflix Offer
}
else if(recharge >= 299){
    console.log("2GB Extra Data");
}
else{
    console.log("No Offer");
}


// Task7

let color = prompt("Enter Signal Color");    // Enter Signal Color : Red

switch(color){

    case "Red":
        console.log("Stop");
        break;                                // Stop

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Color");
}


// Task8

let workingDays = Number(prompt("Enter Working Days"));         // Enter Working Days : 20
let presentDays = Number(prompt("Enter Present Days"));         // Enter Present Days : 18

let percentage = (presentDays / workingDays) * 100;               // Attendance : 90

console.log("Attendance:",percentage +"%");                  // Attendance : 90%
 
if(percentage >= 75){
    console.log("Eligible");                                   // Eligible
}
else{
    console.log("Not Eligible");
}


// Task9

let ticketPrice = 500;

let tickets = Number(prompt("Enter Number of Tickets"));       // Enter Number of Tickets : 5

let total = ticketPrice * tickets;

let gst = total * 5 / 100;

let finalAmount = total + gst;

console.log("Total Amount :", total);
console.log("GST :", gst);
console.log("Final Amount :", finalAmount);            // Total Amount : 2500    // GST : 125    // Final Amount : 2625


// Task10

let Bill = Number(prompt("Enter Food Cost"));          // Enter Food Cost : 2500

let discount = 0;     

if(Bill > 2000){
    discount = Bill * 10 / 100;                        // Discount : 250
}

let finalBill = Bill - discount;
console.log("Discount :", discount);                  // Discount : 250
console.log("Final Bill :", finalBill);               // Final Bill : 2250


// Task11

let Age = 20;
let height = 150;
let weight = 60;

if(Age >= 18){
    if(height >= 160){

        if(weight >= 55){
            console.log("Selected");              
        }
        else{
            console.log("Rejected: Weight Less Than 55");
        }
                                                               
    }
    else{
        console.log("Rejected: Height Less Than 160");               // Rejected: Height Less Than 160
    }

}
else{
    console.log("Rejected: Age Less Than 18");
}

// Task12

let s1 = 80;
let s2 = 75;
let s3 = 90;
let s4 = 85;
let s5 = 70;

let Total = s1+s2+s3+s4+s5;

let Percentage = Total / 5;

console.log("Total :", Total);                        // Total : 400
console.log("Percentage :", Percentage);              // Percentage : 80

if(Percentage >= 90){
    console.log("Grade A+");
}
else if(Percentage >= 80){
    console.log("Grade A");                     // Grade A
}
else if(Percentage >= 70){
    console.log("Grade B");
}
else if(Percentage >= 60){
    console.log("Grade C");
}
else{
    console.log("Fail");
}


// Task13

let time = Number(prompt("Enter Time"));                 // Enter Time : 10

if(time >= 6 && time < 14){
    console.log("Morning Shift");
}                                                     // Morning Shift
else if(time >= 14 && time < 22){
    console.log("Afternoon Shift");
}
else{
    console.log("Night Shift");
}

// Task14

let aGe = 25;
let salarY = 30000;
let experience = 3;

if(aGe >= 21 &&salarY >= 25000 &&experience >= 2){

    console.log("Eligible");
}                                           // Eligible
else{
    console.log("Not Eligible");
}

// Task15

let distance = Number(prompt("Enter Distance"));               // Enter Distance : 8

let fare;

if(distance <= 5){
    fare = distance * 20;                      
}
else{
    fare = (5 * 20) + ((distance - 5) * 15);
}                                                              // Fare : 145

console.log("Fare :", fare);


// Task16

let num = Number(prompt("Enter Number"));      // Enter Number : 5

for(let i=1;i<=10;i++){

    console.log( num + " x " + i + " = " + (num*i) )            // 5 x 1 = 5         // 5 x 2 = 10        // 5 x 3 = 15          // 5 x 9 = 45        // 5 x 10 = 50);
   }                                                         // 5 x 4 = 20        // 5 x 5 = 25        // 5 x 6 = 30        // 5 x 7 = 35        // 5 x 8 = 40   




//Task17

let Password = prompt("Enter Password");       // sjakhv

let len = Password.length;                     //len=6

if(len < 6){
    console.log("Weak");
}
else if(len <= 10){
    console.log("Medium");                      //Medium
}
else{
    console.log("Strong");
}


//Task18


let Experience = 4;
let sAlary = 30000;

let bonus = 0;

if(Experience <= 2){
    bonus = sAlary * 5 / 100;
}
else if(Experience <= 5){
    bonus = sAlary * 10 / 100;       //bonus=3000
}
else{
    bonus = sAlary * 20 / 100;
}

console.log("Bonus :", bonus);       //Bonus:3000


//Task19

let count = 10;

while(count >= 1){

    console.log(count);

    count--;
}

console.log("Happy New Year");


//Task20

let degreeCompleted = true;
let communication = "Good";
let technicalScore = 75;

if(degreeCompleted){

    if(communication === "Good"){

        if(technicalScore >= 70){
            console.log("Selected");                                  //Selected
        }
        else{
            console.log("Rejected: Technical Score Below 70");
        }

    }
    else{
        console.log("Rejected: Communication Not Good");
    }

}
else{
    console.log("Rejected: Degree Not Completed");
}
