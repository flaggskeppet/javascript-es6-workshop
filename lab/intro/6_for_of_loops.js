/**
 * Ex 1: Man kan loopa igenom alla "iterables", t ex arrayer med for of loopen
 */

var categories = ["foo", "bar", "baz"];
for(var item of categories){
    console.log(item)
}

/**
 * Ex 2: Man kan även loopa strängar med for..of
 */

var letters = "abcdefg";
for(var item of letters){
    console.log(item)
}
