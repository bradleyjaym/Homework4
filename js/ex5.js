const values = [3, 11, 7, 2, 9, 10];
let add = 0;
let min = values[0];
let max = values[0];


for (let i = 0; i < values.length; i++) {
  add += values[i];

  if (values[i] < min) {
    min = values[i]
  }

  if (values[i] > max) {
    max = values[i]
  }
}

console.log(add)
console.log(min)
console.log(max)

