collection= new Set()
console.log("size of collection is ",collection.size)
collection.add(1)
console.log("size of collection is ",collection.size)
collection.add(2)
console.log("size of collection is ",collection.size)
collection.add(3)
console.log(collection)
console.log("size of collection is ",collection.size)
console.log(collection.has(2))
console.log(collection.has(0))
collection.delete(2)
console.log(collection.has(2))
console.log(collection)