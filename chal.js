var suspects = 
[
    {
        name:"Rusty",
        color:"orange"
    },
    {
        name:"Miss Scarlet",
        color:"red"
    }
]
function foo()
{
    for (var i in suspects)
    {
        for (var j in suspects[i])
        {
            if (suspects[i][j]==='red')
            {var a=suspects[i][j]}
            if (suspects[i][j]==='orange')
            {var b=suspects[i][j]}
        }   
    }
    console.log(a,b)
}

foo();
var [{color: firstColor}, {color:secondColor}]=suspects;
console.log(firstColor,secondColor);