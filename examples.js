//----1----
//Write a function that accepts 2 numbers and returns -1 
//if the first one is smaller than the second, 
//1 if it is vice versa, and 0 if they are equal.


/*let number1 = prompt("Write the first number: ");
let number2 = prompt("Write the second number: ");

function compare(nr1,nr2){
    if(nr1 < nr2){
        return -1;
    }
    else if(nr2 > nr1){
        return 1;
    }
    else{
        return 0;
    }
}

console.log(compare(number1,number2));
*/

//----2----
//Write a function that counts the factorial of a given number. 

/*let number = prompt("Write a number: ");

function countFactorial(nr){
    let factor = 1;
    for(var i = nr; i>=1 ; i--){
        factor *= i;
    }
    return factor;
}

factor = countFactorial(number);
console.log(`Factorial of ${number} is ${factor}`);
*/

//----3----
//Write a function that accepts three separate digits
// and makes them a number. For example, 1, 4, and 9
// will become 149.

/*let digit1 = prompt("write the first digit: ");
let digit2 = prompt("write the second digit: ");
let digit3 = prompt("write the third digit: ");

function number(dig1,dig2,dig3){
    let nr = dig1+dig2+dig3;
    return nr;
}

let result = number(digit1,digit2,digit3);
console.log(`Your number is ${result}`);
*/

//----4----
//Write a function that accepts the width and length
// of a rectangle and calculates its area. 
//If there is only one parameter given, it counts as a square. 


//----5----
//Write a function that checks if the given number is perfect. 
//A perfect number is a number equal to the sum of all its divisors. 
//For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

/*let number = prompt("write a number: ");

function check(nr) {
    let sum = 0;
    for (let i = 1; i < nr; i++) {
        if (nr % i == 0) {
             sum += i;
        }
    }
    return sum == nr ? 'the number is Perrfecto' : 'the number is not perfect';
}

console.log(check(number));
 */
 
//----6----
//Write a function that accepts the min and max values of a range, 
//and only puts out the perfect numbers within that range. 
//Use the previous function to check, if numbers are perfect. 
    

//----7----
//Write a function that accepts time (hours, minutes, seconds)
// and returns a string in the format hh:mm:ss. 
//If the seconds are not given, they should be displayed as 00.

/*let hours = prompt("write nr of hours: ");
let minutes = prompt("write nr of minutes: ");
let seconds = prompt("write nr of seconds: ");

function convert(hr,min,sec){

    if(sec === "")
    {
        return hr + "" + "hr " + min + "" + "min " + "00" + "" + "sec";
    }
    else{
        return hr + "" + "hr " + min + "" + "min " + sec + "" + "sec";
    }
}

console.log(convert(hours,minutes,seconds));
*/

//----8----
//Write a function that accepts hours, minutes, and seconds 
//and returns that time only in seconds. 
//For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

/*let hours = prompt("Write number of hours: ");
let minutes = prompt("Write number of minutes: ");
let seconds = prompt("Write number of seconds: ");
function ConvertSeconds(hr, min, sec) {
    let h = hr * 3600;
    let m = min * 60;
    let result = parseInt(h) + parseInt(m) + sec + "seconds";
    return result;
 }
 
console.log(ConvertSeconds(hours, minutes, seconds));
*/

//----9----
//Write a function that accepts the number of seconds,
//translates it into hours, minutes, and seconds, 
//and returns as a hh:mm:ss string.

let number = prompt("write the number of seconds you want to convert: ");

function ConvertSec(nr) {
    
    var hour = parseInt(nr / 3600);

    nr %= 3600;
    var minutes = nr / 60;

    nr %= 60;
    var seconds = nr;

    return hour + " " + "hours "
           + minutes.toFixed() + " " + "minutes " +
           seconds.toFixed() + " " + "seconds ";
}

console.log(ConvertSec(number));
