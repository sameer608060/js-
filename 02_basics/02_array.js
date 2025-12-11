const marvel_heroes=["Thor","Ironman","Spiderman"]
const dc_heroes=["Superman","Batman","Flash"]
//marvel_heroes.push(dc_heroes)
//this will insert dc heroes in marvel heroes as a single element 
//merge krme le liye concat use kr skte hai 
// const allheroes=marvel_heroes.concat(dc_heroes)
// console.log(allheroes)
// iska ek aur tarika v hai 
const allheroes=[...marvel_heroes, ...dc_heroes]
//it means pushback push in the same array but concat merge two arrays and return a new array
console.log(allheroes);
const another_array= [1,2,3,[4,5,6],[7,[8,9]]]
const real_another_array=another_array.flat(0)
console.log(real_another_array)
//array has function like array.isarray(x)it return true or flase.      
//same array.from("sameer") it would return an array format of sameer. 
//similarly array.of(x,y,z)return array containing xyz where xyz could be anything but should be declaredf
