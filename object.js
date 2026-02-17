const person = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu','Amir','Salman','Raz'],
    movies: [{name: 'no. 1', year: '2015'}, {name: 'king khan', year: '2018'}],
    act: function(){
        console.log('Acting like Sakib Khan')
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2025,
        manufacture: {
            name: 'Tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
// console.log(student.car);

person.act();
// console.log(person);
