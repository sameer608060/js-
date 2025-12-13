//singleton

const tinderuser= new Object()

tinderuser.id="abc"
tinderuser.name="Aditya Adarsh"
tinderuser.loggedin= false
//console.log(tinderuser)

//object can also be used under object

const regularuser ={
    email: "adity@gmail.com",
    fullname:{
        userfullname:{
        firstname: "aditya",
        lastname: "adarsh"
        }
    }
}
//console.log(regularuser)
//console.log(regularuser.fullname.userfullname.firstname)
// to combine two of the objects we use assign 
obj1={1:'a',2:'b'}

obj2={3:'c',4:'d'}
//obj3=Object.assign(obj1,obj2)
//console.log(obj3)
//we can also do it like this 
obj3 = {...obj1,...obj2}
//console.log(obj3)

// suppose if we only want the keys
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))

//object de-constructor is used when we don't want to write the whole suppose tinderuser
//ye baar use krna hai tho usko ek short form dene ke liye use krte hai 
const course={
    courseinstructor:"Aditya",
    coursename: "js",
    duration: "six month"

}

const{courseinstructor:cins}=course
console.log(cins)