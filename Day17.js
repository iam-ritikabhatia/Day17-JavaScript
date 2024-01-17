/******************************** padEnd ********************************/

// It is used to make a specified length of a string using a specified pattern.

// Syntax

// console.log( "string".padEnd(padLimit(a number), "padString") )


/******************************** Example 01 ********************************/

let a = "Ramesh" // Here the length of a is 6.
console.log(a.padEnd(20, "$")) // This means make the length of a, 20 by adding $  at the start
// The output is $$$$$$$$$$$$$$Piyush


/******************************** Example 02 ********************************/

let b = "Ramesh" // Here the length of a is 6.
console.log(a.padEnd(20)) // In this case padLimit is defined but, padString is not defined, so defaulty spaces are added
// The output is              Ramesh Here spaces are added


/******************************** Example 03 ********************************/

let password = "Ramesh"

if (password.length == 15) { // This means if password length is 15
    console.log('Your password contains 15 charcters')
} else {
    password.padEnd(15, "*") // This will make the lenght of the password 15 buy adding *
    console.log('Your password does not contain 15 chacters so we added some more chacters into you password')
}


/******************************** repeat ********************************/

// It is used to repeat something.

// Syntax

// console.log( "string".repeat(count(a number)) )


/******************************** Example 01 ********************************/

let a = "Ram Sharma"
console.log(a.repeat(10))


/******************************** slice ********************************/

// It is used to divide a string into a slice using a range



let aLine = "Hello, My name is Ram Sharma"
console.log(aLine.slice(2, 4))