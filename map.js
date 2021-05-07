const mapcollection = new Map()
mapcollection.set('name',"khalil");
console.log(mapcollection.get("name"));
mapcollection.set('age',22);
console.log(mapcollection.get("age"));
mapcollection.set("age",24)
console.log(mapcollection.get("age"));
mapcollection.delete("name")
console.log(mapcollection.get("name"));
x={"name":"ahmed","age":"30"}
mapcollection.set(x,{"message":"hello"})
console.log(mapcollection.get(x))
mapcollection.forEach((value,index)=>{console.log("the index is ",index,"the value is ",value)})