const employee = {
    name : "John", 
    1 : "Desk One",
    family : {
        father : "Richard",
        mother : {
            name : "Jane",
            age : 55
        }
    },
    position : "Software Engineer",
};

const value = employee.name;
console.log(employee.family?.mother?.name);