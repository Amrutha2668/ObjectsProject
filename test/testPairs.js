// eslint-disable-next-line no-undef
const fetchList = require("../pairs.js");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

// Calling key()
let result = fetchList.pairs(testObject);
console.log(result);
