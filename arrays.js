// to store multiple values in single variable

let numbers=[1, 2, 3];
console.log(numbers)

let fruits=['apple', 'banana', 'cherry']
console.log(fruits);
fruits.push('mango')
console.log(fruits);
console.log('index of array: '+fruits[2]);
console.log(fruits.length);

let x;
for(x in fruits){
    console.log(fruits[x]);    
}

for(x of fruits){
    console.log(x);
}

