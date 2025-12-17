// const user ={
// username : "Aditya",
// price:999,

// welcomemessage: function(){
//     console.log(`${this.username},welcome to website`)
//     console.log(this)
// }
// }
// console.log(this) ye hmko ek khali de rha hi kyunki global me aisa kuch declare hai hi ni
// user.welcomemessage()

//this refers to the current context we are in 

//this object ke andar tho kaam krta hai pr function ke andar ni kaam krta hai jai ki agr
//upr welcomemessage me agr maan lete hai ki let name krke ek variable declare rhta aur 
//hm uske andar aisa kuch likhte ki this.name tho wo undefined deta




//arrow se v function ko declare kr skte hai 
const ad=()=>{
    console.log("Aditya")
}
ad()

//ek line me kr skte hai isko aur return likhne ka v zaroot ni hai agr ek line me
//likh rhe hai
//isi return liikhne ni likhne ko implicit aur explicit bolte hai 

const b =(num1,num2)=>(num1+num2)
console.log(b(3,4))