// 'use strict';

// const randomizer = ( num , n , m , method) => {
//     const arr = [];
//     for ( let i = 0; i < num; i++) {
//         if (method === "even"){
//             let number = Math.round(Math.random() * (n - m) + m);
//             if(number % 2 === 0) {
//                 arr.push(number);
//             } else {
//                 i -= 1;
//             }
//         }
//         if (method === "odd"){
//             let number = Math.round(Math.random() * (n - m) + m);
//             if(number % 2 !== 0) {
//                 arr.push(number);
//             } else {
//                 i -= 1;
//             }
//         }
//     }
//     return arr;
// }

// console.log(randomizer(10, -2, -7, "even"));