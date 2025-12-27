const myobj={
    js: "javascipt",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"
}
for (const key in myobj) {
    // console.log(key,"->",myobj[key])    
}
//for in loop for normal array give only key (index)directly and it does not work for map 
//because it is not iterablffffe
// we have foreach funtion to iterate over any array directly

const coding =["cpp", "ruby" , "python", "java"]
coding.forEach(function(val){
    //console.log(val);
})

const mycoding=[
{
    languagename: "javascipt",
    languagesymbol: "js"
},
{
    languagename: "java",
    languagesymbol: "java"
}
]
mycoding.forEach((item)=>{
    console.log(item.languagesymbol)
})