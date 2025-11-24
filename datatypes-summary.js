//  primitive
//  7 types : String, Number,Boolean, null, undefined, Symbol, BigInt

//  Reference(Non-primitive)
//  Arrays, Objects, Functions 

// -----------------------------------------------Memory Allocation-------------------------------------------------

//Stack(Primitive), Heap (Non-Primitive) 

let myName="sameer"
let anotherName=myName
anotherName="Anku"
//console.log(myName)
//console.log(anotherName)

let userOne={
    email:"something@gmail.com",
    upi: "sameer@ybl"
}
let userTwo=userOne

userTwo.email="anything@gmail.com"

console.log(userOne.email)
console.log(userTwo.email) 