const game = {
    'suspects': [
        {
        name:"Rusty",
        color:"orange" }
        , 
        {
            name:"miss scarlet",
            color:"red"
        }
    ]
}
var foo=function()
{
    for (var i=0 ; i<game.suspects.length; i++)
    {
        console.log("outerloop")
      
        for (var keyy in game.suspects[i])
        {  console.log("inner loop")
            if (game.suspects[i][keyy]==="Rusty")
            console.log("foundthem");
            else 
            console.log("next time");
        }
    }
}
foo();