let arreglo = [10, 20, 30, 40]
let [a, b] = arreglo
console.log("a:", a) // 10
console.log("b:", b) // 20

let [ , , ...resto] = arreglo
console.log("resto:", resto) // [30, 40]