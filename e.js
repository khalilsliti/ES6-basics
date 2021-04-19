
const count = (n) => 
{
    return {
        increm: ()=>{n++;console.log(n)},
        decrem: ()=> {n--;console.log(n)}
    };
};
a=count(7)
b=count(7)

const affiche = (mes)=> {
       const aff=()=>{return mes=mes+'A'}
       return aff;
}
x=affiche("heyyy")
console.log(x())
console.log(x())
console.log(x())
console.log(x())

