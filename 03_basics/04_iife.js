//Immediately Invoked Function Expressions(IIFE)
//iska use isiliye krte hai kyunki global se koi v dikkt ni aatye hai agr call krke kr 
// rhe hai tho(global pollution)


//Named iife
(function chai(){
    console.log(`DB coneected`)
})();
// ye jo semicolon lgaye hai wo zaroori hai lagana kyunki ni lgaenge tho iife function ko
// pta hi ni hoga ki first wala iife kha pr khtm ho rha hai 


//unnamed iife
((name)=>{
    console.log(`DB two connected ${name}`)
})("Aditya")