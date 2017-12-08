/*
 * I ES 5 så sattas inparametrar till undefined om de inte skickades in.
 * Nu kan man sätta default parametrar


 * Ex 1: Enkelt exempel
 * */
var getProduct = function(productId = 1000) {
    console.log(productId);
};
getProduct();

/* Ex 2: Sätta och utnyttje default parametrar
* */
var getProduct = function(productId = 1000, type = 'software') {
   console.log(productId + ', ' + type);
};

//Fråga, hur anropa den utan att sätta productId, men skriva över andra param med "hardware"?
getProduct(undefined, 'hardware'); // Obs! null fungerar inte här eftersom det är ett värde

/* Ex 3: Accessa andra funktionsparametrar från en defaultparameter
* */
var getTotal = function(price, tax = price * 0.24) {
   console.log(price + tax);
};
getTotal(5);

/* Ex 4: Accessa funktioner från en defaultparameter
* */
var generateBaseTax = () => 0.24;
var getTotal = function(price, tax = price * generateBaseTax()) {
   console.log(price + tax);
};
getTotal(5);




