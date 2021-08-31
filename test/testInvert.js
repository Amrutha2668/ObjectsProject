const invertedMap = require("../invert.js");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

result = invertedMap.invert(testObject);
console.log(result);
