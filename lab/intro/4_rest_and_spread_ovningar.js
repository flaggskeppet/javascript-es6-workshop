/*
* Övning:
* Hur kan ni göra för att slå ihop dessa arrayerna med push?
* Ni får inte använda concat.
* */

 let ar1 = [1,2,3,4,5];
 let ar2 = [6,7,8,9];

//result = ar1.concat(ar2);
//console.log(result)

//Lösning
ar1.push(...ar2);
console.log(ar1) // Lurigt push returnerar ingenting i motsats till concat

