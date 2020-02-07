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

----------------Persistent Bugger----------------

function persistence(num) {
    let count = 0;
        num = num.toString();
        while(num.length > 1) {
            count++;
            num = num.split('').map(Number).reduce((a,b) => a * b).toString();
        }
    return count;
}

----------------Sum of Digits / Digital Root----------------

function digital_root(n) {
  n = n.toString();
  if(n.length < 2) {
    return Number(n);
  }
  n = n.split('').map(Number).reduce((a,b) => a + b).toString();
  return digital_root(n);
}

----------------Counting Duplicates----------------

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

----------------Equal Sides Of An Array----------------

function findEvenIndex(arr) {
  for(var i = 1; i < arr.length - 1; i++) {
    if(arr.slice(0, i).reduce((a, b) => a + b) === arr.slice(i + 1).reduce((a, b) => a + b)) {
      return i;
    }
  }
  return -1;
}
