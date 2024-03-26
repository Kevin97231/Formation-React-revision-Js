const myArray = [1, 2, 3, 4]

// Somme ds tous les chiffres du tableau

const sumArray = myArray.reduce((total, currentValue) => total + currentValue, 0)

console.log(sumArray)

// __________________________________________________________________________________

const arrayAuCarre = myArray.reduce( (total, currentValue, index) => {
    console.log(`Index:  ${index}, carré: ${currentValue * currentValue}`)
    return total + currentValue * currentValue
}, 0);
console.log(arrayAuCarre)