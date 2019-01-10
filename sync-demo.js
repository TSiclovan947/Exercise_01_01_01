/*
    Exercise_01_01_01
    Author: Tabitha Siclovan
    Date: January 09, 2019
*/
 
//Synchronous example for Node.js

//require = brings in file system package, runs it, and caches it
var fs = require('fs'); //var holds file system package

//data is going to hold (read) directory content synchronously
var data = fs.readdirSync("/"); 
console.log("data: ", data);

console.log("This code is executed last!");
