function log(msg){
    document.writeln('<h1>' + msg + '</h1>');
}

/*
* Ett gäng nya metoder på String objektet
* */

let greeting = "Hello World!";

log(greeting.startsWith('Hello'));
log(greeting.endsWith('World!'));
log(greeting.includes('llo'));
log("Surfs \u{1f3c4} up!"); // Ny hantering av unicode. Tillåter hexadecimala unicode codepoints


/*
* Ett gäng nya metoder på Number objektet
* Globala funktioner har ersatts med metoder. Globala funktioner kommer nog tas bort.
* */
let num = '4.5';
log(Number.parseFloat(num)); // Även parseInt och isNaN
log(Number.isInteger(num));
