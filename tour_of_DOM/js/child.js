// 1.create element and set innerText or innerHTML

const newChild = document.createElement('li')
newChild.innerText = 'Vinicius'

// 2.find the parent where you will add the child

const playersList = document.getElementById('player-list')

// 3.append the child to the parent

playersList.appendChild(newChild)