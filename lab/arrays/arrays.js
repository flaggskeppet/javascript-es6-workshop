function log(msg){
    document.writeln('<h1>' + msg + '</h1>');
}

/*
* Arrays
* */
//let numbers = Array(4500); // ett numeriskt värde här sätter storleken på arrayen.
let numbers = Array.of(4500);
log(numbers.length);

let amounts = [100,200,300];
let salaries = Array.from(amounts, v => v+ 100); // skapar ny array och kör lambda för varje element
log(salaries)

