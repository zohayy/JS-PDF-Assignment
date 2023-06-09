
// // Problem # 1
// let emptyArr1 = []

// // Problem # 2
// let emptyArr2 = new Array()

// // Problem # 3
// names = ['Ibrahim', 'Usman', 'Naveed']

// // Problem # 4
// let numbers = [1, 2, 3, 4, 5]

// // Problem # 5
// let booleans = [true, false, true, false]

// // Problem # 6
// let mixedArr = [1, 2, 'Ibrahim', 'Naveed', true, false]

// // Problem # 7
// let degrees = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD']
// function interate(arr) {
//   for (var j of arr) {
//     document.write(j + '<br>')
//   }
// }

// interate(degrees)

// // Problem # 8
// names = ['Ibrahim', 'Usman', 'Naveed']
// let scores = [380, 490, 485]
// document.write(
//   `Score of ${names[0]} is ${scores[0]}. Percentage is ${
//     (scores[0] * 100) / 500
//   }%<br>Score of ${names[1]} is ${scores[1]}. Percentage is ${
//     (scores[1] * 100) / 500
//   }%<br>Score of ${names[2]} is ${scores[2]}. Percentage is ${
//     (scores[2] * 100) / 500
//   }%`,
// )

// // Problem # 9
// let colors = ['red', 'blue']
// for (var i of colors) {
//   document.write(i + '<br>')
// }

// let startColor = prompt('Which color you want to add to the beginning: ')
// colors.unshift(startColor)
// document.write('----------------------------------<br>')
// for (var j of colors) {
//   document.write(j + '<br>')
// }

// let endColor = prompt('Which color you want to add to the end: ')
// colors.push(endColor)
// document.write('----------------------------------<br>')
// for (var k of colors) {
//   document.write(k + '<br>')
// }

// startColor = prompt('Which color you want to add to the beginning: ')
// secondStartColor = prompt('Which color you want to add to the beginning: ')
// colors.unshift(startColor, secondStartColor)
// document.write('----------------------------------<br>')
// for (var l of colors) {
//   document.write(l + '<br>')
// }

// colors.shift()
// document.write('----------------------------------<br>')
// for (var m of colors) {
//   document.write(m + '<br>')
// }

// colors.pop()
// document.write('----------------------------------<br>')
// for (var n of colors) {
//   document.write(n + '<br>')
// }

// startColor = prompt('Which color you want to add: ')
// let startColorLoc = +prompt(`Also tell the index no (0-${colors.length - 1}): `)
// colors.splice(startColorLoc, 0, startColor)
// document.write('----------------------------------<br>')
// for (var o of colors) {
//   document.write(o + '<br>')
// }

// let noOfRemoveColors = +prompt(
//   `How many colors you want to delete (${colors.length}): `,
// )
// let startingLoc = +prompt(`Also tell the index no (0-${colors.length - 1}): `)
// colors.splice(startingLoc, noOfRemoveColors)
// document.write('----------------------------------<br>')
// for (var p of colors) {
//   document.write(p + '<br>')
// }

// // Problem # 10
// scores = [90, 80, 70, 99, 100]
// scores.sort((a, b) => a - b)
// console.log(scores)

// // Problem # 11
// let cities = ['Karachi', 'Lahore', 'Quetta']
// let slicedCities = cities.slice(1, 3)
// console.log(slicedCities)

// // Problem # 12
// let words = ['This', 'is', 'my', 'cat']
// console.log(words.join(' '))

// // Problem # 13
// let peripherals = []
// peripherals.push('keyboard')
// peripherals.push('mouse')
// peripherals.push('printer')
// peripherals.push('monitor')
// console.log(peripherals)

// // Problem # 14
// let reversePeripherals = []
// reversePeripherals.unshift('keyboard')
// reversePeripherals.unshift('mouse')
// reversePeripherals.unshift('printer')
// reversePeripherals.unshift('monitor')
// console.log(reversePeripherals)

// // Problem # 15
// let phoneManufacturers = [
//   'Apple',
//   'Samsung',
//   'Motorola',
//   'Nokia',
//   'Sony',
//   'Haier',
// ]
// document.write(
//   `<select><option>Phone Manufacturers</option><option value="Apple">${phoneManufacturers[0]}</option><option value="Samsung">${phoneManufacturers[1]}</option><option value="Motorola">${phoneManufacturers[2]}</option><option value="Nokia">${phoneManufacturers[3]}</option><option value="Sony">${phoneManufacturers[4]}</option><option value="Haier">${phoneManufacturers[5]}</option></select>`,
// )

