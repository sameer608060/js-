//Map
const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
//console.log(map)
// map pr iterate krne ke liye forof loop ka use krte hai 
for (const [key,value] of map) {
    console.log(key,"->",value)
}
//for of se hmlog object pr iterate ni kr skte hai iske liye kuch aur use hota hai 