var square = (x) => x * x
console.log(square(5))

var user = {
    name: 'Marcus',
    sayHi: () => {
        console.log(`Hi. My name is ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi. My name is ${this.name}`)
    }
}

user.sayHiAlt(1,2,3)