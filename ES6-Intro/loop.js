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

for(const key in employee)
{
    const value = employee[key];
    console.log(key, value);
}