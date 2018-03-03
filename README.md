# TypeScript Manual

## Table of Contens
  - [Basic Types](#basic-types)
  - [Classes](#classes)
  - Interfaces
  - Generics
  - Type Inference
  - Type Compatibility
  - Advanced Types
  - Symbols
  - Iterators and Generatorss
  - Modules
  - Namespaces
  - Namespaces and Modules
  - Module resolution
  - Declaration Merging
  - JSX
  - Decorators
  - Mixins
  - Triple-Slash Directives

## Basic Types
```typescript
// string
let myName: string = 'Yo'
console.log(myName)

// number
let myAge: number = 35
console.log(myAge)

// boolean
let hasHobbies: boolean = false

// assign types
let myRealAge: number
myRealAge = 35

// array
let hobbies: any[] = ["Cooking", "Sports"]
hobbies = [100]

// tuples
let address: [string, number] = ["Bangkok", 14]

// enum
enum Color{
    Gray,
    Green,
    Blue
}

let myColor: Color = Color.Green
console.log(myColor)

// any
let car: any = 'BMW'
console.log(car)
car = {brand: 'BMW', series: 3}
console.log(car)

// function
function returnMyName(): string {
    return myName
}

// void
function sayHello(): void {
    console.log('Hello')
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2
}

// function types
let myMultiply: (a: number, b: number) => number
myMultiply = multiply

// objects
let userData: { name: string, age: number} = {
    name: 'Yo',
    age: 35
}

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data
    }
}

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]}
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data
    }
}

// union types
let myRealRealAge: number | string = 35
myRealRealAge = '35'

// check types
let finalValue = 'A string'
if (typeof finalValue == 'string') {
    console.log('Final value is a string')
}
if (typeof finalValue == 'number') {
    console.log('Final value is a number')
}

// never
function neverReturns():never {
    throw new Error('An error!')
}

// Nullable Types
let canBeNull: number | null = 12
canBeNull = null
let canAlsoBeNull
canAlsoBeNull = null
```

## Classes
```typescript
// class
class Person {
    name: string
    private type: string
    protected age: number = 27

    constructor(name: string, public username: string) {
        this.name = name
    }

    printAge(){
        console.log(this.age)
    }

    setType(type: string){
        this.type = type
        console.log(this.type)
    }
}

const person = new Person('Person', 'General')
console.log(person.name, person.username)
person.printAge()
person.setType('Cool guy')

// Inheritance
class Yo extends Person {
    constructor(username: string){
        super('Yo', username)
        this.age = 35
    }
}
const yo = new Yo('Yuttasak')
console.log(yo.printAge())

// Getters & Setters
class Plant {
    private _species: string = 'Default'

    get species() {
        return this._species
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value
        } else {
            this._species = 'Default'
        }
    }
}

let plant = new Plant()
console.log(plant.species)
plant.species = 'AB'
console.log(plant.species)
plant.species = 'Green Plant'
console.log(plant.species)

// Static Properties & Methods
class Helpers {
    static PI: number = 3.14
    static calcCircumference(diameter: number) : number {
        return this.PI * diameter
    }
}

console.log(2 * Helpers.PI)
console.log(Helpers.calcCircumference(2))

// Abstract Classes
abstract class Project {
    projectName: string = 'Default'
    budget: number = 1000

    abstract changeName(name: string): void

    calcBudget(){
        return this.budget * 2
    }
}

class ITProject extends Project {
    changeName(name: string){
        this.projectName = name
    }
}

let newProject = new ITProject()
console.log(newProject)
newProject.changeName('Super IT Project')
console.log(newProject)

// Private constructors
class OnlyOne {
    private static instance: OnlyOne
    
    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One')
        }
        return OnlyOne.instance
    }
}
// let wrong = new OnlyOne('The Only One')
let right = OnlyOne.getInstance()
console.log(right.name)
// right.name = 'Something else'
```