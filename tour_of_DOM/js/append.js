// 1. parent node
const mainContainer = document.getElementById('main-container')

// 2. create child node
const placeSection = document.createElement('section')

// create h1
const h1 = document.createElement('h1')
h1.innerText = "Places I Want To Visit"
placeSection.appendChild(h1)

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'Bandarban'

const li2 = document.createElement('li')
li2.innerText = "Cox's Bazar"

ul.appendChild(li1)
placeSection.appendChild(ul)

ul.appendChild(li2)
placeSection.appendChild(ul)

// 3. append places section to the main container
mainContainer.appendChild(placeSection)


// easier to create HTML
const bookSection = document.createElement('section')
bookSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
</ul>
`
mainContainer.appendChild(bookSection)