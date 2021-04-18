{
    
var first=function(){
    var a="ahmed";
console.log("khalil")
second();
}
var second=function()
{
    console.log(a);
}

console.log(second)
first(); // a is not defined
}

{
    var a="ahmed";
    var first=function(){
        
    console.log("khalil")
    second();
    }
    var second=function()
    {
        console.log(a);
    }
    
    console.log(second)
    first(); // function then khalil then ahmed
    }