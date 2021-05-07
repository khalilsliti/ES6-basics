class Person 
{
    constructor(name,age)
    {
        this.name=name,
        this.age=age
       
    }
       affiche=function(){console.log("le nom est ",this.name,"l'age est",this.age)}
}

p = new Person("khalil",22);
p.affiche()


class Admin extends Person 
{
    constructor(name,age,email,comment)
    {
        super(name,age);        //
        this._email=email;                // using dash before property for getters and setters when we write a.email the getter will be declenched automatically 
                                            //(if we don t put dash we will have an infinite loop)
        this._comment=comment               // when a.comment="hahah" the setter will be declenched auto 
        


        Admin.score=20;  // declaring a static property which will be called with the class name same as static method
    }
    get email(){return `l email est : ${this._email}`}
    get comment(){return `le commentaire est : ${this._comment}` }
    static whoamI(){console.log("we don t know")}    //static methods are called with the class Name 
}
a=new Admin("khalil",22,"khalil@gmail.com","hahaha u nailed it bro ");
a.affiche()
console.log(a.email);
console.log(a.comment);
Admin.whoamI()
console.log(Admin.score);