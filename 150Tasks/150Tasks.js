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

const { realpathSync } = require('fs');
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
    if (num1 === num2) {
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
    if (num % 3 === 0 || num % 7 === 0) {
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

function closest100(num1, num2) {
    if (Math.abs(num1 - 100) < Math.abs(num2 - 100)) {
        return num1;
    }
    return num2;
}

// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

function checkRangeTwoNumbers(num1, num2) {
    if (((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))) {
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

function strictOrSoft(num1, num2, num3) {
    if (num2 > num1 && num3 > num2) {
        return 'strict mode';
    } else if ((num2 >= num1 && num3 >= num2) || (num2 <= num1 && num3 >= num2) || (num2 >= num1 && num3 >= num1)) {
        return 'soft mode';
    }
    return 'neither';
}

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  

function haveSameRigthmostDigit(num1, num2, num3) {
    const rightmost1 = num1 % 10;
    const rightmost2 = num2 % 10;
    const rightmost3 = num3 % 10;

    if (rightmost1 === rightmost2 || rightmost1 === rightmost3 || rightmost2 === rightmost3) {
        return true;
    }
    return false;
}

// 44. Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.  

function evaluate(num1, num2, num3) {
    if ((num1 >= 20 && (num1 < num2 || num1 < num3)) ||
        (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
        (num3 >= 20 && (num3 < num1 || num3 < num2))) {
        return true;
    }
    return false;
}

// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

function check15(num1, num2) {
    if (num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15) {
        return true;
    }
    return false;
}

// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  

function checkMultiple(num1, num2) {
    const isNum1Multiple = (num1 % 7 === 0 || num1 % 11 === 0);
    const isNum2Multiple = (num2 % 7 === 0 || num2 % 11 === 0);

    return (isNum1Multiple && !isNum2Multiple) || (!isNum1Multiple && isNum2Multiple);
}

// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.  For example 40 presents in 40 and 4000

function isInRange(num) {
    if (num >= 40 && num <= 10000) {
        return true;
    }
    return false;
}

// 48. Write a JavaScript program to reverse a given string.  

function reverseString(str) {
    const reversedArray = [];
    for (let i = str.length - 1; i >= 0; --i) {
        reversedArray.push(str[i]);
    }
    return reversedArray.join('');
}

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  

function replaceChars(str) {
    const replacedArray = [];
    for (let char of str) {
        const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
        replacedArray.push(nextChar);
    }
    return replacedArray.join('');
}

// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.  

function capitalize(str) {
    const words = str.split(' ');
    const capitalized = [];
    for (let i = 0; i < words.length; ++i) {
        capitalized.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
    return capitalized.join(' ');
}

// 51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.  

function toHourAndMinutes(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${num} = ${hours} hours and ${minutes} minutes`;
}

// 52. Write a JavaScript program to convert letters of a given string alphabetically.  

function convertAlphabetically(str) {
    const array = str.split('');
    return array.sort().join('');
}

// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

function isSeparatedBy3Places(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[i + 4] === 'b') {
            return true;
        }
        if (str[i] === 'b' && str[i + 4] === 'a') {
            return true;
        }
    }
    return false;
}

// 54. Write a JavaScript program to count the number of vowels in a given string.  

function countOfVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

function checkEqualPAndT(str) {
    let countOfP = 0;
    let countOfT = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'p') {
            countOfP++;
        }
        if (char === 't') {
            countOfT++;
        }
    }
    if (countOfP === countOfT) {
        return true;
    }
    return false;
}

// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    const division = num1 / num2;
    return division.toLocaleString();
}

// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.  

function createString(str, count) {
    let result = '';
    for (let i = 0; i < count; ++i) {
        result += str;
    }
    return result;
}

// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.  

function updateString(str) {
    if (str.length < 3) {
        return str;
    }
    const last3Chars = str.slice(-3);
    let updatedString = '';
    for (let i = 0; i < 4; ++i) {
        updatedString += last3Chars;
    }
    return str + updatedString;
}

// 59. Write a JavaScript program to extract the first half of a even string.  

function extractHalf(str) {
    const halfIndex = str.length / 2;
    return str.slice(0, halfIndex);
}

// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.  

function removeFirsAndLast(str) {
    return str.slice(1, str.length - 1);
}

// 61. Write a JavaScript program to concatenate two strings except for their first character.  

function concatStrings(str1, str2) {
    const newStr1 = str1.slice(1);
    const newStr2 = str2.slice(1);
    return newStr1 + newStr2;
}

// 62.  Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three. 

function moveLast3Chars(str) {
    if (str.length < 3) {
        return str;
    }
    const last3Chars = str.slice(-3);
    const remainedStr = str.slice(0, -3);
    return last3Chars + remainedStr;
}

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

function middleStr(str) {
    if (str.length < 3) {
        return str;
    }
    const midIndex = str.length / 2;
    return str.slice(midIndex - 1, midIndex + 2);
}

// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

function concatEqualStrings(str1, str2) {
    let concatedString = '';
    if (str1.length === str2.length) {
        concatedString = str1 + str2;
    } else if ( str1.length > str2.length) {
        concatedString = str1.slice(0, str2.length) + str2;
    } else {
        concatedString = str1 + str2.slice(0, str1.length);
    }
    return concatedString;
}

// 65. Write a JavaScript program to test whether a string ends with " Script". The string length must be greater than or equal to 6. 

function endsWithScript(str) {
    if (str.length < 6) {
        return false;
    }
    const last6Chars = str.slice(-7);
    return last6Chars === ' Script';
}

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.  

function returnCityName(str) {
    if (str.slice(0, 3) === 'New' || str.slice(0, 3) === 'Los') {
        return str;
    }
    return '';
}

// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

function removeP(str) {
    let result = str;
    if (result[0] && result[0].toLowerCase() === 'p') {
        result = result.slice(1);
    }

    if (result.at(-1) && result.at(-1).toLowerCase() === 'p') {
        result = result.slice(0, -1);
    }
    return result;
}

// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n. 

function createNewString(str, n) {
    if (str.length < n) {
        return str;
    }
    const firstNChars = str.slice(0, n);
    const lastNChars = str.slice(-n);
    return firstNChars + lastNChars;
}

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  

function sumOfArray(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  

function rotateLeft(arr) {
    const firstItem = arr.shift();
    arr.push(firstItem);
    return arr;
}

// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

function check1Inarray(arr) {
    if (arr.length < 1) {
        throw new Error('Empty array');
    }
    return arr[0] === 1 || arr[arr.length - 1] === 1;
}

// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

function checkFirstAndLast(arr) {
    return arr[0] === arr[arr.length - 1];
}

// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.

function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; --i) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

function replaceWithMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = max;
    }
    return arr;
}

// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

function createNewArray(arr1, arr2) {
    const newArray = [];
    newArray.push(arr1[1]);
    newArray.push(arr2[1]);
    return newArray;
}

// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1. 

function arrayFromFirstAndLast(arr) {
    if (arr.length < 1) {
        return;
    }
    const newArray = [];
    newArray.push(arr[0]);
    newArray.push(arr[arr.length - 1]);
    return newArray;
}

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  

function checkArray(arr) {
    return arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3;
}

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3. 

function checkArray(arr) {
    return arr[0] !== 1 || arr[0] !== 3 || arr[1] !== 1 || arr[1] !== 3;
}

// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  

function isContainTwice(arr) {
    let countOf30 = 0;
    let countOf40 = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 30) {
            countOf30++;
        }
        if (arr[i] === 40) {
            countOf40++;
        }
    }
    return countOf30 === 2 && countOf40 === 2;
}

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1. 

function swapFirstAndLast(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length -1], arr[0]];
    return arr;
}

// 81.  Write a JavaScript program to add two digits to a given positive integer of length two.  

function addDigits(num) {
    let sum = 0;
    while (num) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

// 82. Write a JavaScript program to add two positive integers without carrying.  

function addWithoutCarrying(num1, num2) {
    let result = 0;
    let place = 1;

    while (num1 > 0 || num2 > 0) {
        const digit1 = num1 % 10;
        const digit2 = num2 % 10;

        const sum = (digit1 + digit2) % 10;

        result += sum * place;

        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        place *= 10;
    }

    return result;
}

// 83. Write a JavaScript program to find the longest string from a given array of strings.  

function longestString(arr) {
    let maxLengthStr = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i].length > maxLengthStr.length) {
            maxLengthStr = arr[i];
        }
    }
    return maxLengthStr;
}

// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function replaceWithNextChar(str) {
    const replacedArray = [];
    for (let char of str) {
        if (char === 'z') {
            replacedArray.push('a');
        } else if (char === 'Z') {
            replacedArray.push('A');
        } else {
            const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
            replacedArray.push(nextChar);
        }
    }
    return replacedArray.join('');
}

// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.

function divideTwoParts(arr) {
    const arr1 = [];
    const arr2 = [];
    const sums = [];
    let sumOfFirstArr = 0;
    let sumOfSecondArr = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (i % 2 === 0) {
            arr1.push(arr[i]);
            sumOfFirstArr += arr[i];
        } else {
            arr2.push(arr[i]);
            sumOfSecondArr += arr[i];
        }
    }
    sums.push(sumOfFirstArr);
    sums.push(sumOfSecondArr);
    return sums;
}

// 86. Write a JavaScript program to find the types of a given angle.  

function typeOfAngle(angle) {
    let angleType = '';
    if (angle >= 0 && angle < 90) {
        angleType = 'Acute angle';
    } else if (angle === 90) {
        angleType = 'Right angle';
    } else if (angle > 90 && angle < 180) {
        angleType = 'Obtuse angle';
    } else if (angle === 180) {
        angleType = 'Straight angle';
    }
    return angleType;
}

// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

function isSimilarArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const diffIndices = [];
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            diffIndices.push(i);
        }
    }
    if (diffIndices.length === 0) {
        return true;
    }
    if (diffIndices.length === 2) {
        const [i, j] = diffIndices;
        return arr1[i] === arr2[j] && arr1[j] === arr2[i];
    }
    return false;
}

// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.  

function isSimilarIntegers(num1, num2, divisor) {
    const num1Divisible = num1 % divisor === 0;
    const num2Divisible = num2 % divisor === 0;

    return num1Divisible === num2Divisible;
}

// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

function isPossible(x, y, z) {
    if (x + y === z || x - y === z || x * y === z || x / y === z) {
        return true;
    }
    return false;
}

// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.  

function kThGreatest(arr, k) {
    arr.sort((a, b) => b - a);
    return arr[k - 1];
}

// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.

function maxPossibleSum(arr, k) {
    if (arr.length < k) {
        throw new Error("Array length must be at least k");
    }

    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let currentSum = maxSum;

    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

function maxDifference(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements");
    }

    let maxDiff = Math.abs(arr[1] - arr[0]);
    for (let i = 1; i < arr.length - 1; ++i) {
        const currentDiff = Math.abs(arr[i + 1] - arr[i]);
        if (currentDiff > maxDiff) {
            maxDiff = currentDiff;
        }
    }
    return maxDiff;
}

// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 

function maxDifferenceInArray(arr) {
    let minElement = arr[0];
    let maxElement = arr[0];
    for( let i = 1; i < arr.length; ++i) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    return maxElement - minElement;
}

// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers. 

function mostFrequentlyElement(arr) {
    const counts = new Map();
    let maxCount = 0;
    let mostFrequentElement = null;

    for (let num of arr) {
        counts.set(num, (counts.get(num) || 0) + 1);

        if (counts.get(num) > maxCount) {
            maxCount = counts.get(num);
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}

// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers. 

function replaceWithGivenNumber(arr, num) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = num;
    }
    return arr;
}

// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 

function sumOfDifferences(arr) {
    let sumOfDiffs = 0;
    for (let i = 1; i < arr.length; ++i) {
        sumOfDiffs += Math.abs(arr[i] - arr[i - 1]);;
    }
    return sumOfDiffs;
}

// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it. 

// 98.  Write a JavaScript program to change the case of the minimum number of letters to make a given string  written in upper case or lower case. Fox example "Write" will be write and "PHp" will be "PHP"

function convertCase(str) {
    let upperCount = 0;
    let lowerCount = 0;

    for (let char of str) {
        if (char === char.toUpperCase()) {
            upperCount++;
        } else {
            lowerCount++;
        }
    }

    return upperCount > lowerCount ? str.toUpperCase() : str.toLowerCase();
}

// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string. 

function canRearrangeToMatch(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    function getCharCount(str) {
        const charCount = new Map();
        for (let char of str) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
        return charCount;
    }

    const count1 = getCharCount(str1);
    const count2 = getCharCount(str2);

    for (let [char, count] of count1) {
        if (count2.get(char) !== count) {
            return false;
        }
    }

    return true;
}

// 100. Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers. 

function hasCommonElement(arr1, arr2) {
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            return true;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return false;
}

// 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions. 

function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
}

function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}

function isAlternatingLatinLetters(str) {
    if (!/^[a-zA-Z]+$/.test(str)) {
        return false;
    }

    for (let i = 1; i < str.length; i++) {
        if (
            (isUpperCase(str[i]) && isUpperCase(str[i - 1])) || 
            (isLowerCase(str[i]) && isLowerCase(str[i - 1]))
        ) {
            return false;
        }
    }

    return true;
}

// 102. Write a JavaScript program to find the number of inversions of a given array of integers. Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

function countInversions(arr) {
    let inversions = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                inversions++;
            }
        }
    }
    return inversions;
}

// 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number. 

function maxNumberAfterDeletingOneDigit(num) {
    const numStr = num.toString();
    let maxNum = -Infinity;

    for (let i = 0; i < numStr.length; i++) {
        const possibleNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
        
        maxNum = Math.max(maxNum, possibleNum);
    }

    return maxNum;
}

// 104. Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer. 

function closestPairWithDifference(arr, k) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    arr.sort((a, b) => a - b);

    let closestPair = null;
    let closestDiff = -Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const diff = Math.abs(arr[i] - arr[j]);
            
            if (diff > k) {
                break;
            }

            if (diff > closestDiff) {
                closestDiff = diff;
                closestPair = [arr[i], arr[j]];
            }
        }
    }

    return closestPair;
}

// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number. 

function sumOfDigits(num) {
    let sum = 0;
    while (num) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

function countReplacementsToSingleDigit(num) {
    let count = 0;

    while (num >= 10) {
        num = sumOfDigits(num);
        count++;
    }

    return count;
}

// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result. 

function divideUntilNonInteger(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Divisor cannot be zero");
    }

    while (dividend % divisor === 0) {
        dividend /= divisor;
    }

    return dividend;
}

// 107. Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one. 

function countDivisiblePairs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
                count++;
            }
        }
    }

    return count;
}

// 108. Write a JavaScript program to create the dot products of two given 3D vectors. Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

function dotProduct(vector1, vector2) {
    return vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2];
}

// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. 

function sortPrimeNumbers(num) {
    function isPrime(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(n); ++i) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];

    for (let i = 2; i <= num; ++i) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number. 

function countOfEvens(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === num) {
            break;
        }
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

// 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one. 

function checkNumber(num1, num2, num3) {
    if (num1 === num2) {
        return num3;
    } else if (num1 === num3) {
        return num2;
    }
    return num1;
}

// 112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. 

function findZeros(num) {
    let count = 0;
    for (let i = 5; i <= num; i *= 5) {
        count += Math.floor(num / i);
    }
    return count;
}

// 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers. 

function calculateSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n;
        n = Math.floor(n / 2);
    }
    return sum;
}

// 114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.) 

function correctSentence(str) {
    return str[0] === str[0].toUpperCase() && str.at(-1) === '.';
}

// 115.  Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right). 

function isDiagonalMatrix(matrix) {
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

// 116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. For a string "2*0", the output should be : ["210", "240", "270"]

function replaceHash(str) {
    let sum = 0;
    let hashIndex = -1;

    for (let i = 0; i < str.length; ++i) {
        if (str[i] === '#') {
            hashIndex = i;
        } else {
            sum += parseInt(str[i]);
        }
    }

    const options = [];

    for (let i = 0; i < 10; ++i) {
        if ((sum + i) % 3 === 0) {
            const replacedStr = str.slice(0, hashIndex) + i + str.slice(hashIndex + 1);
            options.push(replacedStr);
        }
    }

    return options;
}

// 117. Write a JavaScript program to check whether a given matrix is an identity matrix. Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.

function isIdentityMatrix(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        if (matrix[i].length !== n) {
            return false;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                if (matrix[i][j] !== 1) {
                    return false;
                }
            } else {
                if (matrix[i][j] !== 0) {
                    return false;
                }
            }
        }
    }

    return true;
}

// 118. Write a JavaScript program to check whether a given number is in a given range. 

function checkInRange(num, start, end) {
    if (num >= start && num <= end) {
        return true;
    }
    return false;
}

// 119. Write a JavaScript program to check if a given integer has an increasing digit sequence. 

function hasIncreasingDigits(num) {
    const numStr = num.toString();

    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] <= numStr[i - 1]) {
            return false;
        }
    }

    return true;
}

// 120. Write a JavaScript program to check if a point lies strictly inside the circle. 

function isPointInsideCircle(x, y, r, a, b) {
    const distance = Math.sqrt((a - x) ** 2 + (b - y) ** 2);

    return distance < r;
}

// 121. Write a JavaScript program to check whether a given matrix is lower triangular or not. Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

function isLowerTriangular(matrix) {
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = i + 1; j < matrix[i].length; ++j) {
            if (matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

// 122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.

function isStrictlyIncreasingOrDecreasing(arr) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            isIncreasing = false;
        }
        if (arr[i] >= arr[i - 1]) {
            isDecreasing = false;
        }
    }

    return isIncreasing || isDecreasing;
}

// 123. Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.

// 124. Write a JavaScript program to create the NOR value of two given booleans. 

function logical_Nor(x, y) {
    return !(x || y);
}

// 125. Write a JavaScript program to find the longest string in a given array. 

function findLongestString(arr) {
    let longest = "";

    for (let str of arr) {
        if (str.length > longest.length) {
            longest = str;
        }
    }

    return longest;
}

// 126. Write a JavaScript program to get the largest even number from an array of integers. 

function largestEven(arr) {
    let maxEven = -Infinity;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 === 0 && arr[i] > maxEven) {
            maxEven = arr[i];
        }
    }

    return maxEven === -Infinity ? null : maxEven;
}

// 127. Write a JavaScript program to reverse the order of bits in a integer. 

function reverseBits(num) {
    let binaryStr = num.toString(2);
    
    let reversedBinaryStr = binaryStr.split('').reverse().join('');
    
    return parseInt(reversedBinaryStr, 2);
}

// 128.  Write a JavaScript program to find the smallest round number not less than a given value. 

function smallestRoundNumber(num) {
    if (num % 10 === 0) {
        return num;
    }
    
    return Math.ceil(num / 10) * 10;
}

// 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number. 

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function smallestPrimeGreaterThan(num) {
    let candidate = num + 1;
    
    while (!isPrime(candidate)) {
        candidate++;
    }
    
    return candidate;
}

// 130. Write a JavaScript program to find the number of even digits in a given integer. 

function countOfEvenDigits(num) {
    const arr = num.toString().split('');
    let count = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (parseInt(arr[i]) % 2 === 0) {
            count++;
        }
    }
    return count;
}

// 131. Write a JavaScript program to create an array of prefix sums of the given array. 

function prefixSums(arr) {
    const prefixArray = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        prefixArray.push(sum);
    }

    return prefixArray;
}

// 132. Write a JavaScript program to find all distinct prime factors of a given integer. 

// 133. Write a JavaScript program to check whether a given fraction is proper or not. 

function isProperFraction(numerator, denominator) {
    if (numerator <= 0 || denominator <= 0) {
        throw new Error("Both numerator and denominator must be positive.");
    }

    return numerator < denominator;
}

// 134. Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 

function mirrorAlphabet(str) {
    let result = '';

    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            const mirroredChar = String.fromCharCode(122 - (char.charCodeAt(0) - 97));
            result += mirroredChar;
        } else {
            result += char;
        }
    }

    return result;
}

// 135. Write a JavaScript program to remove all characters from a given string that appear more than once. 

function removeRepeatedChars(str) {
    const charsCount = new Map();
    
    for (let char of str) {
        charsCount.set(char, (charsCount.get(char) || 0) + 1);
    }

    let result = '';
    for (let char of str) {
        if (charsCount.get(char) === 1) {
            result += char;
        }
    }

    return result;
}

// 136. Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character. 

function replaceDigit(str) {
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            return str.slice(0, i) + '$' + str.slice(i + 1);
        }
    }
    return str;
}

// 137. Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15. 

function checkIs15(num) {
    return num > 15 ? num : 15;
}

// 138. Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer. 

// 139. Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.  

function rightmostRoundNumberPosition(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 10 === 0) {
            return i;
        }
    }
    return 0;
}

// 140. Write a JavaScript program to check whether all the digits in a given number are the same or not.  

function areAllDigitsSame(num) {
    const numStr = num.toString();
    const firstDigit = numStr[0];
    
    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] !== firstDigit) {
            return false;
        }
    }
    return true;
}

// 141. Write a JavaScript program to find the number of elements in both arrays.  

function countCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    let count = 0;

    for (let element of arr2) {
        if (set1.has(element)) {
            count++;
            set1.delete(element);
        }
    }

    return count;
}

// 142. Write a JavaScript program to simplify a given absolute path for a file in Unix-style.  

// 143. Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.  

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

// 144. Write a JavaScript program to break an URL address and put its parts into an array.  

// 145.  Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.  

// 146. Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.  

// 147. Write a JavaScript program to compute the sum of all the digits that occur in a given string.  

// 148. Write a JavaScript program to swap two halves of a given array of integers of even length.  

// 149. Write a JavaScript program to change the capitalization of all letters in a given string.  

// 150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.  
