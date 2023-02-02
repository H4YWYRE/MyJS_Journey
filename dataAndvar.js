// Using JS variables  02/02/23

// MAKE SURE YOU SAVE BEFORE RUNNING YOUR PROGRAM HERE!!!

// Texual data == Strings (text)


console.log('I love JS');

console.log("JS is fun");



// You can't have both double and single quotes in the same string. You can also use the ` marks for your strings.
// Semi-colons can be used, but can still run without them too. 

// NUMBERS 

// Integers are numbers and Float are decimals, if you add a ' (string) mark on the numbers, then the program will look the 
// same, but they will be seen as strings rather than integres or floats. 


console.log(30);

console.log(30.5);



// JAVASCRIPT VARIABLES 

// We use variables to store data. We use the 'let' variable declarator to declare 'langauge' as a variable and use the 
// '=' as the assigment to assign the variable name to the string 'javascript' for it to run. 


let language = 'javascript';

console.log(language);

let number = 5;

console.log(number);



var name = "jack";
console.log(name);
name = 'James';
console.log(name);



 // Var is a variable declaration, but it is very old and not used as much today, but remember 
// it is a variable declaration

// How to assign new data to the variable 


let firstName ='Carlos';

let lastName = 'Huerta';

firstName = lastName;

console.log(firstName);



// Const is a variable where its value is 'Constant', and you cannot change the value unlike 'let' and 'var'



const passportNumber = 399;

console.log(passportNumber);

passportNumber = 599; // You will get an error from running this. 



// JAVASCRIPT UNDEFINED, assigning without any value. 

let name; 

console.log(name); // This will run as 'undefined';



// But with Const, you need to provide an value if not then it will not run and will say
// Missing initializer in const declaration


//const name; 

//console.log(name);



// PRINT VARIABLE AND STRING IN SINGLE LINE 

let gameConsole = 'Xbox';

console.log('Console:' + gameConsole); // This will print out: Console: Xbox. Using the + operator adds the string and variable name


// Same thing happens when using console.log(`Console:${gameConsole}`); use backticks this is called Template literals 

// Here's an exmaple of how to use template literals. 



let city = "New York";

let kfclocations = 10;

console.log(`City: ${city}`, `KFC-locations:${kfclocations}`);


// VARIABLE NAMING CONVENTIONS 

// Canel notation e.g firstName, lastName, myAddress, etc

// Rules for notation: 

//1. You cannot create a variable with a space in between. 
//2. You cannot create a variable with a number in them e.g 12Last
//3.  You cannot create a variable with a  certain word e.g var var, let const = "Hello World";

 
