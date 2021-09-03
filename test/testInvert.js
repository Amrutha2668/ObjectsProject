// eslint-disable-next-line no-undef
const invertedMap = require("../invert.js");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = invertedMap.invert(testObject);
console.log(result);
