const words = ['spray', 'elite','exuberant', 'destruction', 'present'];

const wordsFilter = words.filter( function(word) {
    return word.length > 6
} );

const wordsFilter2 = words.filter((word) => word.length > 6 && word.length < 10)

function wordsFilterwithIf(word) {
    if(word.length > 6){
        return true
    } else {
        return false
    }
}

const wordsFilter3 = words.filter(wordsFilterwithIf)

console.log(wordsFilter)
console.log(wordsFilter2)

console.log(wordsFilter3)

function wordsFilterwithTernaire(word) {
    return word.length > 6 ? true : false;
}


// Exemple: recherche avec une entrée utilisateur

const filtreTexte = (entreeUtilisateur) => words.filter( (word) => word.indexOf(entreeUtilisateur) !== -1);

const filtreTexte2 = (entreeUtilisateur) => {
    return words.filter((word) => 
        word.indexOf(entreeUtilisateur) !== -1
    );
}

console.log('filtre texte: ', filtreTexte('p'))