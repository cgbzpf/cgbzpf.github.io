let name = "Levi";
console.log(name);
let myVariable = false;
if (myVariable != true) {
  console.log('The condition has been evaluated to true');
}

let a = 7;
if (a < 5) {
  console.log(a / 2);
}
else {
  console.log(a * 2);
}

let count = 10;

for (let i = 1; i <= count; i++) {
console.log(i);
}

console.log("BREAK");


let even = 20;

for (let i=0; i <= even; i= i+2) {
    console.log(i);

}

let printNumbersTill = (n) => {
    for (let i = 1; i <= n; i++) {
    console.log(i);}
}

printNumbersTill(15);
printNumbersTill(3);

let greet = (name) => {
    return "Hello, " + name; 
}

console.log(greet("Levi"));

//let printArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array(i))
    };
};

//let printArray2 = (array) => {
  array.forEach(number => {
    console.log(number);
  });
}

let printValues2 = (array) => {
  array.forEach(value => {
    console.log(value);
  });
}