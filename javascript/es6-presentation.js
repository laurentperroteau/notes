/**
 * Copy => Paste all in DevTools console
 * -------------------------------------
 *
*/


// Variable (Edge+)
const COUCOU = 'Coucou'
// COUCOU = 'TODO'

let a = 3
let b = 4

console.log('%c=======================================', 'color: red')
console.log('%cES6 arrow function', 'color: red')

// Arrow function
let addition = (a, b) => a + b

console.log( addition(a, b) )

console.log('%c=======================================', 'color: red')
console.log('%cES6 loop', 'color: red')

// Loop
let myArray = ['one', 'two', 'three']
myArray.push('four')
myArray.name = 'mon array' // array converting in object
let myObj = { one:'first', two:'second', three:'third' }

console.log( 'myArray', myArray )

console.log( 'myObj', myObj )

/*console.log('%cFor in', 'color: green')

// Ne pas utiliser (array et obj)
for (let index in myArray) {
  console.log( index, typeof index ) // 1, 2, 3, name
  console.log( myArray[index] )
}*/

console.log('%c-------------', 'color: green')
console.log('%cforEach array', 'color: green')

// IE9+ (uniquement array)
myArray.forEach( (value, index) => {
    console.log( index, typeof index )
    console.log( value )
})

console.log('%c-------------', 'color: green')
console.log('%cforEach obj', 'color: green')

// for object
Object.keys(myObj).forEach( (value) => {
    console.log( myObj[value])
    console.log( value )
})

console.log('%c-------------', 'color: green')
console.log('%cFor of', 'color: green')

// Edge+ (array)
for (let value of myArray) {
  console.log(  value )
}

console.log('%c-------------', 'color: green')
console.log('%cFor of DOM', 'color: green');

// for DOM
(function() {
    for (let node of document.querySelectorAll('li')) {
        console.log( node.innerHTML )
    }
})()



// Classes ES6 (Edge+, Safari 9)
// ===========

console.log('%c=======================================', 'color: red')
console.log('%cES6 class', 'color: red')

class Person {

    constructor(name = 'Pierre', surname = 'Martin' ) {

        this.name = name
        this.surname = surname
    }

    bonjour() {
        return `${COUCOU}, je m'appelle ${this.name} ${this.surname}`
    }

    static whoIAm() {
        return 'Person'
    }
}

let PersonLambda = new Person()

console.log( PersonLambda.bonjour() )

let PersonJose = new Person('Jose', 'Bové')

console.log( PersonJose.bonjour() )

console.log( Person.whoIAm() ) // static method

class Enfant extends Person {

    constructor(name = 'Théo', surname = 'Durant', age = 10 ) {

        super(name, surname)

        this.age = age
    }

    addAge( age ) {
        this.age = age
    }

    getAge() {

        return `${this.bonjour()} et j'ai ${this.age} ans`
    }
}

let EnfantLambda = new Enfant()

EnfantLambda.addAge( 12 )

console.log( EnfantLambda.getAge() )

let EnfantEnzo = new Enfant('Enzo', 'Michellet', 10)

console.log( EnfantEnzo.getAge() )

console.log('%cES6 class result', 'color: red')
console.log( PersonJose )
console.log( EnfantEnzo )
console.log('%c=======================================', 'color: red')



// ES5 version
// ===========

console.log('%c=======================================', 'color: red')
console.log('%cES2015 class', 'color: red')

function PersonEs5(name, surname) {

    this.name = name || 'Pierre'
    this.surname = surname || 'Martin'
}

PersonEs5.prototype.bonjour = function() {

    return `${COUCOU} Es5, je m'appelle ${this.name} ${this.surname}`
}

console.log( 'PersonEs5', PersonEs5.prototype )

let PersonLambda2015 = new PersonEs5()

console.log( PersonLambda2015.bonjour() )

let PersonJose2015 = new PersonEs5('Jose', 'Bové')

console.log( PersonJose2015.bonjour() )

let extendClass = function(child, parent) {
    var Surrogate = function() {}
    Surrogate.prototype = parent.prototype
    child.prototype = new Surrogate()
}

function EnfantLambda2015(name, surname, age) {

    this.name = name || 'Théo'
    this.surname = surname || 'Durant'
    this.age = age || 10
}

extendClass( EnfantLambda2015, PersonEs5 )

EnfantLambda2015.prototype.addAge = function( age ) {
    this.age = age
}
EnfantLambda2015.prototype.getAge = function () {

    return `${this.bonjour()} et j'ai ${this.age} ans`
}

let EnfantTheo2015 = new EnfantLambda2015()

EnfantTheo2015.addAge( 12 )

console.log( EnfantTheo2015.getAge() )

let EnfantEnzo2015 = new EnfantLambda2015('Enzo', 'Michellet', 10)

console.log( EnfantEnzo2015.getAge() )

console.log('%cES215 class result', 'color: red')
console.log( PersonJose2015 )
console.log( EnfantEnzo2015 )
console.log('%c=======================================', 'color: red')


console.log('%c=======================================', 'color: red')
console.log('%cPromise', 'color: red')

// Promise (Edge +)

let xhrClient = new XMLHttpRequest()
let uri = 'https://jsonplaceholder.typicode.com/posts/1'
xhrClient.open( 'GET', uri )
xhrClient.send()

let promise = new Promise( (resolve, reject) => {

    xhrClient.onload = function() {

        if( this.status >= 200 && this.status < 300 ) {
            resolve( this.response )
        }
        else {
            reject( this.status )
        }
    }

    xhrClient.onerror = function() {
        reject( this.statusText )
    }
})

promise
    .then( (data) => {
        console.log( data )
    })
    .catch( (error) => {
        console.error( error )
    })
