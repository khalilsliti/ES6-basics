
const ifelse = (condition,a,b) =>{
    
     condition ? a() : b();
};
const fn1=function (){console.log(true);}
const fn2= function(){console.log(false);}

ifelse(false,fn1,fn2); 
var n=5;
var increment=()=>{
n=n+1;
}
increment(n)
console.log(n)
increment(n)
console.log(n)
increment(n)
console.log(n)
var decrement=(n)=>{
    return n-1;
}
var square=(n)=>{
    return n*n;
}
var nomath=(n,callback)=>{
    return callback(n);
}

x=nomath(5,decrement);
console.log(x);


var fruits =["khalil","hana","ahmed","baha","yassine","zormati"];
arr= fruits.slice(4,5);
console.log(arr) 