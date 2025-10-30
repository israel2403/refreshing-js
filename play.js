const name = "isra";
let age = 20;
const hasHobbies = true;

age = age + 1;

const summarizeUser = (userName, userAge, userHasHobbies)=>{
  return ('Name is '+ userName + ', Age is '+ userAge + ' and he/she has hobbies: '+ userHasHobbies);
}

const add = (a, b) => a+b;
console.log(add(1,2));

// if you have an arrow fn with one argument you can remove the '()' from the parameter list
const addOne = a => a+1;
console.log(addOne(1));

// if you have an arrow fn with no arguments you must put in empty parenthesis
const addRandom = () => 20;
console.log(addRandom());



console.log(summarizeUser(name, age, hasHobbies));
