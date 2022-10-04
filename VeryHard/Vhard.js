class Person{
  constructor(name, job, age, exercise) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = exercise;
  }
letsExercise() {
  return `${this.exercise} is really fun`
}
fetchJob() {
  return `${this.name} is a ${this.job}`
}
hisAge() {
  return `${this.name} is ${this.age}`
}
nativeLanguages() {
  return `${this.name} is fluent in the ${this.languages} language`
}
}
// let rene = new Person('Rene', 'Programmer', '24')
// console.log(rene.fetchJob());

class Programmer extends Person {
    constructor(name, job, age, exercise, languages) {
      super(name, job, age, exercise);
      this.languages = languages;
      this.busy = true;
    };
};
let rene = new Programmer('Rene', 'Programmer', '24', 'fighting', 'English')
console.log(rene);
console.log(rene.fetchJob());
console.log(rene.hisAge());
console.log(rene.letsExercise());
console.log(rene.nativeLanguages());