// Immediately Invoked Function (IIFE)
// In IIFE, the entire function is enclosed within parenthesis with another parenthesis outside the enclosed function.
//* We get problems due to the pollution of the global scope, to get rid of the pollution, IIFE should be used

// let x, y;
const hello = ((x, y) => {
  return x + y;
})(5, 4);

console.log("Sum : ", hello);


((name) => {
  console.log(`Recipe is amazing! and thank you ${name}.`)
})("Chef");


//iife is very useful when we need to call a function directly without calling it