// N is an integer within the range [1..2,147,483,647].

let N = 647;

function solution(N) {
  let bi = N.toString(2);
  let newBi = bi.split("");
  console.log(newBi);
  let zeroCount = 0;
  let result = 0;

  newBi.forEach(i => {
    if (i === "0") {
      zeroCount += 1;
    } else {
      result = Math.max(result, zeroCount);
      zeroCount = 0;
    }
  });
  return result;
}

console.log(solution(N));
