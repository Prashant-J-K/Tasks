//Task1

const students = [
    { id: 1, name: "Rahul", department: "CSE", mark: 95 },
    { id: 2, name: "Anu", department: "ECE", mark: 82 },
    { id: 3, name: "Kiran", department: "MECH", mark: 74 },
    { id: 4, name: "Priya", department: "CIVIL", mark: 48 },
    { id: 5, name: "Ajay", department: "CSE", mark: 67 }
];

// Display names
console.log("Student Names:");                    //Student Names:
for (let student of students) {
    console.log(student.name);                   //Rahul,Anu,Kiran,Priya,Ajay
}

// Total marks
let totalMarks = 0;
for (let student of students) {
    totalMarks += student.mark;
}
console.log("Total Marks:", totalMarks);      //  Total Marks: 366                         
                                                                         



// Above 80
console.log("Students Above 80:");         // Students Above 80:
for (let student of students) {
    if (student.mark > 80) {
        console.log(student.name);             //Rahul,Anu
    }
}

// Grade
function getGrade(mark) {                               
    if (mark >= 90) {
        return "A";
    } else if (mark >= 75) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}

//Print details
function printStudentDetails(student) {
    console.log(
        student.id,
        student.name,
        student.department,
        student.mark,
        getGrade(student.mark)
    );
}

console.log("Student Details:");                   //  1 'Rahul' 'CSE' 95 'A'
  for (let student of students) {                  //  2 'Anu' 'ECE' 82 'B'
    printStudentDetails(student);                  //  3 'Kiran' 'MECH' 74 'C'
}                                                  //  4 'Priya' 'CIVIL' 48 'Fail'                     
                                                   //  5 'Ajay' 'CSE' 67 'C'           
           
                                                   

//Task2

const employees = [
    { id: 1, name: "Ravi", salary: 45000, department: "IT" },
    { id: 2, name: "Meena", salary: 28000, department: "HR" },
    { id: 3, name: "Arun", salary: 35000, department: "FINANCE" },
    { id: 4, name: "Sneha", salary: 50000, department: "IT" },
    { id: 5, name: "Karthik", salary: 25000, department: "ADMIN" }
];

// Employee names
console.log("Employee Names:");             //Employees Names:
for (let emp of employees) {
    console.log(emp.name);                  //Ravi , Meena , Arun , Sneha , Karthik
}

// Total salary expense
let totalSalary = 0;
for (let emp of employees) {
    totalSalary += emp.salary;
}
console.log("Total Salary Expense:", totalSalary);    //Total Salary Expense: 183000

// Salary above 30000
console.log("Employees earning above 30000:");       //Employees earning above 30000:
for (let emp of employees) {
    if (emp.salary > 30000) {
        console.log(emp.name);    //Ravi , Arun , Sneha
    }
}

// Department description
function departmentDescription(dept) {
    switch (dept) {
        case "IT":
            return "Technology Department";
        case "HR":
            return "Human Resources";
        case "FINANCE":
            return "Finance Department";
        case "ADMIN":
            return "Administration";
        default:
            return "Unknown Department";
    }
}

// Callback
function generatePayrollReport(employee, callback) {
    callback(employee);
}

function payrollDetails(employee) {
    console.log(
        employee.name,
        employee.salary,
        departmentDescription(employee.department)
    );
}

console.log("Payroll Report:");
for (let emp of employees) {                 
    generatePayrollReport(emp, payrollDetails);
}
     

//Task3


const foods = [
    { id: 1, foodName: "Pizza", price: 350, category: "FASTFOOD" },
    { id: 2, foodName: "Burger", price: 180, category: "FASTFOOD" },
    { id: 3, foodName: "Biryani", price: 250, category: "MAINCOURSE" },
    { id: 4, foodName: "Ice Cream", price: 120, category: "DESSERT" },
    { id: 5, foodName: "Paneer Tikka", price: 300, category: "STARTER" }
];

// Food names
console.log("Food Names:");
for (let food of foods) {
    console.log(food.foodName);
}

// Total menu value
let totalValue = 0;
for (let food of foods) {
    totalValue += food.price;
}
console.log("Total Menu Value:", totalValue);

// Foods above 200
console.log("Foods Above 200:");
for (let food of foods) {
    if (food.price > 200) {
        console.log(food.foodName);
    }
}

// Category description
function categoryDescription(category) {
    switch (category) {
        case "FASTFOOD":
            return "Quick Snacks";
        case "MAINCOURSE":
            return "Main Meal";
        case "DESSERT":
            return "Sweet Dish";
        case "STARTER":
            return "Appetizer";
        default:
            return "Unknown Category";
    }
}

for (let food of foods) {
    console.log(
        food.foodName,
        categoryDescription(food.category)
    );
}

// Callback
function placeOrder(foodItem, callback) {
    callback(foodItem);
}

function orderConfirmation(foodItem) {
    console.log(
        "Order Confirmed for:",
        foodItem.foodName
    );
}

placeOrder(foods[0], orderConfirmation);


//Task4


const movies = [
    { movieName: "Leo", ticketPrice: 200, availableSeats: 50, language: "TAMIL" },
    { movieName: "KGF", ticketPrice: 250, availableSeats: 0, language: "KANNADA" },
    { movieName: "Pushpa", ticketPrice: 180, availableSeats: 30, language: "TELUGU" }
];

console.log("Movie Names:");
for (let movie of movies) {
    console.log(movie.movieName);
}

let totalSeats = 0;
for (let movie of movies) {
    totalSeats += movie.availableSeats;
}
console.log("Total Available Seats:", totalSeats);

for (let movie of movies) {
    if (movie.availableSeats > 0) {
        console.log(movie.movieName, "- Booking Possible");
    } else {
        console.log(movie.movieName, "- House Full");
    }
}

function languageDescription(language) {
    switch (language) {
        case "TAMIL":
            return "Tamil Movie";
        case "KANNADA":
            return "Kannada Movie";
        case "TELUGU":
            return "Telugu Movie";
        default:
            return "Other Language";
    }
}

function bookTicket(movie, callback) {
    callback(movie);
}

function bookingConfirmation(movie) {
    console.log("Ticket Confirmed for", movie.movieName);
}

bookTicket(movies[0], bookingConfirmation);


//Task5

const patients = [
    { patientId: 1, patientName: "Ramesh", age: 65, disease: "HEART" },
    { patientId: 2, patientName: "Priya", age: 45, disease: "ORTHO" },
    { patientId: 3, patientName: "Suresh", age: 72, disease: "NEURO" },
    { patientId: 4, patientName: "Divya", age: 30, disease: "ENT" }
];

console.log("Patient Names:");
for (let patient of patients) {
    console.log(patient.patientName);
}

console.log("Total Patients:", patients.length);

console.log("Patients Above Age 60:");
for (let patient of patients) {
    if (patient.age > 60) {
        console.log(patient.patientName);
    }
}

function diseaseDepartment(disease) {
    switch (disease) {
        case "HEART":
            return "Cardiology";
        case "ORTHO":
            return "Orthopedics";
        case "NEURO":
            return "Neurology";
        case "ENT":
            return "ENT Department";
        default:
            return "General";
    }
}

for (let patient of patients) {
    console.log(patient.patientName, "-", diseaseDepartment(patient.disease));
}

function appointment(patient, callback) {
    callback(patient);
}

function appointmentConfirmation(patient) {
    console.log("Appointment Confirmed for", patient.patientName);
}

appointment(patients[0], appointmentConfirmation);


//Task6


const books = [
    { bookId: 1, bookName: "JavaScript", author: "John", price: 700, category: "PROGRAMMING" },
    { bookId: 2, bookName: "Python", author: "Mike", price: 650, category: "PROGRAMMING" },
    { bookId: 3, bookName: "History", author: "David", price: 400, category: "EDUCATION" }
];

console.log("Book Names:");
for (let book of books) {
    console.log(book.bookName);
}

let totalBookValue = 0;
for (let book of books) {
    totalBookValue += book.price;
}
console.log("Total Book Value:", totalBookValue);

console.log("Books Above 500:");
for (let book of books) {
    if (book.price > 500) {
        console.log(book.bookName);
    }
}

function categoryDescription(category) {
    switch (category) {
        case "PROGRAMMING":
            return "Technical Book";
        case "EDUCATION":
            return "Educational Book";
        default:
            return "General Book";
    }
}

function issueBook(bookId) {
    console.log("Book Issued Successfully. ID:", bookId);
}

issueBook(1);


//Task7


const products = [
    { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
    { productId: 2, productName: "Mouse", price: 800, stock: 20 },
    { productId: 3, productName: "Keyboard", price: 1500, stock: 8 }
];

console.log("Products:");
for (let product of products) {
    console.log(product.productName);
}

let inventoryValue = 0;
for (let product of products) {
    inventoryValue += product.price * product.stock;
}
console.log("Inventory Value:", inventoryValue);

console.log("Stock Less Than 10:");
for (let product of products) {
    if (product.stock < 10) {
        console.log(product.productName);
    }
}

for (let product of products) {
    if (product.stock === 0) {
        console.log(product.productName, "- Out Of Stock");
    } else if (product.stock < 10) {
        console.log(product.productName, "- Low Stock");
    } else {
        console.log(product.productName, "- In Stock");
    }
}

function generateReport(product, callback) {
    callback(product);
}

function report(product) {
    console.log(product.productName, product.stock);
}

for (let product of products) {
    generateReport(product, report);
}


//Task8

const applicants = [
    { name: "Ajay", age: 19, percentage: 75, department: "CSE" },
    { name: "Kiran", age: 17, percentage: 85, department: "ECE" },
    { name: "Priya", age: 20, percentage: 58, department: "MECH" },
    { name: "Divya", age: 18, percentage: 90, department: "CSE" }
];

console.log("Applicant Names:");
for (let applicant of applicants) {
    console.log(applicant.name);
}

let eligibleCount = 0;

for (let applicant of applicants) {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        eligibleCount++;
        console.log(applicant.name, "- Eligible");
    } else {
        console.log(applicant.name, "- Not Eligible");
    }
}

console.log("Eligible Students:", eligibleCount);

function departmentName(dept) {
    switch (dept) {
        case "CSE":
            return "Computer Science";
        case "ECE":
            return "Electronics";
        case "MECH":
            return "Mechanical";
        default:
            return "Other Department";
    }
}

function admissionResult(applicant, callback) {
    callback(applicant);
}

function result(applicant) {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(applicant.name, "- Admission Granted");
    } else {
        console.log(applicant.name, "- Admission Rejected");
    }
}

for (let applicant of applicants) {
    admissionResult(applicant, result);
}


//Task9


const passengers = [
    { passengerId: 1, name: "Rahul", seatNumber: 1, ticketPrice: 500, busType: "AC" },
    { passengerId: 2, name: "Anu", seatNumber: 2, ticketPrice: 500, busType: "AC" },
    { passengerId: 3, name: "Kiran", seatNumber: 5, ticketPrice: 300, busType: "NONAC" }
];

console.log("Passenger Names:");
for (let passenger of passengers) {
    console.log(passenger.name);
}

let totalCollection = 0;
for (let passenger of passengers) {
    totalCollection += passenger.ticketPrice;
}
console.log("Total Collection:", totalCollection);

console.log("Occupied Seats:");
for (let passenger of passengers) {
    console.log(passenger.seatNumber);
}

function busDescription(type) {
    switch (type) {
        case "AC":
            return "Air Conditioned Bus";
        case "NONAC":
            return "Non AC Bus";
        default:
            return "Other Bus";
    }
}

function ticketBooking(passenger, callback) {
    callback(passenger);
}

function ticketConfirmation(passenger) {
    console.log(
        "Ticket Confirmed:",
        passenger.name,
        "Seat:",
        passenger.seatNumber
    );
}

for (let passenger of passengers) {
    ticketBooking(passenger, ticketConfirmation);
}


//Task10

const mobiles = [
    { brand: "Samsung", model: "A55", price: 35000, stock: 10 },
    { brand: "Apple", model: "iPhone 15", price: 75000, stock: 5 },
    { brand: "Redmi", model: "Note 13", price: 18000, stock: 15 }
];

console.log("Mobile Names:");
for (let mobile of mobiles) {
    console.log(mobile.brand + " " + mobile.model);
}

let stockValue = 0;
for (let mobile of mobiles) {
    stockValue += mobile.price * mobile.stock;
}
console.log("Total Stock Value:", stockValue);

console.log("Mobiles Above 20000:");
for (let mobile of mobiles) {
    if (mobile.price > 20000) {
        console.log(mobile.brand, mobile.model);
    }
}

function brandCategory(brand) {
    switch (brand) {
        case "Apple":
            return "Premium Brand";
        case "Samsung":
            return "Flagship Brand";
        case "Redmi":
            return "Budget Brand";
        default:
            return "Other Brand";
    }
}

for (let mobile of mobiles) {
    console.log(
        mobile.brand,
        "-",
        brandCategory(mobile.brand)
    );
}

function salesReport(mobile, callback) {
    callback(mobile);
}

function report(mobile) {
    console.log(
        mobile.brand,
        mobile.model,
        "Stock:",
        mobile.stock
    );
}

for (let mobile of mobiles) {
    salesReport(mobile, report);
}
                                                      
                                                      



