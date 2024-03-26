const persons = [
    { firstName : 'Malcolm', lastName: "Reynlods"},
    { firstName : 'Kaylee', lastName: "Frye"},
    { firstName : 'Jayne', lastName: "Cobb"}
]

const personsFullName = persons.map((user) => [user.firstName, user.lastName].join(" "))

console.log(personsFullName)

// Exercice : Faire une fonction qui :
    // - prend en paramètre un tableau
    // - retourne un tableau contenant les carrés des valeurs du tableau passé en paramètre

    // ==> si j'ai [1,2,3,4] --> je veux comme retour -> [1,4,9,16]

    const chiffres = [1,2,3,4]

    console.log("_______________map()_______________")

   function exoFunction (myArray) {
        return myArray.map( element => element * element)
   }

   const exoFunction2 = (myArray) => {
        return myArray.map( element => element * element)
   }

   const exoFunction3 = (myArray) => myArray.map( element => element * element)

   console.log(exoFunction(chiffres))
   console.log(exoFunction2(chiffres))
   console.log(exoFunction3(chiffres))

// Méthode flatMap
console.log("_______________flatmap()_______________")

let result = chiffres.flatMap( x => [x*x])
let result2 = chiffres.map( x => [x*x])

console.log(result)
console.log(result2)