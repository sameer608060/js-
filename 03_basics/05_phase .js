let val1=10
let val2=5
function addnum(num1,num2){
    let total =num1+num2
    return total 
}
let result1= addnum(val1,val2)
let result2=addnum(4,45)

//Now we will understand how the execution happen in javascript so basicall their is three 
// types phases 
//.                   GLOBAL EXECUTION
//                          |
//                          \/
//       this will be created and it will happen always 
//

//                     MEMORY PHASE
//                          |
//                          \/
// VAL1= UNDEFINED
// VAL2= UNDEFINED
// ADDNUM=DEFINITION
   // AB ISME SB KAAM NEW VARIABLE BNEGA EK ALG SPACE AUR MEMORY PHASE ISKE SCOPE KA AUR
   //EXECUTION PHASE FIR SE HOGA. aur ek baar ye return hoga uske baad jo create hua hai wo delete ho jaega 


// RESULT1=UNDEFINED 
// RESULT2=UNDEFINED

//                      EXECUTION PHASE
//VAL1=10
//VAL2=5