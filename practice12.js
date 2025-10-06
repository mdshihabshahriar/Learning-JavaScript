let Data = "Secret information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data = ",Data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        Data = "Some new value"
    }
}

let student1 = new User("Shihab","Shihab@gmail.com");
let student2 = new User("Shahriar","Shahriar@gmail.com");

let admin = new Admin("admin","admin@gmail.com");