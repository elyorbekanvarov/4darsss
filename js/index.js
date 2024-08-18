// 1 - masala

// function countCaseCharacters(text) {
//   let upperCaseCount = 0;
//   let lowerCaseCount = 0;
//   for (let char of text) {
//     if (char >= "A" && char <= "Z") {
//       upperCaseCount++;
//     } else if (char >= "a" && char <= "z") {
//       lowerCaseCount++;
//     }
//   }
//   return { upperCase: upperCaseCount, lowerCase: lowerCaseCount };
// }
// const text = "Hello World! JavaScript IS awesome.";
// const counts = countCaseCharacters(text);
// console.log(`${counts.upperCase}`);
// console.log(`${counts.lowerCase}`);

// 2 - masala

// const Palindrom = (str) => {
//     for (const i of str) {
//         if (i == "radar" || i == "madam" || i == "refer") {
//             res.push(i);
//         }
//     }
//     return res.join(' ');
// }
// let test = ["radar", "ovoz", "madam", "auto", "refer"];
// let res = [];
// console.log(Palindrom(test));

// 3 - masala

// function takroriyRaqam(arg) {
//     let counter = 0;
//     for (const iterator of arg) {
//         if (iterator == son) {
//             counter++;
//         }
//     }
//     return counter;
// }
// let son = 3;
// let test = [1,2,3,4,3,6];
// console.log(takroriyRaqam(test));

// 6 - masala

// const sum = function(...arg) {
//     let s = 0;
//     arg.forEach(function(value) {
//         s += value;
//     })
//     return s;
// }
// console.log(sum(1,2,3,4,5));

// 8 - masala

// function reverseStr(str) {
//     let res = str.split('').reverse().join('');
//     return res;
// }
// let matn = "salom dunyo"
// console.log(reverseStr(matn));

// 9 - masala

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }
//   return true;
// }
// function filterPrimes(arr) {
//   return arr.filter(isPrime);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15];
// const primeNumbers = filterPrimes(numbers);
// console.log(primeNumbers);