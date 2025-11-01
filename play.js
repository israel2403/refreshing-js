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


const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson  = {...person};
console.log(copiedPerson);

const toArray = (...args) => {
  return args;
}

console.log(toArray(1,2,3, 4));
