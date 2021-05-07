/*personfunctions= 
{
    affiche:()=>{console.log(this)}
}
person = Object.create(personfunctions);
person.name="khalil"
person.affiche();      // this is the global object (window) because arrow function forces the this to be lexcically scoped which means
                      // the value of this will be set according to where the function is stored which is in global  and not according the left side of the dot (where it being run)




 personfunctions= 
 {
     affiche:function()
        {
           const aff=()=>                  //arrow function as said before forces the this variable to be lexically scoped and so when running the affiche function => new execution context
                                            // and in this execution context the this will hold the value of the object call the method affiche which is user in our case
                                            // and then the function aff is saved in the local memory of this execution context and then again new execution context when we run 
                                            // aff() function but since aff() function is an arrow function insted of assigning the window /glob to this variable it will be forced to be 
                                            //lexcially scoped which means this variable will hold the value of this=user1 since the aff function was stored in the local memory 
                                            //next to this=user1 (in the execution context of affiche()
                                            
                                            
             {                                   
               console.log(this)
             }
            aff()                          //other solutions instead of using arrow functions we can use  aff.call(this) which binds the this=user1 to the this 
                                          //in the execution context of aff().
                                          //or x=aff.bind(this) and then call x()
             
                            
        }
}
user = Object.create(personfunctions);
user.name="khalil"
user.affiche();
*/


function CreateUser(name,age)
{
  this.name=name;
  this.age=age;
} 

user= new CreateUser("khalil",22);                                  //so behind the hood the new keyword creates an empty object labled this 
console.log(user)                                                   //(that s why we wrote this.name when we assigned the properties) and it automatically returns that object
                                                      //in addition,it sets the __proto__property of the returned object (this ) (stored in variable user or another in our case)
                                                      // to the prototype property( prototype and not __proto__)  of the function CreateUser and that prototype propery is actually
                                                        //an empty object (don t forget that a function is acutally 2 parts : one part is the function and the other and object )
                                                        //we access the object part of the function with . and this is where we can add attributes and methods to a function
another= new CreateUser("ameur",26)                     //and thus we can store the methods of the contructor function in constructorfunction.prototype.methodname = functon()..
console.log(another)                                    // This will make all the objects created by the constructor function have access to the methods in prototype object of the 
                                                        //the constructor function 

                                                        //melekher fi __proto__ ta3  this object ili it s going to be returned automatically bech nelka reference lil 
                                                        // constructorfunction.prototype 