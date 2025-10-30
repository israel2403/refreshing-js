const name = "isra";
let age = 20;
const hasHobbies = true;

age = age + 1;

function summarizeUser(userName, userAge, userHasHobbies){
  return ('Name is '+ userName + ', Age is '+ userAge + ' and he/she has hobbies: '+ userHasHobbies);
}

console.log(summarizeUser(name, age, hasHobbies));
