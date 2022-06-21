console.log("Hello, Universe");

const firstName = "Jillian";

let age = 26;

const isCool = true;

let height;

// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof isCool)
// console.log(typeof height)

let x = 4;
let y = 10;
let z = 7 + 9;

let sum = x + y + z;
console.log(sum);

let diff = (x + y) - (y + z);

// let string = 'Hello, Universe'

// let welcomeString = string + "" + firstName

let welcomeString = `Hello, Universe ${firstName}` // template literal or template string

console.log(welcomeString);

if (age > 20){
    console.log(`you can drink ${firstName}`)
} else {
    console.log('youve got some growing up to do')
}

let score = 78
let passing = 40

if (score >= passing) {
    console.log("you passed")
}else {
    console.log("try again")
}
