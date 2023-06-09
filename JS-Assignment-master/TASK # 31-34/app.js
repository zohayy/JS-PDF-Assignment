// // Q1)
// var currentdate = new Date();
// document.write(currentdate);

// // Q2)
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentmonth = currentdate.getMonth();
// document.write(months[currentmonth]);

// // Q3)
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentday = currentdate.getDay();
// document.write("Today is " + days[currentday]);

// // Q4)
// if (currentday == 0 || currentday == 6) {
//     document.write("Today is a funday")
// }

// // Q5)
// if (currentdate.getDate() <= 15) {
//     document.write("first fifteen days of the month");
// } else if (currentdate.getDate() <= 16) {
//     document.write("16th day of the month");
// } else {
//     document.write("last 16 days of the month");
// }

// // Q6)
// document.write("milliseconds: " + currentdate.getTime())
// var minutes = currentdate.getTime() / (1000 * 60);
// document.write("minutes" + minutes);

// // Q7)
// var hour = currentdate.getHours();
// if (hour < 12) {
//     document.write("its AM");
// } else {
//     document.write("its PM");
// }

// // Q8)
// var laterDate = new Date("2020/12/31");
// document.write(laterDate);

// // Q9)
// var startingdate = new Date("2020/6/18");
// var daysgone = parseInt((currentdate.getTime() - startingdate.getTime()) / (1000 * 60 * 60 * 24));
// document.write(daysgone + " days have passed since ramazan 1st")

// // Q10)
// var startingdate = new Date("2015/1/1");
// var daysgone = parseInt((currentdate.getTime() - startingdate.getTime()) / (1000 * 60));
// document.write(daysgone + " seconds have passed since 2015")

// // Q11).
// document.write("current date" + currentdate)
// var hourago = new Date(currentdate.getTime() - (1000 * 60 * 60));
// document.write("an hour ago it was " + hourago)

// // Q12)
// document.write("current date" + currentdate)
// var centuryago = new Date(currentdate.getTime() - (1000 * 60 * 60 * 24 * 365.25 * 100));
// document.write("100 years ago it was " + centuryago)

// // Q13)
// var age = prompt("enter your age")
// var birthyear = new Date(currentdate.getTime() - (1000 * 60 * 60 * 24 * 365.25 * age));
// document.write(birthyear.getFullYear());

// // Q14)
// document.write("customer name : john");
// document.write("Month : Feburary");
// document.write("Number of units : 416");
// document.write("Charges per unit : 16");
// document.write("net amount payable with in due date : " + 416 * 16);
// document.write("late payment surcharge : 350");
// document.write("payment after due date : " + ((416 * 16) + 350));
