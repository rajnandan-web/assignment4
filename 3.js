let items = [1,33,99,50,100,150,60,99,1000,999,0,-1,10];
let a = 150;
let filtered = items.filter(function(item) {
  return item >= a;
});
console.log(filtered);