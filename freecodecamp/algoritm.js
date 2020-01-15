// function findLongestWordLength(str) {
//     let longest = str.split(' ').sort((a,b) => b.length - a.length);
//     console.log(longest[0].length);
//     return longest[0].length;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");
--------------------------------------------------------------------------------
// function largestOfFour(arr) {
//     let largest = [];
//     for(let i = 0; i < arr.length; i++) {
//             let a = arr[i].sort((a,b) => b - a);
//             let b = largest.push(a[0]);
//         }
//         console.log(largest);
//   return largest;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
--------------------------------------------------------------------------------
// function confirmEnding(str, target) {
//   return (str.substr(-target.length) === target) ? console.log(true) : console.log(false);
// }
// confirmEnding("Connor", "r");
--------------------------------------------------------------------------------
// Reapeat a String
// function repeatStringNumTimes(str, num) {
//   let result = '';
//   for(let i = 0; i < num; i++) {
//       result += str;
//   }
//   return result;
// }
//
// repeatStringNumTimes("abc", 3);
--------------------------------------------------------------------------------
// function truncateString(str, num) {
//   if(str.length <= num) {
//     return str;
//   } else {
//     return str.substring(0, num) + '...';
//   }
// }
// truncateString("A-tisket a-tasket A green and yellow basket", 8);
--------------------------------------------------------------------------------
function findElement(arr, func) {
  let num = 0;
  for(let i = 0; i < arr.length; i++) {
    num = arr[i];
    if(func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
--------------------------------------------------------------------------------
// 1번째
function booWho(bool) {
  if(typeof bool === 'boolean') {
    return true;
  } else {
    return false;
  }
  return bool;
}
booWho(null);

//2번째
return typeof bool === 'boolean' ? true : false;
--------------------------------------------------------------------------------
function titleCase(str) {
  let sentence = str.toLowerCase().split(' ');
  for(let i=0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
  console.log(sentence);
}

titleCase("I'm a little tea pot");
--------------------------------------------------------------------------------
slice and splice
function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice();
    arr.splice(n,0,...arr1);
    console.log(arr);
    return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

arr1 => ...arr1 Array 복사해서 넣으려면 spread operator.
--------------------------------------------------------------------------------
falsy bouncer
function bouncer(arr) {
    let truth = [];
  for(let i=0; i < arr.length; i++) {
    if(arr[i])
        truth.push(arr[i]);
    }
    console.log(truth);
    return truth;
}
bouncer([7, "ate", "", false, 9]);
--------------------------------------------------------------------------------
Where do I Belong
//1번째
function getIndexToIns(arr, num) {
    arr.sort((a,b) => a-b);
    for(let i=0; i < arr.length; i++) {
        if(arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}
getIndexToIns([10, 20, 30, 40, 50], 35);
// use a for loop to compare the items in the array
// starting from the smallest one.
// When an item on the array is greater than the number
// we are comparing against,
// then we return the index as an integer.
// num과 item 비교, num이 item 보다 작은경우, 리턴한다.
// return arr.length는 arr전체를 리턴하는게 아니라, item과 num 비교
// 했을때, item이 마지막인 가정하에 length를 리턴한다.

//2번째
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a,b) => a-b);
    console.log(arr.indexOf(num));
    return arr.indexOf(num);
}
getIndexToIns([40, 60], 50);
--------------------------------------------------------------------------------
Mutations
function mutation(arr) {
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
  for(let i = 0; i < str2.length; i++) {
    if(str1.indexOf(str2[i]) < 0) {
        console.log(false);
        return false;
        }
    }
  console.log(true);
  return true;
}
mutation(["hello", "Hello"]);
--------------------------------------------------------------------------------
Chunky Monkey
//1번째
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for(let i=0; i < arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size))
  }
  console.log(newArr);
  return newArr;
}

//2번째
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  console.log(newArr);
  return newArr;
}
//while 특징 이해해야
