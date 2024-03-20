// lowercase
var personName = "Abdul Rehman Channa";
console.log("lowercase:", personName.toLowerCase());
// UPPERCASE
console.log("UPPERCASE:", personName.toUpperCase());
// TitleCase
console.log("TitleCase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
