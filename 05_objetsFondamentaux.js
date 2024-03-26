class Car {

    constructor(name, year){
        if(name === undefined || year === undefined){
            throw new Error("Les propriétés 'name' et 'year' doivent être définies")
        }
        this.name = name;
        this.year = year;
    }

    toString = () => `${this.name}, année: ${this.year}`;

}

const car1 = new Car('BMW', 1994)

console.log(car1.toString())
console.log(car1)


// try {
//     const car2 = new Car('Volvo') 
// } catch (error){
//     console.error(error.message)
// }

// En factorisant le try / catch
const createCar = (name, year) => {
    try{
        console.log(`Voiture ${name} ${year} créé`)
        return new Car(name, year)
    }catch (error){
        console.log(`Voiture ${name} ${year} NON CREE : ${error.message}`)
    }
}

let car2 = createCar('Peugeot', 2006)
let car3 = createCar(2006)

// let car2 = new Car('Peugeot', 206)


// Accès aux propriétés:

// Méthode 1:
console.log(car1.name)
console.log(car1.year)

// Méthode 2:
console.log(car2['name'])
console.log(car2['year'])


// Copier un objet

// Déconseillé -> on va créer un deuxième objet qui pointe sur les valeurs du premier
const car4 = car1;

console.log('car1: ', car1)
console.log('car4: ', car4)

car1.name = 'Renault'
car1.year = 2016

console.log('car1: ', car1)
console.log('car4: ', car4)

// Syntax pour copier un objet
const carCopie = Object.assign(car1)

// Sucre syntaxique
const person = {name: 'john', age: 30, city:'Berlin'}
const person2 = {...person}