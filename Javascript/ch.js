
function createSuspectObject(name)
{
    return 
    {
        "name" : name,
        "color" : name.split(' ')[1],
        speak() {console.log("my name is "name)}
    }
}