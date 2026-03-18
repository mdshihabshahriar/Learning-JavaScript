// const person = {
//     name : "Selim",
//     fruit : "Dalim",
//     dish : "Halim",
//     friends : ["Alim", "Kolim", "Lamim"],
//     isRich : false,
//     money : 35000,
// }
// console.log(person);

// const personJSON = JSON.stringify(person);
// console.log(personJSON);

// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data))

// const loadData = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data))
// }

// const loadPost = () =>{
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         displayPost(data)
//     })
// }

// const displayPost = (posts) =>{
//     posts.forEach(post => {
//         console.log(post)
//     });
// }