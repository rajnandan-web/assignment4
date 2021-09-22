
   
   
let value = [
    "green", "green", "red", "red",
 "yellow", "pink", "pink", "yellow"
];
let unique = value.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);
