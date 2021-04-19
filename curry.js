//implementing curry
const curry=(fn)=>
{
    return (arg)=> {
        return (arg2)=>{
            return fn(arg,arg2)
        }
    }
}
function affiche(a,b)
{
    console.log(a,b)
}


x=curry(affiche);
console.log(x)
x("haha")("lala")