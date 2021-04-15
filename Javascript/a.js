function createsuspect(name)
{
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {console.log("my name is ", name);}
    }
}
var suspects = ["scarlet alo","dele3 bye ","bati5 hey"]
var suspectsList = suspects.map(createsuspect)
suspectsList.forEach(function (value) {value.speak()})


const _ = {}
_.map = function (list,callback)
{
    var storage = [];
    _.each(list,function(v,i,list){
        storage.push(callback(v,i,list))
    })
    return storage;
}

