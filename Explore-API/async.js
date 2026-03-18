// const data = () =>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))

//     console.log("Hello")
//     console.log("true")
// }

// data()


const data = async() =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")

    console.log("Hello")
    const json = await data.json()
    console.log(json)
    console.log("true")
}

data()