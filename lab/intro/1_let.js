
/*
 * Ex 1: Med let så sker ingen hoisting av variabler.
 * Försäkrar att variabler deklareras innan de används.
 * Testa även att deklarera samma variabel flera gånger med let (kastar fel).
 * */
console.log(productId);
var productId = 12; //vs let productId = 12;


/*
 * Ex 2: Med let så får vi block scope variables
 * Konsollen skriver ut 12
 * */

let productId = 12;
{
    let productId = 2000;
}
console.log(productId);

/*
 * Ex 3: Kastar ett fel. Med let så kommer lokala variabler att förstöras när blocket är slut
 * */
{
    let productId = 2000;
}
console.log(productId);

/*
 * Ex 4: Användning av konstanter
 * */
const FOO = 5;
FOO = 12;
console.log(FOO)



