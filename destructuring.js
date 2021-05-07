arr=[1,2,3,4,5]
var [a,b,,d,e]=arr;
console.log(a,b,d,e);

var p = {
    "nom":"khalil",
    "age":22,
    "email":"khalil@gmail.com",
    "password":"haha"
}
var {nom,age,email,password}=p      //the rule is that the name of the variables should be the same as the name of the object properties 
                                        // this will auto set the property name to the variable name  etc
                                        //remark: in object it becomes {} and not []


console.log(nom,age,email,password);                           




var {nom:name,age:duree_de_vie,email:mail,password:pass}=p       // if we want to rename the variables so that they a a different name than the property 
console.log(name,duree_de_vie,mail,pass)



//[x]=[]
//console.log(x)  // should log undefined


 p = {
    "nom":"khalil",                                              //spread operator
    "age":22,
    "email":"khalil@gmail.com",
    "password":"haha"
}
const updateinfos= {
    "nom":"ameur",
    "age":26,
    "email":"ameur@gmail.com"
}     

const updatedperson={...p,...updateinfos}
console.log(updatedperson)

function show(...args){console.log(args)}    // ????
show(2,3)

x=[1,2,3]
y=[4,5,6]
z=[...x,...y]
console.log(z)
console.log(Math.max(...x))


// default value
function sayhi(x="hi"){console.log(x)}
sayhi()
sayhi("hello")

function showargs(arg1,arg2,arg3,...reste)
{
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log(reste)
}
showargs(1,2,3,4,5,6,8,9)