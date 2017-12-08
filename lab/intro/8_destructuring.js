/*
* Desctructuring innebär att man bryter ner arrayer till enskilda värden
* Ex 1
* */
var numbers = [1,2,3];
var [monday,tuesday,wednesday] = numbers;
console.log(tuesday);

/*
* Ex 2
* Desctructuring kan användas ihop med rest parameters
* Lägger första värdet i en variabel och resten av arrayen i en annan.
*
* */
var numbers = [1,2,3];
var [monday, ...others] = numbers;
console.log(others);

/*
* Desctructuring kan användas i signaturen på funktioner
* Funktionen tar en array och dekonstruerar den
* Ex 3
* */
function doIt([a,b]) {
    console.log(b)
}
doIt([12,23]);

/*
* Man kan även dekonstruera object literals
* Ex 4
* */

var person = {name:"John Doe", age:45};
var {name, age} = person;
console.log(name)

/*
* Man kan även speca nya namn när man dekonstruerar object literals
* Ex 5
* */

var person = {name:"John Doe", age:45};
var {name:namn, age:alder} = person;
console.log(alder)

/*
* Dekonstruktion av en sträng. Utskrift med en object literal
* Ex 6
* */

let[first, second] = 'AB';
console.log(`first is ${first} and second is ${second}`);
