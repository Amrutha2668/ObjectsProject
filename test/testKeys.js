const fetchKey = require("../keys.js");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

// Calling key()
result = fetchKey.keys(testObject);
console.log(result);
