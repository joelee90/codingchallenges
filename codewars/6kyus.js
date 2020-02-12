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

----------------Who likes it?----------------

function likes(names) {
    if(names == '') {
       return 'no one likes this';
    }
    if(names.length === 1) {
       return names[0] + ' ' + 'likes this';
    }
    if(names.length === 2) {
       return names[0] + ' ' + 'and' + ' ' + names[1] + ' ' + 'like this';
    }
    if(names.length === 3) {
       return names[0] + ', ' + names[1] + ' ' + 'and' + ' ' + names[2] + ' ' + 'like this';
    }
    if(names.length > 3) {
       return names[0] + ', ' + names[1] + ' ' + 'and' + ' ' + (names.length - 2) + ' ' + 'others like this';
    }
}

----------------Find The Parity Outlier----------------

---1st trial---

function findOutlier(integers){
    let checkIfOddorEven = integers.map(i => Math.abs(i)).reduce((a, b) => a + b);
    if(checkIfOddorEven % 2 == 0) {
        for(let i = 0; i < integers.length; i++) {
              if(integers[i] % 2 == 0) {
                  return integers[i];
              }
        }
    } else {
        for(let i = 0; i < integers.length; i++) {
              if(integers[i] % 2 == 1 || integers[i] % 2 == -1) {
                  return integers[i];
              }
        }
    }
}

Test fail case :
findOutlier([-82010241,-163671247,35286631,-93544850,53587775,176351581,-91783419,-89968295,79555935,-56064977,-180314547,73507693,-145944761,-675393,-89875597,-131754441,188553411,56810385,82769303,128945197,85789511,11626917,-135186259,-194719963,74065361,-180944031,39484609,148358177,15851011,-29065845,-190390725,157882683,147602511,90986669])


---2nd trial---

function findOutlier(integers){
    let even = integers.filter(i => i % 2 === 0);
    let odd = integers.filter(i => i % 2 === 1 || i % 2 === -1);
    return even.length === 1 ? Number(even) : Number(odd);
}
