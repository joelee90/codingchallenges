----------------Santa's Naughty List----------------

let finalList = [];
 for (let i = 0; i < santasList.length; i++) {
   for (let j = 0; j < children.length; j++) {
     if (santasList[i] == children[j] && !finalList.includes(santasList[i])) {
       finalList.push(santasList[i]);
     }
   }
 }
 return finalList.sort();

!finalList.includes(santasList[i])
!finalList.includes(children[j])
// false -> Array에 포함이 안되있는지 확인함.
// Do not add any child more than once.
// include() : returns boolean

 var ans=[];
 for (var i=0; i<santasList.length; ++i)
   for (var j=0; j<children.length; ++j)
     if (ans.indexOf(children[j])==-1 && santasList[i]==children[j])
       ans.push(children[j]);
 return ans.sort();

 ans.indexOf(children[j])==-1
// Want to check that the array does not have the child already.
// Do not add any child more than once.
// indexOf() : returns -1 when no value exists.

function findChildren(santasList, children) {
  const unique = [...new Set(children)];
  return unique.filter(x => santasList.includes(x)).sort();
}
// Create a new list of kids receiving the gift.
// Want to return where [child = santaList] and sort them.

----------------Get the Middle Character----------------

---1번째 방법---

function getMiddle(s) {
    let position;
    let length;
    let result;

    if(s.length % 2 === 1) {
        position = s.length / 2;
        length = 1;
    } else {
        position = s.length / 2 - 1;
        length = 2;
    }
    result = s.substring(position, position + length);
    console.log(result);
}
getMiddle('test');

---2번째 방법---

function getMiddle(s)
{
    let init = Math.ceil(s.length / 2) - 1;
    let end = Math.floor(s.length / 2) + 1;
    return s.subtring(init, end);
}

---3번째 방법---

return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);

----------------Breaking chocolate problem----------------

---1번째 방법---

function breakChocolate(n,m) {
    if(n > 0 && m > 0) {
        return n * m - 1;
    } else return 0;
}

n, m이 0이면 -1을 리턴하기 때문에 조건부여

---2번째 방법---

function breakChocolate(n,m) {
    return (n * m === 0) ? 0 : n * m - 1;
}

----------------Summing a number's digits----------------

---1번째 방법---

function sumDigits(number) {
    let absolute = Math.abs(number);
    let sum = [...absolute+''].map(i => +i).reduce((a,b) => a + b);
    return sum;
}

---2번째 방법---

function sumDigits(number) {
    let a = Math.abs(number).toString().split('').map(i => +i).reduce((a,b) => a + b);
    return a;
    console.log(a);
}

----------------Shortest Word----------------

---1번째 방법---

function findShort(s){
    let short = s.split(' ').sort((a,b) => a.length - b.length);
    console.log(short[0].length);
    return short[0].length;
}

findShort("bitcoin take over the world maybe who knows perhaps");

---2번째 방법---

function findShort(s) {
    return Math.min(...s.split(' ').map(i => i.length));
}

----------------Mumbling----------------

---1번째 방법---

function accum(s) {
	let sen = s.split('');
    for(let i = 0; i < sen.length; i++) {
        sen[i] = sen[i][0].toUpperCase() + sen[i][0].toLowerCase().repeat(i);
    }
    return sen.join('-');
}
accum("abcd");

---2번째 방법---

function accum(s) {
	let sen = s.split('').map((c,i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    console.log(sen);
    return sen;
}
accum("abcd");

----------------Vowels Count----------------

var vowelsCount = 0;
let vowels = 'aeiou';
for(let i=0; i < str.length; i++) {
    if(vowels.indexOf(str[i]) !== -1) {
        vowelsCount++;
    }
}
console.log(vowelsCount);
return vowelsCount;

----------------Descending Order----------------

function descendingOrder(n){
let a = n.toString().split('').sort((a,b) => b-a).join('');
console.log(a);
let b = Number(a);
console.log(b);
return b;
}
descendingOrder(123456789);

----------------high and low----------------

function highAndLow(numbers){
  let result = '';
  let arr = numbers.split(' ').sort((a,b) => a-b);
  result = arr[arr.length-1] + ' ' + arr[0];
  return result;
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")

----------------Square Every Digit----------------

function squareDigits(num){
  console.log(num.toString().split(''));
  let a = num.toString().split('');
  let b = a.map(i => {
        return i*i;
  }).join('')
  return Number(b);
}
squareDigits(9119)

----------------Exes and Ohs----------------

---1번째---

function XO(str) {
    let x = 0;
    let o = 0;
    let a = str.toLowerCase().split('');
    console.log(a);
    for(let i=0; i < a.length; i++) {
        if(a[i] === 'x') {
            x++;
        } else if(a[i] === 'o') {
            o++;
        }
    }
    return x === o;
}

XO("xxOo")
 // x===o will return boolean and true if the case is correct
 // else will return false. The idea is to count no of x and o
 // and compare to see if they have same count number.

---2번째---

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

----------------Complimentary DNA----------------

function DNAStrand(dna){
    let d = [];
    let a = dna.split('');
    console.log(a);
    for(let i=0; i < a.length; i++) {
        if(a[i] === 'A') {
            console.log('T');
            d.push('T');
        } else if(a[i] === 'T') {
            console.log('A');
            d.push('A');
        } else if((a[i] === 'C')) {
            console.log('G');
            d.push('G');
        } else if((a[i] === 'G')) {
            console.log('C');
            d.push('C');
        }
    }
    console.log(d.join(''));
    return d.join('');
}
DNAStrand("ATTGC")

----------------Odd or Even?----------------

---1st solution---

function oddOrEven(array) {
    if(array.length == 0) {
        return 'even';
    }
    let check = array.reduce((a,b) => a+b);
    if(check % 2 === 0) {
        return 'even';
    } else return 'odd';
}

---2nd solution---

function oddOrEven(array) {
    return array.reduce((a,b) => a+b, 0) % 2 === 0 ? 'even' : 'odd';
}

----------------You're a square!----------------

---1st trial---

var isSquare = function(n){
    if(n < 0) {
        return false;
    }
    let sq = Math.sqrt(n);
    if(n === sq*sq) {
        return true;
    } else return false;
}

random number test case 통과하지 못함

---2nd trial---

var isSquare = function(n){
    if(n < 0) { return false };
    return Math.sqrt(n) % 1 === 0 ? true : false;
}

* n의 sqrt를 % 1 하였을때, 0이 나와야 됨. 소수는 0이 나오지 않음.
sqrt 한값이 자기 자신으로 나누었을때는 0이 나와야된다. 만약 소수라면 0이 나오지 않기 때문에 정사각형 조건에 맞지 않음.

----------------Disemvowels Trolls----------------

---1st trial---

function disemvowel(str) {
    let vowels = 'aeiou';
    return str.split('').filter(i => {
        if(vowels.indexOf(i.toLowerCase()) == -1) {
            return i;
        }
    }).join('');
}


----------------Jaden Casing Strings----------------

---1st trial---

String.prototype.toJadenCase = function (str) {
  return this.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
};


---break down---

let a = str.split(' ');
let b = a.map(i => i[0].toUpperCase() + i.slice(1));
let c = b.join(' ');

//use 'this' keyword for prototype

----------------Isograms----------------

---1st trial---

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

1. new Set : stores unique values of any type.
2. Compare the size of the new Set to the length of the original str.
3. Returns true only if the length of both strings are equal, else will return false.

----------------Beginner Series#3 Sum of Numbers----------------


function getSum(a, b) {

    let max = Math.max(a, b);
    let min = Math.min(a, b);

    if(max == min) {
        return max;
    }
    let arrange = [];
    for(let i = min; i <= max; i++) {
        arrange.push(i);
    }
    return arrange.reduce((a, b) => a + b);
}

console.log(getSum(-1, 0));

// Sort a, b using Math.max, Math.min
// Loop and list all the numbers between and get the sum of the list.


----------------Growth of a Population----------------

---1st trial---

function nbYear(p0, percent, aug, p) {
    let per = percent / 100;
    let year = 0;
    let result = 0;

    if(p0 <= p) {
        result = p0 + (p0*per) + aug;
        return result;
        year++;
    }
}

---1st solution---

function nbYear(p0, percent, aug, p) {
    let per = percent / 100;
    let y = 0;
    while(p0 < p) {
        p0 = p0 + (p0*per) + aug;
        y++;
    }
    return y;
}

----------------Two to One----------------

---1st solution---

function longest(s1, s2) {
    let a = s1.concat(s2);
    let b = a.split('').sort();
    let c = b.filter((element, index, array) => {
        return index === array.indexOf(element);
    })
    let d = c.join('');
    return d;
}

---Modified---

function longest(s1, s2) {
    return s1.concat(s2).split('').sort().filter((element, index, array) => {
        return index === array.indexOf(element);
    }).join('');
}

or

return element !== array[index - 1];
