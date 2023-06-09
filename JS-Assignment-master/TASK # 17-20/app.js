

// // Problem # 1
// let nestedEmptyArr = [[], [], []]

// // Problem # 2
// let nestedArr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ]

// // Problem # 3
// let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (var h of values) {
//   document.write(h + '<br>')
// }

// // Problem # 4
// let numberTable = +prompt('Enter a number to show its table: ')
// let tableLength = +prompt('Enter Lenght of Table (e.g. 10): ')
// for (var i = 1; i < tableLength + 1; i++) {
//   document.write(`${numberTable} * ${i} = ${numberTable * i}<br>`)
// }

// // Problem # 5
// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (var i in fruits) {
//   document.write(`Element at index ${i} is ${fruits[i]}<br>`)
// }

// // Problem # 6
// document.write('Counting: <br>')
// for (var i = 1; i < 16; i++) {
//   if (i < 15) {
//     document.write(i + ', ')
//   } else {
//     document.write(i)
//   }
// }

// document.write('<br><br>Reverse Counting: <br>')
// for (var i = 16; i > 0; i--) {
//   if (i > 1) {
//     document.write(i + ', ')
//   } else {
//     document.write(i)
//   }
// }

// document.write('<br><br>Even: <br>')
// for (var i = 0; i < 21; i++) {
//   if (i % 2 === 0) {
//     if (i < 20) {
//       document.write(i + ', ')
//     } else {
//       document.write(i)
//     }
//   }
// }

// document.write('<br><br>Odd: <br>')
// for (var i = 0; i < 21; i++) {
//   if (i % 2 !== 0) {
//     if (i < 19) {
//       document.write(i + ', ')
//     } else {
//       document.write(i)
//     }
//   }
// }

// document.write('<br><br>Series: <br>')
// for (var i = 2; i < 21; i++) {
//   if (i % 2 === 0) {
//     if (i < 20) {
//       document.write(i + 'K, ')
//     } else {
//       document.write(i + 'K')
//     }
//   }
// }

// // Problem # 7
// let items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// count = 0
// let search = prompt('Welcome to my Bake Shop! What do you want to order? ')
// for (var i in items) {
//   count++
//   if (search === items[i]) {
//     document.write(`${search} is available at index ${i} in my Bake Shop.`)
//     break
//   } else if (count === a.length) {
//     alert(`We are sorry ${search} is not available!`)
//   }
// }

// // Problem # 8
// let nums = [24, 53, 78, 91, 120]
// let minimum = nums[0]
// for (var i of nums) {
//   if (minimum < i) {
//     minimum = i
//   }
// }

// let maximum = minimum
// alert('Largest No is ' + maximum)

// // Problem # 9
// minimum = nums[0]
// for (var i of nums) {
//   if (minimum > i) {
//     minimum = i
//   }
// }

// alert('Smallest No is ' + minimum)

// // Problem # 10
// for (var u = 1; u < 101; u++) {
//   if (u % 5 === 0) {
//     if (u < 100) {
//       document.write(u + ' ,')
//     } else {
//       document.write(u)
//     }
//   }
// }
