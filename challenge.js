var p = {"name":"rusty","room":"kitchen","weapon":"candlestick","arrayis":["a","b"]}
let {weapon:x,room:y}=p;
console.log(x,y)
for (let key in p)
{   if (typeof(p[key])=="object")
    {console.log("arrray is ",p[key])}
   else {
    console.log(typeof(p[key]),"primitive value :",key,' :',p[key]);
   }
    
    
}
