//var ko nhi use krna hai java script me c++ jaisa nhi agr koi let krke global bnaye hai tho 
//aur kisi fucntion ke andar v same name se variable use kr skte hai declare krke bs uss fuction ke scope ke andar 
//tk ke liye lekin wo valid hoga uske bajr jo v hoga wo global value print hoga niche se 
//smjh v lo iss chiz ko 

// let a=300
// if(true){
//     let a=10
//     console.log(a)
// }
// console.log(a)

// fuction ke andar agr funtion likha hai to bahr wala function call kro tho andar wala
//likha rhega bs call ni hoga niche ye v smjha de rhe hai smjh lo
//funtion ko jha pr declare kiye ho agr uske parent ke scope me usko usko declare 
//krne ke phle v access krenge tho usko access kr skte hai 

a()
function a(){
    let username="Aditya"
    b()
    function b(){
        console.log(username)
    }
    b()
}
a()
// b() aur ye a ke scope ke bahr ni chalega mtlb smjh ke chalo ki function ka scope wo jis
//v fuction me likha hai uske andar hota hai


//_____________________**********mst chiz*************--------------------------//
//two(6). agr function ko kisi chiz variable ke andar decalre rke uske declare hone ke phle use 
//kre tb dikkt hai 
const two =function d(num){
      return num+2
}
two(5)