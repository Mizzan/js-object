let globalScope = 6;
console.log("inside global scope", globalScope);

function findScope(x, y) {
  let result = x + y;
  console.log("inside function scope", result);
  function square(num) {
    return num * num;
    console.log("inside function scope", num);
  }
  let doMath = square(result);

  console.log("inside function scope", doMath);
  return doMath;
}

console.log(findScope(2, 2));
