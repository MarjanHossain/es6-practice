// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);
// const number = [2, 3, 4, 5, 6, 7, 8];
// number.map(function (element,index,array) {
//     console.log(element,index,array);
// })

// get square

// const result = number.map(function(element){
//     return element*element;
// })

// const square = element=>element *element;
// let result =number.map(square);

// // const result = number.map (x=>x*x);
// console.log(result);
const number = [2, 3, 4, 5, 6, 7, 8];

const bigger = number.filter(x => x > 5);
console.log(bigger);