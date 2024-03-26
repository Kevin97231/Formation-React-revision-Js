let myArray = [];
let myArray2 = ['Riri', ['Fifi','Toto'], 'Loulou']

let myArray3 = new Array(5)

console.log(myArray,myArray2,myArray3)

// Ajouter d'un élément
console.log("_______________Ajout d'un élément_______________")

myArray.push('toto')
myArray2.push('toto')
myArray3.push('toto')

console.log(myArray,myArray2,myArray3)

// Supprimer un élément

// Paramètre: slice(a, b) -> a: l'index de premier élément à supprimer ; b: le nbr d'éléments à supprimer
console.log("_______________Suppression d'un élément_______________")

// Je supprime le deuxième élément
myArray.splice(1,1)
myArray2.splice(1,1)
myArray3.splice(1,1)

console.log(myArray,myArray2,myArray3)

// Parcourir le tabelau avec forEach
console.log("_______________ForEach_______________")

myArray2.forEach(element => console.log(element))

myArray2.forEach((element, index, arr) => console.log(index + ": " + element + " présent dans le tableau: "+ arr));

const nbrElements = (array) => {
    let y = 0;
    array.forEach( () => y++)
    return y;
}

console.log(nbrElements(myArray2))

// Boucle for of
for (element of myArray2){
    console.log(element)
}

