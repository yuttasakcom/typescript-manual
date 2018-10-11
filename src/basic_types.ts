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
let hobbies: any[] = ['Cooking', 'Sports']
hobbies = [100]

// tuples
let address: [string, number] = ['Bangkok', 14]

// enum
enum Color {
  Gray,
  Green,
  Blue
}

let myColor: Color = Color.Green
console.log(myColor)

// any
let car: any = 'BMW'
console.log(car)
car = { brand: 'BMW', series: 3 }
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
let userData: { name: string; age: number } = {
  name: 'Yo',
  age: 35
}

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data
  }
}

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] }
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
function neverReturns(): never {
  throw new Error('An error!')
}

// Nullable Types
let canBeNull: number | null = 12
canBeNull = null
let canAlsoBeNull
canAlsoBeNull = null
