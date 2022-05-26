//*****************************/
//?arr.push(..items)
let hobbies = ['reading', 'arts', 'music']

hobbies.push('photography', 'chess') 
//adds 'arts' & 'music' at end of array

console.log(hobbies)
//output: ["reading", "arts", "music","photography","chess"]


//*****************************/
//?arr.pop()
const friends = ['Vic', 'Sam', 'Aisha', 'Terry']

friends.pop()
//removes item from the end of array

console.log(friends)
//output: ['Vic', 'Sam', 'Aisha']


//*****************************/
//?arr.shift()
const games = ['duck', 'tag', 'pilolo', 'four corners' ]

games.shift()
//removes item from the beginning

console.log(games)
//output: ['tag','pilolo', 'four corners']

//*****************************/
//?arr.unshift()
let movies = ['Interstellar', 'Matrix']

movies.unshift('Inception', 'Joker')
//adds Inception & Joker to beginning of the array

console.log(movies)
//output:['Inception', 'Joker', 'Interstellar', 'Matrix']


//*****************************/
//?arr.slice(start, end)
let nums = [4, 3, 7, 9, 23, 17, 32]

alert(nums.slice(2, 6))
//alerts: 7,9, 23, 17 (copies from index 2 to 5)

alert(nums.slice(4))
//alerts: 23, 17, 32 (copies from index 4 to the end)

alert(nums.slice(-4))
//alerts: 9, 23, 17, 32 (copies last 4 elements)


//*****************************/
//? arr.splice(start[, deleteCount, elem1, ..., elemN])

//DELETE ELEMENT example 1
let toDo = ['clean house', 'print shirts', 'go to the barber shop',]

toDo.splice(1, 1) // it removes 1 element at index 1

alert(toDo); // alerts ['clean house', 'go to barber shop']

let cusines = ['mac and cheese', 'plantian and beans', 'empanadas', 'banku and tilapia', 'sweet potato pie', 'tortilla and salsa']

cusines.splice(3, 2)// starting at index 3 it removes 2 elements
 chjs

