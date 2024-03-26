const myConst = 6;
let myLet = 4;

var myVar = 9;

console.log(myConst,myLet,myVar)

function example () {
    if(true){
        var variableVar = 'Je suis une variable var'
        let variableLet = 'Je suis une variable let'
        const variableConst= 'Je suis une constante'

        console.log("A l'intérieur du bloc !")
        console.log("variable var",variableVar)
        console.log("variable let",variableLet)
        console.log("variable const",variableConst)

    }

    console.log("A l'exté. du bloc !")
    console.log("variable var",variableVar)
    // console.log("variable let",variableLet)
}

example()

console.log('_________________________________________')

var x = 10;
console.log("1",x);

{
    let x =2;
    console.log("2", x);

    var y = 5;
    const z = 6;
}

console.log("3:", x)
console.log("4:", y)
console.log("5:", z)