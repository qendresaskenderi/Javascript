//----1----
//Request a three-digit number from a user and 
//check whether it has identical digits in it.

 /*let number = prompt("Write a three digit number: ");
 let first = parseInt(number / 100);
 let second = parseInt((number % 100) / 10);
 let third = number % 10;
 let maxIdenticalDigits = 3;
 let identicalDigits = null;
 
 (first == second) ? identicalDigits++ : maxIdenticalDigits--;
 (first == third) ? identicalDigits++ : maxIdenticalDigits--;
 maxIdenticalDigits == 1 ? (identicalDigits = 0) : identicalDigits = maxIdenticalDigits;
 console.log(`Number ${number} has ${identicalDigits} identical digits`);

*/

//----2----
//Request a five-unit number from a user and check whether it is a palindrome.

 /*let number = prompt("Write a five digit number: ");
 let first = parseInt(number / 10000);
 let second = parseInt((number % 10000) / 1000);
 let fourth = parseInt((number % 100) / 10);
 let fifth = number % 10;
 let result = (first == fifth && second == fourth) ? "is a palindrome" : "is not a palindrome";
 console.log(`The number ${number} ${result}`);
*/

//----3----
//Execute a currency converter. A user puts in USD, 
//chooses a currency (EUR, SEK, AUD etc.) and gets the result. 

 /*let usd = prompt("Write the value in USD: ");
 let currency = prompt("Choose currency: ");
 let result = (currency == "EUR") ? (parseFloat(usd) * 0.84)
              :(currency == "SEK") ? (parseFloat(usd) * 8.49)
              :(currency == "AUD") ? (parseFloat(usd) * 1.29)
              : 0.0;
 console.log(`USD value ${usd} converted to ${currency} is ${result}`);

*/

//----4----
//Request a length of a circumference and a perimeter 
//of a square from a user. Define whether that circumference can fit in that square.

let circumference = prompt("Write a length for a circumference: ");
let SquarePerimeter = prompt("Write a perimeter for a square: ");
const PI = 3.14159265359;
let DoublePI = PI*2;
let radius = circumference / DoublePI;
let SquareLength = Math.sqrt(SquarePerimeter);
let result = (parseFloat(SquareLength) == parseFloat(2.0 * radius)) ? "The circumference can fit in that square" : "The circumference can't fit in that square";
console.log(result);


//----5----
//Request a date (dd:mm:yy) and put out the one that goes after it. 
//Pay attention to the start of a new month, new year, and also leap years.
