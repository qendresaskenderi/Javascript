//----example 1----
//Write a program that requests a number from a user 
//and finds the summation of every number from 1 to num. 
//For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

//let number = prompt("Write a number: ");


//----2----
//Request two numbers and find only their largest common divisor.

/*let gcd;

const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

for (let i = 1; i <= number1 && i <= number2; i++) {
    if( number1 % i == 0 && number2 % i == 0) {
        gcd = i;
    }
}8

alert("GCD of " +number1+ " and " + number2 + " is: " +gcd);*/

//----3----
//Request a number and display all the divisors of it. 
//For example, for number 8 it would be 2, 4, and 8.

   /*let number = prompt("Enter required number :");
     
      for(let i = 28; i<=number; i++) {
         if(number % i == 0) {
            console.log(" "+i);
         }
      }
      */
      

//----4----
//Define the number of digits in a requested number. 
//For example, there are 4 digits in the number 6834.

/*let count = 0;
let number = prompt("Write a number: "); 

    while (number != 0) {
        number = Math.floor(number / 10);
        ++count;
    }
console.log("Number of digits: " + count);
*/

//----5----
//Request 10 numbers from a user and count, how many are positive, negative, or zero.
// Also, count odd and even. Display the statistics. 
//There’s only one variable (not 10) needed for input by a user. 

 /*let positive = 0;
 let negative = 0;
 let zero = 0;
 let even = 0;
 let odd = 0;
 for (let i = 0; i < 10; i++) {
     let number = prompt("Enter a number: ");
     
     if(number > 0){
         positive++;
     }else if(number < 0){
         negative++
     }else{
         zero++;
     }
     if(number % 2 == 0){
         even++;
     }else{
         odd++;
     }
 }
 console.log(`${negative} numbers are positive`);
 console.log(`${positive} numbers are negative`);
 console.log(`${zero} numbers are zero`);
 console.log(`${even} numbers are even`);
 console.log(`${odd} numbers are odd`);
*/

 //----6----
//Loop a calculator. Request 2 numbers and a sign, solve the problem,
// display the result and ask if the user wants one more. The loop continues until the user refuses. 

/*let num = 1;
 for (let i = 0; i < num; i++) {
     let number1 = prompt("Enter the first number: ");
     let number2 = prompt("Enter the second number: ");
     let sign = prompt("Enter an arithmetic operation sign");
     alert(` ${number1} ${sign} ${number2} ` + eval(number1+sign+number2));
     let Continue = confirm("More?");
     if (Continue === true) {
         num++;
     }
 }
*/

//----7----
//Request a number from a user and ask by how many digits to move it.
// Move the digits and display the result 
//(if the number 123456 needs to be moved by 2 digits, the result will be 345612).

/*let number = prompt("Enter a number: ");
let MovedDigits = prompt("How many digits do you want to move: ");
let result = number.substring(MovedDigits, number.length) + number.substring(0,MovedDigits);
console.log(`${number} with ${MovedDigits} moved digits: ` + result);
*/

//----8----
//Loop day input like this: «Day of the week. Would you like to see
// the next one?» which continues as long as the user clicks OK.

//----9----
//Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
         console.log(`${i}*${j}=${i*j}`)
    }
}

//----10----
//“Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess 
//it in the following way: every loop iteration needs to divide the range of numbers in half, 
//you represent the result as N and ask the user “Your number > N, < N or == N?” 
//Depending on what the user said, narrow down the range. So the starting range is 0 to 100, 
//divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, 
//until the user chooses == N. 

