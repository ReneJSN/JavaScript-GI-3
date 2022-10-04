var run = exercise('running');
var swim = exercise('swimming');

function exercise(typeOfEx) {
    return `today's exercise is ${typeOfEx}`;
    // console.log(`Today's exercise is ${typeOfEx}`);
}


console.log(swim); // prints "Today's exercise: swimming"
console.log(run); // prints "Today's exercise: running"