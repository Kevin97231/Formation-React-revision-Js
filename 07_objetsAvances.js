const book1 = {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald"
};
const book2 = {
    title: "The GeeksforGeeks",
    author: "Geek"
};

const myLibrary = {
    name: "My library",
    books: [book1, book2],

    addBook: function (book) {
        this.books.push(book)
    },

    // Fonction qui affiche les livres
    displayBooks: function () {
        console.log(`Livre dans '${this.name}': `)
        this.books.forEach((book, index) => {
            console.log(
                `${index + 1}. Titre: ${book.title}, Auteur: ${book.author}`
            )
        })
    }
}

// Ajouter des livres:
const book3 = {
    title: "2023",
    author: "George Orwell"
}

myLibrary.addBook(book3);
myLibrary.displayBooks();


// Approche fonctionnelle

function Players(name, age){
    this.name = name;
    this.age = age;
}

const player1 = new Players('Kumar', 31)
const player2 = new Players('Bob', 28)

const team = {
    name: "blue team",
    players: [player1, player2],

    addPlayer: function (player) {
        this.players.push(player)
    },

    removePlayer: function (playerName) {
        const indexToRemove = this.players.findIndex( (player) => player.name === playerName);
        if (indexToRemove !== -1){
            this.players.splice(indexToRemove, 1)
        }
    },

    displayTeam: function() {
        console.log(`Team: ${this.name}`);
        console.log(this.players)
        
        this.players.forEach((player, index) => {
            console.log(`${index + 1}. Name: ${player.name}, Age: ${player.age}`)
        });
    }
}

const player3 = new Players('Raj', 32);

team.addPlayer(player3)
team.displayTeam()

team.removePlayer('Bob')
team.displayTeam()


// __________________________________________________________________________Objets avancés_______________________________________________________________________

console.log('_______________Héritage_______________')

class Car {
    constructor(name){
        this.name = name;
    }

    present() {
        return `I have a ${this.name}`
    }
}

class Model extends Car {
    constructor(name, model){
        super(name);
        this.model = model;
    }

    show() {
        return this.present() + ", it's a " + this.model;
    }

    // Redéfinir la méthode parent
    present() {
        return "Je suis le present redéfinit par l'enfant !"
    }

}

let myCar = new Model("Ford", "Mustang")

console.log(myCar.present())
console.log(myCar.show())


// AVEC ENCAPSULATION

class Person {
    #name;
    #age;

    constructor(name, age){
        this.#name = name;
        this.#age = age;

        
        // this.age = age;  --> Si je veux utiliser le setter pour vérifier l'âge 
    }

    get name() {
        return this.#name;
    }

    set name (newName) {
        this.#name = newName
    }

    get age() {
        return this.#age
    }

    set age (newAge) {
       if (newAge > 0 && newAge < 99) {
        this.#age = newAge;
       }else {
        console.error("L'âge doit etre compris entre 0 et 99 ans")
       }
    }

    Hello() {
        return `Hello, my name is ${this.name}. I'm ${this.age} yo`
    }

}

const person1 = new Person('Jean', 65)

// Ca ne fonctionne pas car les propriétés sont privées
// console.log(person1.#name)

console.log(person1.name)
person1.name = 'Toto'
console.log(person1.name)

// Redéfinition de méthodes avec l'héritage

class Ninja extends Person {
    #speciality

    constructor(name, age, speciality){
        super(name, age)
        this.#speciality = speciality
    }

    get speciality(){
        return this.#speciality
    }

    Hello(){
        const helloFromParent = super.Hello()
        return helloFromParent + 'and my speciality is '+ this.speciality
    }

}

const ninja = new Ninja('Bruce', 22, 'Karate')

console.log(ninja.Hello())