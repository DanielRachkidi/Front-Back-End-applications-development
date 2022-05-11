console.log('hello world')

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2 + "\n";
console.log(text3)


const cars = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let len = cars.length;
let text = "";

for (; i < len; ) {
  text += cars[i] + "\n";
  i++;
}
console.log(text)

