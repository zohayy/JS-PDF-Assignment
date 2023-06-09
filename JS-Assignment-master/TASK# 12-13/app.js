// PROBLEM #1              
// var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

// var ascii = userInput.charCodeAt(0)
// if (ascii >= 65 && ascii <= 90){
//     alert("you input a Capital letter")
// } else if (ascii >= 97 && ascii <=122){
//     alert("you input a Small letter")
// }else if (ascii >= 48 && ascii <=57){
//     alert("you input a number")
// }
//  else{
//     alert ("you have done something wrong")
// }
// Problem # 2
// let int_1 = +prompt('Enter the First Integer: ')
// let int_2 = +prompt('Enter the Second Integer: ')
// if (int_1 > int_2) {
//   alert(`${int_1} is greater than ${int_2}`)
// } else if (int_2 > int_1) {
//   alert(`${int_2} is greater than ${int_1}`)
// } else {
//   alert(`${int_1} and ${int_2} are equal!`)
// }
// // Problem # 3
// let number = +prompt('Enter a Number: ')
// if (number < 0) {
//   alert(`${number} is -ve`)
// } else if (number > 0) {
//   alert(`${number} is +ve`)
// } else {
//   alert(`${number} is zero`)
// }

// // Problem # 4
// let vowel = prompt('Enter a Character: ')
// let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
// let count = 0
// for (var i of vowels) {
//   count++
//   if (vowel === i) {
//     alert('True')
//     break
//   } else if (count === vowels.length) {
//     alert('False')
//   }
// }
// Problem # 5
// let password = 'sawi123456'
// let insertedPassword = prompt('Enter Your Password: ')
// if (insertedPassword === password) {
//   alert('Correct! The Password you entered matches the original password')
// } else if (insertedPassword.length === 0) {
//   alert('Please Enter a Password!')
// } else if (insertedPassword !== password) {
//   alert('Incorrect Password!')
// }

// // Problem # 6
// var greeting
// var hour = 13
// if (hour < 18) {
//   greeting = 'Good Day'
// } else {
//   greeting = 'Good Evening'
// }

// Problem # 7
// let time = +prompt('Enter Time in 24 Hours Format (1900 = 7pm): ')
// if (time >= 0000 && time < 1200) {
//   alert('Good Morning!')
// } else if (time >= 1200 && time < 1700) {
//   alert('Good Afternoon!')
// } else if (time >= 1700 && time < 2100) {
//   alert('Good Evening!')
// } else if (time >= 2100 && time <= 2359) {
//   alert('Good Night!')
// }