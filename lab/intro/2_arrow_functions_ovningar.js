/*
 * Övn 1: Gör om följande funktion till fat arrow functions
 * */

var list = [21,6,4,3,2,7,5,16,9,6];
var result = list.filter(function(item){
   return item > 5;
});
console.log(result);

// Lösning:
var result = list.filter(item => item > 5);
console.log(result);
