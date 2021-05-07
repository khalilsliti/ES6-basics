/*
arr=Array.from("123456789")
console.log(arr)
b=Array.from(arr,(element)=>{return element+"h"})

console.log(b)


c=Array.from(arr,element=>{return element*2})
d=c.filter((element)=>{return element <10})
console.log(c)
console.log(d)
console.log(d.every((element)=>{return element<10}))

console.log(d.find((element)=>{return element >6}))    // returns the first element sup to 6
console.log(d.indexOf(6,3))  // returns the index of 6 and starts searching from position 3 


person = new Object()
console.log(person);



person = new Object({"nom":"sliti","prenom":"khalil"})

console.log(chainejson=JSON.stringify(person))           // converting the object to a string in  JSON format 
console.log(copyofperson=JSON.parse(chainejson)); // restoring an object from a string (JSON format )



console.log(square(2));                            // When declarting the function like this all the function is going to be hoisted (function name and the code of the function is 
                                                    //going to be hoisted)
function square(x){return x*x};                    // and that's why the console.log(square(2));     worked fine even though the function is declared after






console.log(multiplybymyself(2));                // When declaring the function with the var keyworkd only the name of the variable which holds the function is going to be 
var multiplybymyself= function(y){return y*y};   // to be hoisted and thus multiplybymyself will have the value undefined




console.log("bonjour");
console.log(a=3);
(function sayx(x){console.log(x)})("hi");



function Voiture()
{
    this.kilometers=10;
    console.log(this)
    console.log(this.kilometers)
}
new Voiture()
*/

