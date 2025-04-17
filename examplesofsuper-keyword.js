Examples : 
1)Calling Constructor of Parent class using super keyword : 
let DATA = "Edited Information!";
class Admin{
    constructor(name){
        console.log("I am in a parent constructor");
        this.name = name;
    }
}
class User extends Admin{
    constructor(){
        console.log("Before calling parent constructor");
        super();
        console.log("I am in a child constructor");
    }
    editData(){
        console.log("data = ",DATA);
        }
}
let Obj = new User("Wajiha");
)Calling method of Parent Class using Super keyword : 
let DATA = "Edited Information!";
class Admin{
    constructor(name){
        console.log("I am in a parent constructor");
        this.name = name;
    }
    viewData(){
        console.log("I am inside parent method");
    }
}
class User extends Admin{
    editData(){
        console.log("Before calling parent method");
        super.viewData();
        console.log("I am inside child method");
        console.log("data = ",DATA);
        }
}
let Obj = new User("message");
