/*
 * Ex 1: Deklarera en function med arrow operator (eller "Fat arrow symbol"):
 * En "Arrow Function"
 * Uttryck som skrivs på en rad behöver inte använda return.
 * */
var getPrice = () => 25;
console.log(typeof getPrice);
console.log(getPrice())

/*
 * Ex 2: Deklarera en function med ett argument (man kan utelämna parantesen). Obs att man inte kan radbryta efter count
 * */
var getPrice = count => count * 5.50;
console.log(getPrice(10));

/*
 * Ex 3: Arrow function som tar två argument
 * */
var add = (a, b) => a + b;
console.log(add(10, 5));

/*
 * Ex 4: Arrow function bestående av flera rader.
 * Eftersom vi deklarerar ett block med {} krävs return
 * */
var getPrice = (count, tax) => {
    var price = count * 5.50;
    price *= (1 + tax);
    return price;
};
console.log(getPrice(10, 0.7));

/*
 * Ex 5: Event handler. This i första fallet loggar objectet som fångar eventet (document).
 * I andra fallet loggas window
 * eftersom fat arrow function inte skapar ett eget scope.
 * */
document.addEventListener('click', function(){
    console.log(this);
});
document.addEventListener('click',() => console.log(this));

/*
 * Ex 6: Objekt med funktion
 * Notera vad this pekar på.
 * */
var invoice = {
    number: 123,
    process: function() {
     console.log(this); // this pekar på objektet det ligger i.
    }
};
invoice.process();

var invoice = {
    number: 123,
    process: () => console.log(this) // this pekar på window objektet.
};
invoice.process();

/*
 * Ex 8: Fat arrow funktioner har inget prototype property
 * */
var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty('prototype'))


