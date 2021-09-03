// eslint-disable-next-line no-undef
const updateUndefined = require("../default.js");

const defaultProps = { name: "Bruce Wayne", age: 36, location: "Gotham" };
let testObject = { age: 36, location: "Gotham" };

let result = updateUndefined.defaults(testObject, defaultProps);
console.log(result);
