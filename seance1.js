 /*chaine="hello";
var i=0;
arret=0;
while (arret != -1)
{
    pos=chaine.indexOf('l',i);
    console.log(pos)
    arret=pos;
    i=pos+1;
}

chaine="          Hi kid               "
console.log(chaine);
console.log(chaine.trim())
x=true;
console.log(x)
console.log(x.toString(),typeof(x.toString()));
x=10;
console.log(x)
console.log(x.toString()); 
x="7"*"4";
console.log(x)
y=1-"x";
console.log("haha",!!y);
console.log(y)
console.log(Object(3));
console.log(Boolean([]))
x=3;
console.log(x+"")
x=""
console.log(!!x)

for (var i=0;i<2;i++)    //with let it dosen t show  outer console.log 
{console.log(i)}
console.log(i,"outer");

array=[1,2,3,4,5,6,7,8,9,10,function(){console.log(" i am khalil")}];
a=array.filter((element)=>{return element % 2 ===0})
console.log(a)
b=array.map((element)=>{return element*2})
console.log(b)
c=array.indexOf(6)
console.log(c)
array.splice(1,1);
console.log(array);
array.forEach((element,index)=>{
    if (typeof(element)=="function")
    {
        element();
    }
    else{
         console.log("this is not a function it is an element and it s value is ",element,"the index of the element is ",index)
        }
        }
    )
y=array.filter((element)=>{return typeof(element) != "function"})
console.log(y)
one=y.sort();
console.log(one)
two=y.sort((a,b)=>{return a-b});
console.log(two)
*/
age=20;
function write_name_for_dynamic_name_of_property(){
    return "khalil"
}
nom="khalil"
firstname="sliti"
const personne ={
    nom,
    firstname,
    [write_name_for_dynamic_name_of_property()+age]:22
}
console.log(personne)