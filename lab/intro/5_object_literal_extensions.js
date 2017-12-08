/*
* EX 1. Object literals kan nu räkna ut var fält ska hämta sina värden ifrån.
* Hämtas från variabler i samma scope.
* */
var price = 5, quantity = 2;
var product = {price,quantity};
console.log(product);

/*
* EX 2. Lägg till funktionen "CalculateValue".
 * Kan nu definiera funktioner i object literals utan nyckelordet function.
* */
var price = 5, quantity = 2;
var product = {
    price, quantity,
    calculateValue() {
        return this.price * this.quantity;
    }
};
console.log(product.calculateValue());

/*
* EX 3. Vi kan använda uttryck som fältnamn i literals. Loggar "{foo:5}"
* */
var field = 'foo';
var price = 5;
var product = {
    [field]: price
};
console.log(product);

/*
* EX 4. ... eller skapa metoder med dynamiska namn i object literals
* */

var method = 'doIt';
var product = {
    [method + '_123'](){
        console.log("hello")
    }
};
product['doIt_123']();