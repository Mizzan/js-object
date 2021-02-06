let globalScope = 6;
console.log("inside global scope", globalScope);

function findScope(x, y) {
  let result = x + y;
  let score = 0;
  console.log("inside function scope", result);
  return function (result) {
    let addMore = result * result;
    console.log("inside function scope", addMore);
    return score;
  };
}

console.log(findScope(2, 2));
