const student = {
    fullName : "Shihab Shahriar",
    marks : 94.4,
    printMarks : function () {
        console.log("Marks = ",this.marks);
    },
};

const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    },
};

const hasib = {
    salary: 50000,
};

hasib.__proto__ = employee;

class ToyotaCar {
    constructor(brand,mileage){
        console.log("Creating new objects");
        this.brand = brand
        this.mileage = mileage
    }

    start(){
        console.log("Start")
    }

    stop(){
        console.log("Stop")
    }

    // setBrand(brand){
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar("Fortuner",10);
console.log(fortuner);
// fortuner.setBrand = "Fortuner";


class Parents{
    hello(){
        console.log("Hello")
    }
}

class Child extends Parents{

}

let obj = new Child()

class Person{
    constructor(name){
        console.log("Enter parent constructor")
        this.spacies = "Homo sapiens"
        this.name = name
    }
    eat(){
        console.log("eat")
    }

    sleep(){
        console.log("sleep")
    }

    work(){
        console.log("Do nothing")
    }
}

class Engineer extends Person{
    constructor(name,branch){
        console.log("Enter child constructor")
        super(name);    // to invoke parent class constructor
        this.branch = branch;
        console.log("Exit child constructor")
    }
    work(){
        super.eat()
        console.log("Solve problems, build something")
    }
}

let engObj = new Engineer("Shihab","Chemical eng");