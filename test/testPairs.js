const fetchList = require("../pairs.js");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

// Calling key()
result = fetchList.pairs(testObject);
console.log(result);
