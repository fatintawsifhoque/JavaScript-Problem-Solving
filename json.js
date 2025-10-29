/* problem => 87 (JSON)
    JSON Parse Practice
Write code that:
Takes this JSON string:
let jsonString = '{"name": "Rahim", "age": 25}';
Converts it to a JavaScript object
Prints the name and age*/
let jsonString = '{"name": "Rahim", "age": 25}';
let user = JSON.parse(jsonString)

console.log(user.name)
console.log(user.age)
