// Date and Time in JavaScript

let myDate = new Date();
// console.log(myDate.toString()); // Returns the current date and time

// console.log(myDate.toDateString()); //* Returns the current date in a human-readable format - Thu May 07 2026
// console.log(myDate.toISOString());//* Returns the date in ISO format - 2026-05-07T10:30:00.000Z
// console.log(myDate.toJSON()); //* Returns the date in JSON format - 2026-05-07T10:30:00.000Z
// console.log(myDate.toLocaleDateString()); //* gives the date in the format of the user's locale - 5/7/2026
// console.log(myDate.toLocaleString()); //* gives the date and time in the format of the user's locale - 5/7/2026, 10:30:00 AM
// console.log(myDate.getTime()); //* Returns the number of milliseconds since January 1, 1970

// let myCreateDate = new Date(2026, 4, 7); //* Month is 0-indexed (0 = January, 4 = May)
// console.log(myCreateDate.toDateString()); //* Returns the created date - Thu May 07 2026


// let myCreateDate2 = new Date(2026, 4, 7, 10, 30, 0); //* Month is 0-indexed (0 = January, 4 = May)
// console.log(myCreateDate2.toLocaleString()); //* Returns the created date and time - Thu May 07 2026 10:30:00 GMT+0000 (Coordinated Universal Time)

// let createMyDate = new Date("06-07-2023"); //* Month is 0-indexed (0 = January, 5 = June)
// console.log(createMyDate.toDateString()); //* Returns the created date - Sat Jun 07 2026 

// console.log(createMyDate.getTime()); //* Returns the timestamp of the created date in milliseconds - 1710000000000

//! Milliseconds since January 1, 1970 (Unix Epoch Time) to date conversion

let myTimeStamp = Date.now(); //* Returns the number of milliseconds since January 1, 1970
// console.log(myTimeStamp); //* Returns the number of milliseconds since January 1, 1970 - 1710000000000


let seconds = Math.floor(myTimeStamp / 1000); //* Returns the seconds of the created date
let minutes = seconds / 60; //* Returns the minutes of the created date
let hours = minutes / 60; //* Returns the hours of the created date
let days = hours / 24; //* Returns the days of the created date
let weeks = days / 7; //* Returns the weeks of the created date
let months = days / 30; //* Returns the months of the created date
let years = days / 365; //* Returns the years of the created date

// console.log(seconds); //* Returns the seconds of the created date - 0
// console.log(minutes); //* Returns the minutes of the created date - 0
// console.log(hours); //* Returns the hours of the created date - 0
// console.log(days); //* Returns the days of the created date - 0
// console.log(weeks); //* Returns the weeks of the created date - 0
// console.log(months); //* Returns the months of the created date - 0
// console.log(Math.round(years), "years"); //* Returns the years of the created date - 0


let newDate = new Date();

console.log(newDate.getMonth()); //* Returns the current month (0-11) - 4 (May)
console.log(newDate.getDate());