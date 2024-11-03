// 1. Write a JavaScript program to display the current day and time in the following format.  Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38

function getDateAndTime() {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `Today is ${days[date.getDay()]}. Current time is : ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

// 2. Write a JavaScript program to print the current window contents.

function printWindow() {
    window.print();
}

// 3. Write a JavaScript program to get the current date.

function getCurrentDate() {
    const date = new Date();
    return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
}

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

function getArea() {
    const a = 5;
    const b = 6;
    const c = 7;
    const p = a + b + c;
    const S = Math.sqrt(p / 2 * (p / 2 - a) * (p / 2 - b) * (p / 2 - c));
    return S;
}

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

function rotateString(str) {
    const lastChar = str.at(-1);
    const restStr = str.slice(0, -1);
    return lastChar + restStr;
} 

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

function isSunday() {
    const years = [];
    for (let i = 2014; i < 2051; i++) {
        const date = new Date(i, 0, 1);
        if (date.getDay() === 0) {
            years.push(i);
        }
    }
    return years;
}

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

const readline = require('readline');

function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Guess the number between 1 and 10: ', (input) => {
        const userGuess = parseInt(input, 10);

        if (userGuess === randomNumber) {
            console.log('Good Work');
        } else {
            console.log(`Not matched. The correct number was ${randomNumber}.`);
        }

        rl.close();
    });
}

// 9. Write a JavaScript program to calculate the days left before Christmas.  

function daysLeftChristmas() {
    const christmasDay = new Date(2025, 0, 1);
    const today = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.ceil((christmasDay - today) / msPerDay);

    return `Days left: ${daysLeft}`;
}

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

function multiplyAndDivide() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let firstNumber;
    let secondNumber;

    rl.question('Input first number: ', (firstInput) => {
        const firstNumber = parseInt(firstInput, 10);

        rl.question('Input second number: ', (secondInput) => {
            const secondNumber = parseInt(secondInput, 10);

            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);

            rl.close();
        });
    });
}

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]Expected Output :60°C is 140 °F 45°F is 7.222222222222222°C

function convertFarenheitToCelsius(temperature) {
    return 5 * (temperature - 32) / 9;
}

function convertCelsiusToFarenheit(temperature) {
    return 9 * temperature / 5 + 32;
}

// 12. Write a JavaScript program to get the website URL (loading page).  
function getWebsiteUrl() {
    return document.URL;
}

// 13. Write a JavaScript exercise to create a variable using a user-defined name.  

function createVariable(variableName, value) {
    const variables = {};
    variables[variableName] = value;
    return variables;
}

// 14. Write a JavaScript exercise to get the filename extension.  

function getFileExtension(fileName) {
    const indexOfDot = fileName.lastIndexOf('.');
    return fileName.slice(indexOfDot + 1);
}

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  

function difference(num) {
    if (num > 13) {
        return 2 * (num - 13);
    } 
    return 13 - num;
}

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

function getSum(num1, num2) {
    let sum = num1 + num2;
    if (num1 === num2){
        sum *= 3;
    }
    return sum;
}

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  

function difference19(num) {
    if (num > 19) {
        return 3 * (num - 19);
    }
    return 19 - num;
}

// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

function checkPair(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    }
    return false;
}

// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function checkNumber(num) {
    if ((num >= 80 && num <= 120) || (num >= 380 && num <= 420)) {
        return true;
    }
    return false;
}

// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function checkPositiveAndNegative(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    }
    return false;
}

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

function addPy(str) {
    if (str.startsWith('Py')) {
        return str;
    }
    return 'Py' + str;
}

// 22.  Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

function removeChar(str, pos) {
    return str.slice(0, pos) + str.slice(pos + 1);
}

// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  

function changePositions(str) {
    if (str.length < 2) {
        return str;
    }
    const firstChar = str.at(0);
    const lastChar = str.at(-1);
    return lastChar + str.slice(1, -1) + firstChar;
}

// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

function getAnotherString(str) {
    const firstChar = str.at(0);
    return firstChar + str + firstChar;
}

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
 
function isMultiple(num) {
    if ( num % 3 === 0 || num % 7 === 0 ) {
        return true;
    }
    return false;
}

// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  

function createString(str) {
    if (str.length < 3) {
        return str;
    }
    const lastChars = str.slice(-3);
    return lastChars + str + lastChars;
}

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

function startsWithJava(str) {
    if (str.startsWith('Java')) {
        return true;
    }
    return false;
}

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  

function checkRange(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
        return true;
    }
    return false;
}

// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

function checkRanges(num1, num2, num3) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num2 <= 99)) {
        return true;
    }
    return false;
}

// 30. Write a JavaScript program to check whether a string " Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function containScript(str) {
    const index = str.indexOf('Script');
    if (index !== 4) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + 6);
}

// 31. Write a JavaScript program to find the largest of three given integers.  

function largest(num1, num2, num3) {
    let largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}

// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.  

function closest100(num1,  num2) {
    if (Math.abs(num1 - 100) < Math.abs(num2 - 100)) {
        return num1;
    }
    return num2;
}

// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

function checkRangeTwoNumbers(num1, num2) {
    if(((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))) {
        return true;
    }
    return false;
}

// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  

function largestFromTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  

function checkChar(char, str) {
    return str[1] === char || str[2] === char || str[3] === char;
}

// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  

function sameLastDigit(num1, num2, num3) {
    const a = num1 % 10;
    const b = num2 % 10;
    const c = num3 % 10;
    if (a === b && a === c) {
        return true;
    }
    return false;
}

// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

function lowerCase(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    return str.slice(0, 3).toLowerCase() + str.slice(3);
}

// 38. Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
// If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

function isGrade(totalMarks, isExam) {
    let isGrade = false;
    if (totalMarks >= 89 && totalMarks <= 100) {
        isGrade = true;
    }
    if (isExam) {
        if (totalMarks >= 90 && totalMarks <= 100) {
            isGrade = true;
        }
    }
    return isGrade;
}

// 39.  Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.  

function sumOfTwoIntegers(num1, num2) {
    let sum = num1 + num2;
    if (sum >= 50 && sum <= 80) {
        return 65;
    }
    return 80;
}

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  

function isEight(num1, num2) {
    if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
        return true;
    }
    return false;
}

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  

function checkThreeNumbers(num1, num2, num3) {
    if (num1 === num2 && num1 === num3) {
        return 30;
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        return 40;
    }
    return 20;
}

// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
//Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31