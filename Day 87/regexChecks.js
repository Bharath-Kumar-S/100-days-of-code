let str = "hello!!!! I am 59 bharath@34";

//remove all non-alphanumeric characters
str = str.replace(/[^a-zA-Z\s]/g, "");

console.log(str);

str = str.replace(/\s/g, "");

console.log(str);

str = str.replace(/[0-9]/g, "");

console.log(str);
