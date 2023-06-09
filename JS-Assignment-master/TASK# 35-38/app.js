// // Q1)
// var date = new Date()
// document.write(date)

// // Q2)
// fname = prompt('Enter your first name: ')
// lname = prompt('Enter your last name: ')
// fullname = fname + ' ' + lname
// prompt('Hi, ' + fullname)

// // Q3)
// var num1 = parseInt(prompt('Enter first number: '))
// var num2 = parseInt(prompt('Enter second number: '))
// var sum = num1 + num2
// alert('Sum of ' + num1 + ' and ' + num2 + ' is ' + sum)

// // Q4)
// var num1 = parseInt(prompt('Enter first number: '))
// var num2 = parseInt(prompt('Enter second number: '))
// var op = prompt('Enter operation; +, -, *, /')
// func(num1, num2, op);
// alert('Sum is: ' + sum);
// function func(num1, num2, op) {
//     if (op === '+') {
//         sum = num1 + num2
//     }
//     else if (op === '-') {
//         sum = num1 - num2
//     }
//     else if (op === '*') {
//         sum = num1 * num2
//     }
//     else if (op === '/') {
//         sum = num1 / num2
//     }
//     else {
//         alert('invalid operation')
//     }
//     return sum
// }

// // Q5)
// function Square(num) {
//     var result = num * num;
//     return result;
// }
// document.write("<br> The Square of the number is " + Square(4));

// // Q6)
// var sum = 0;
// function Factorial(number) {
//     var fact;
//     for (i = 1; i < number; i++) {
//         fact = number * i;
//         sum = sum + fact;
//     }
//     return sum;
// }
// document.write("<br> The Factorial of the number is " + Factorial(4));

// // Q7)
// function Counting(firstNumber, lastNumber) {
//     for (i = firstNumber; i <= lastNumber; i++) {
//         document.write("<br>" + i);
//     }
// }
// document.write("<br><h1>Counting</h1>");
// Counting(12, 19);

// // Q8)
// function calculateHypotenuse(base, perpendicular) {
//     function Square(x) {
//         return x * x;
//     }
//     Result = Square(base) + Square(perpendicular)
//     return Result;
// }
// document.write("<br>The hypoteneous of the right angle triangle is" + calculateHypotenuse(4, 3));

// // Q9)
// function calculateArea(width, height) {
//     var Area = width * height;
//     return Area;
// }
// var Height = 15;
// var Width = 3;
// document.write("<br>" + "The Area of The Triangle by Passing Arguement as value  is " + calculateArea(Height, Width));
// document.write("<br>" + "The Area of The Triangle by Passing Arguement as variable  is " + calculateArea(7, 4));

// // Q10)
// function Palindrome(string) {
//     var newString = "";
//     for (i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//     }
//     if (string === newString) {
//         document.write("<br>Its a Palindrome");
//     }
//     else {
//         document.write("<br>Its not a Palindrome");
//     }
// }
// Palindrome("madam");

// // Q11)
// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
// document.write("<br> The String in Title Case is " + titleCase('the quick brown fox'));

// // Q12)
// function find_longest_word(str) {
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];
//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// document.write("<br>" + find_longest_word('Web Development Tutorial'));

// // Q13)
// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// document.write("<br>The occurence of the letter in the string is " + char_count('Omama', 'a'));

// // Q14)
// document.write("<h1>Geometrizer</h1>");
// function calcCircumference(radius) {
//     var pi = 3.142;
//     var circumference;
//     circumference = 2 * pi * radius;
//     return circumference;
// }
// document.write("<br>The Circumference of the Circle is " + calcCircumference(5));

// function calcArea(radius) {
//     var pi = 3.142;
//     var Area;
//     Area = pi * radius * radius;
//     return Area;
// }
// document.write("<br>The Area  of the Circle is " + calcArea(5));