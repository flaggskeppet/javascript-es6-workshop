/*
* Spread operatorn används för att konstruera(skapa) och destruera(bryta upp) arrayer.
* Ex 1: categories är en Rest Parameter som använder en spread Operator.
* Samlar ihop resterade argument och skapar en array
* */

var showCategories = function(productId, ...categories) {
  console.log(categories instanceof Array);
  console.log(categories);
};

showCategories(123, 'foo', 'bar');
// and
showCategories(123);


/*
* Ex 2: Spread operator. Tar en array och sprider ut den till seperata värden
* syntax: Math.max(1,5,8,4,2)
* Använda Math.max på arrayer utan apply
* Tidigare fick man göra så här på arrayer: Math.max.apply(null, minArray);
* */
var prices = [12,20,18];
var maxPrice = Math.max(...prices);
console.log(maxPrice);

//eller
var max = Math.max(...'12345');
console.log(max);





