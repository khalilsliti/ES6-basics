
const reduce = function(list,callback,initial)
{   var memo=initial;
    for (let i=0;i<list.length;i++)
    {
        if (i===0 && initial===undefined)
        {
            memo=list[0];
        }
        else
        {
            memo=callback(memo,list[i]);
        }
    }
    return memo;
}
x=reduce([1,2,30],(a,b)=>{return a +b})
console.log(x)