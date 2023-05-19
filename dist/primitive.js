"use strict";
// string type : 
let countryName;
countryName = "Bangladesh";
countryName = "India";
countryName = "Nepal";
//  shows errors for : 
/*
countryName = 20; // because the type is string;
countryName = false // because the type is boolean ;
countryName = undefined // because the type is undefined;

 */
// Number Type : 
let myAge;
myAge = 20;
myAge = 21;
// Show errors 
/*
   myAge = '20'; // because "20"'s type is string
   myAge = 'tweenty ' // because the type is string ;
   myAge = false // because the type is boolean;
   myAge = undefined // because the type is undefined;

*/
//   Boolean Type: 
let isHappy;
isHappy = true;
isHappy = false;
isHappy = myAge === 20;
isHappy = !myAge && !countryName;
isHappy = !!myAge && !!countryName;
isHappy = !!myAge || !!countryName;
// Shows errors for : 
// isHappy = 10; // because the type is number 
// isHappy = 'yes'// because the type  gives errors 
//   undefined Type :
let xyz;
xyz = undefined;
const b = undefined;
xyz = b;
// Shows errors for : 
/*
   xyz = 20;
   xyz = 'undefined';
   xyz = null
   xyz = false
   xyz =true ;
 */
//  Null Type : 
let Empty;
Empty = null;
/*
   Empty = "null";
   Empty = 20;
   Empty = "anything"
   Empty = false
   Empty =true ;
   Empty = undefined
 */
