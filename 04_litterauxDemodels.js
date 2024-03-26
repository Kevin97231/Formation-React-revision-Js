const firstName = 'John'
const LastName = 'Doe'

const message = `Bonjour ${firstName} ${LastName}`
const message2 = "Bonjour " + firstName + LastName

console.log(message)
console.log(message2)

const array = [1, 2, 3, 4]

const sumArray = `La somme de l'ensemble des éléments de mon tableau est ${array.reduce((total, currentValue) => total + currentValue)}`

console.log(sumArray)