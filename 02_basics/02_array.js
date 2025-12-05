const marvel_heroes=["Thor","Ironman","Spiderman"]
const dc_heroes=["Superman","Batman","Flash"]
//marvel_heroes.push(dc_heroes)
//this will insert dc heroes in marvel heroes as a single element 
//merge krme le liye concat use kr skte hai 
// const allheroes=marvel_heroes.concat(dc_heroes)
// console.log(allheroes)
// iska ek aur tarika v hai 
const allheroes=[...marvel_heroes, ...dc_heroes]
console.log(allheroes);


