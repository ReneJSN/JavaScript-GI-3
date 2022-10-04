// var person = creatingPerson().getName();


// function creatingPerson(){
//     var pii = {
//             name: "Rene Santiago",
//             ssn: 12354876,
//         };
//     this.getName = function(){
//         return pii.name;
//     }
// };

// console.log(person);

// var pii = {
//     name: "Rene Santiago",
//     ssn: 12354876,
// };

const Person = (function(){
    const self = {
    name: "John Doe",
    ssn: 00000
    };
    const getName = () => self.name;
    const setName = name => self.name = name;
    const setSsn = ssn => self.ssn = ssn;
    return function(name, ssn) {
    self.name = name;
    self.ssn = ssn;
    return {getName};
    };
})();
const Rene = new Person("Rene Santiago", 12345)
console.log(Rene.name);
console.log(Rene.ssn);
console.log(Rene.getName());




// class Person {
//     #name;
//     #ssn;
//     constructor(name, ssn) {
//       this.#name = name;
//       this.#ssn = ssn;
//     }