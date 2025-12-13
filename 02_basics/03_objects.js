//objects can be created in two ways by constructor or by object literals 

//Object literals
const mysymb=Symbol("abcd")
const jsuser={
    name : "Aditya Adarsh",
    [mysymb]:"efgh",
    age: 24,
    location: "Patna" ,
    email: "aditya@gmail.com",
    isloggedin: false
}

// console.log(jsuser.name)
// console.log(jsuser["name"])
// console.log(typeof(jsuser.mysymb))
//Object.freeze(jsuser)// can't change any value
jsuser.name="sameer"
//console.log(jsuser)
jsuser.greeting= function(){
    console.log("Hello jsuser")
}
console.log(jsuser.greeting())

// singleton or using constructor in next part