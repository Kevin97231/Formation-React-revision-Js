function helloName(name) {
    console.log("Hello " + name)
}

helloName('Kévin')

const myArray = [12,9,14,16]

function moyenne (tableau){
    let x = 0;
    let nbrElements = 0;

    for(let i = 0; i < tableau.length; i++){
        x = x + tableau[i];
        nbrElements ++;
    }

    return x / nbrElements;
}

let moy = moyenne(myArray)
console.log(moy)

// Depuis ES6

const helloName2 = (name) => {
    console.log("Hello " + name)
}

helloName2('Kévin')

const hello = () => {
    console.log("Hello")
}

hello()

const moyenne2 = (tableau) => {
    let x = 0;
    tableau.forEach(element => {
        x += element
       // x = x + element
    });

    return x / tableau.length
}

console.log(moyenne2(myArray))
console.log('_____________SOMME______________')

const somme = (a,b) => a + b;

const somme2 = (a,b) => {return a + b};

console.log(somme(1,2))
console.log(somme2(1,2))

console.log('_____________SOUSTRACTION______________')

// Avec valeur par défaut
const soustraction = (a=16, b) => a - b;

console.log(soustraction(10,5))

// A utiliser !
console.log(soustraction(undefined,5))

// Si je met 'null' -> le paramètre sera définit à 0
console.log(soustraction(null,5))


// Exemple avec un string 'null'
let Martin = null
const concat = (a = "Toto", b) => a + b;
console.log(concat(null,Martin))