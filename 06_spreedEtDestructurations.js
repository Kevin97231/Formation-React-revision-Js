// Spreed operator

const numbersOne = [1, 2, 3]
const numbersTwo = [4, 5, 6]

const numbersCombined = [...numbersOne, ...numbersTwo]
// est égal à [ 1, 2, 3, 4, 5, 6 ]
console.log(numbersCombined)

const [one, two, ...rest] = numbersCombined;

console.log(`one: ${one}, two: ${two}, rest: ${rest}`)


// Destructuration: avec les tableaux
const names = ['Jonhy', 'Mickael']

const [name1, name2] = names

// Equivalent: 
// const name1 = names[0]
// const name2 = names[1]

console.log('name1: '+ name1 + ' name2 :' + name2)

const calculate = (a, b) => {
    const add = a + b;
    const substract = a - b;
    const multiply = a * b
    const divide = a / b

    return [add, substract, multiply, divide]
}

const [add, substract, multiply, divide] = calculate(4,7)

const [somme] = calculate(4,7)
const [,,,division] = calculate(4,7)

// Destructuration: avec les objets
const person = {name: 'john', age: 30, city:'Berlin'}
const {name, city} = person

// Equivalent -> à la ligne précédente: 
// const name = person.name
// const age = person.age
// const city = person.city

console.log(`nom: ${name}, ville: ${city}`)

const {name: nom} = person;

console.log('nom ->' + " " + nom)

const personInfo = ({name, age}) => {
    console.log(`${name}, ${age} ans`)
}

personInfo(person)