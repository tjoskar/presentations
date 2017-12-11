import { map, toUpper } from 'ramda'

const nameList = [
  'Oskar Karlsson',
  'Jon Snow',
  'Daenerys Targaryen'
]

// BAD:
// Impure: Modifies outer scope
// function uppercaseNames(names) {
//   for (const index in names) {
//     names[index] = names[index].toUpperCase()
//   }
//   return names
// }

// BETTER but still bad, too many variables (names, newnameList, name) 
// function uppercaseFirstName(names) {
//   const newnameList = []
//   for (const name of names) {
//     newnameList.push(name.toUpperCase())
//   }
//   return newnameList
// }

// GOOD:
// function uppercaseNames(names) {
//   return names.map(str => str.toUpperCase())
// }

// BEST: No logic, just config
const uppercaseNames = map(toUpper)



const uppercaseNameList = uppercaseNames(nameList)

uppercaseNameList.forEach(name => console.log(name))
nameList.forEach(name => console.log(name))
