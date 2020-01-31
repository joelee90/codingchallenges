----------------Find the odd int----------------

function findOdd(A) {
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);

----------------Multiples of 3 or 5----------------

function solution(n){
  let arr = [];
  for(let i = 0; i < n; i++) {
        if(i % 3 === 0) {
            arr.push(i);
        } else if(i % 5 === 0) {
            arr.push(i);
        }
  }
  return arr.reduce((a,b) => a + b, 0);
}
