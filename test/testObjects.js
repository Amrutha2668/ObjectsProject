const fetchMapObject = require("../object.js");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

//cb()
function cb(x) {
  return typeof x == "number" ? x * 2 : x.toUpperCase();
}

// Calling values()
result = fetchMapObject.mapObject(testObject, cb);
console.log(result);
