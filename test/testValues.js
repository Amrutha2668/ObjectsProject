// eslint-disable-next-line no-undef
const fetchValues = require("../values.js");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

// Calling values()
let result = fetchValues.values(testObject);
console.log(result);
