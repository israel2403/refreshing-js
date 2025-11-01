const person  = {
  name: 'Isra',
  age: 30,
  greet () {
    console.log('Hi, I am ' + this.name);
  }
}

const hobbies = ['Sports', 'Cooking'];

console.log(hobbies.map( hobby =>{
  return 'Hobby '  + hobby;
}));

console.log(hobbies);


hobbies.push('Programming');
console.log(hobbies);
