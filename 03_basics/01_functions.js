// console.log("A")
// console.log("D")
// console.log("I")
// console.log("T")
// console.log("Y")
// console.log("A")

//If i have to do this a lot of time i will put it under a function and can use it any number of time

function saymyname(){
    console.log("A")
console.log("D")
console.log("I")
console.log("T")
console.log("Y")
console.log("A")
}
// saymyname()

function addtwonumbers(number1,number2){
    return number1+number2
}
let a=addtwonumbers(3,6)
//console.log(a)
function loginusername(username){
    return `${username} just logged in`
}

//console.log(loginusername("Aditya"))


// We can also pass object in the function

const user={
    username:"Aditya",
    email: "adity.kumar1314@gmail.com"
}

function aaa(anyobject){
    console.log(`my name is ${anyobject.username} and my email is ${anyobject.email}`)
}

aaa(user)

//we can take array in the parameter too

// if we have not defined how many numbers we have to take then 

function calculate(...num1){
    return num1
}
console.log(calculate(4,25,5,3,43,3,43,43,3,43))