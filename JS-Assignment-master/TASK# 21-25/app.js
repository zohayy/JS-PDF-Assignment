// // Q1)
// var fname = prompt('Enter your first name: ');
// var lname = prompt('Enter your second name: ');
// var fullname = fname + ' ' + lname;
// alert('Hi, ' + fullname);

// // Q2)
// var mob = prompt('Enter your favorite mobile phone model: ');
// document.write('Your favorite phone is: ' + mob + '<br>' + 'Length of string: ' + mob.length);

// // Q3)
// var str = 'Pakistani';
// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 1) === "n") {
//         document.write("String: " + str + "<br>" + "Index of 'n': " + i);
//         break;
//     }
// }

// // Q4)
// var str = 'Hello world';
// var ind = 0;
// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 1) === "l") {
//         ind = i;
//     }
// }
// document.write("String: " + str + "<br>" + "Index of 'l': " + ind);

// // Q5)
// var str = 'Pakistani';
// var ind = 3;
// var st = str.charAt(3);
// document.write("String: " + str + "<br>" + " Character at index 3: " + st);

// // Q6)
// var fname = prompt('Enter your first name: ');
// var lname = prompt('Enter your second name: ');
// var fullname = fname.concat(lname);
// alert('Hi, ' + fullname);

// // Q7)
// var text = 'Hyderabad';
// var rep = text.replace('Hyder', 'Islam');
// document.write('City: ' + text + '<br>' + 'After Replacement: ' + rep);

// // Q8)
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + 3) === 'and') {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);
//     }
// }
// document.write(message);

// // Q9)
// var val = '472';
// var num = parseInt(val);
// var type_val = typeof (val);
// var type_num = typeof (num);
// document.write('Value: ' + val + '<br>' + 'Type: ' + type_val + '<br>' + 'Value: ' + num + '<br>' + 'Type: ' + type_num);

// // Q10)
// var inp = prompt('Enter any word: ');
// var cap = inp.toUpperCase();
// document.write('User Input: ' + inp + '<br>' + 'Upper case: ' + cap);

// // Q11)
// var inp = prompt('Enter any word: ');
// var cap = inp.charAt(0).toUpperCase() + inp.slice(1).toLowerCase();
// document.write('User Input: ' + inp + '<br>' + 'Upper case: ' + cap);

// // Q12)
// var num = 35.36;
// var str = num.toString();
// var st = str.replace('.', '');
// document.write('Number: ' + num + '<br>' + 'String: ' + st);

// // Q13)
// var ch = 0;
// var name = prompt('Enter Username: ');
// for (i = 0; i < name.length; i++) {
//     if (name.codePointAt(i) === 33 || name.codePointAt(i) === 44 || name.codePointAt(i) === 46 || name.codePointAt(i) === 64) {
//         ch += 1;
//     }
// }
// if (ch === 1) {
//     alert('Please enter a valid username.');
// }
// else { }

// // Q14)
// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var c = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am: ");
// var b = c.toLowerCase();
// var flag = 0;
// for (i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//         flag += 1;
//         break;
//     }
// }
// if (flag === 1) {
//     document.write(b + ' is availabe at index ' + i + ' of our bakery.');
// }
// else {
//     document.write('We are Sorry. ' + b + ' is not available at our bakery.');
// }

// // Q15)
// var password = prompt('Enter password must be alphanumeric.');
// if (password.length < 6 || (password.codePointAt(0) > 48 && password.codePointAt(0) < 58)) {
//     alert('Enter valid password.');
// }
// else { }

// // Q16)
// var university = 'University of Karachi';
// var arr = university.split("");
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }

// // Q17)
// var input = prompt('Enter anything: ');
// var last = input.length - 1;
// var char = input.charAt(last);
// document.write('User input: ' + input + '<br>' + 'Last character of input: ' + char);

// // Q18)
// var text = 'The quick brown fox jumps over the lazy dog';
// var inst = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === 'the') {
//         inst += 1;
//     }
//     else { }
// }
// document.write('Text: ' + text + '<br>' + 'There are ' + inst + " occurence of word 'the'");



