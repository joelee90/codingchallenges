const well = x => {
    let countGood = x.filter(i => i == 'good').length;
    return countGood < 1 : 'Fail';
    return countGood < 3 : 'Publish!' ? 'I smell a series!';
}


---- Count the Monkeys ----
첫번째 방법
let a = Array.from({length: 5}, (v, i) => i + 1);
console.log(a);

두번째 방법
function getMonkeys(n) {
let monkeys = [];
for(let i = 1; i < n + 1; i++) {
    monkeys.push(i);
}
 console.log(monkeys);
}
getMonkeys(5);

Sum the Strings

---- The Wide Mouthed frog ----
function mouthSize(animal) {
 if(animal == 'alligator') {
     return 'small';
 } else if(animmal == 'ALIGATOR'){
     return 'small';
 } else {
     return 'wide';
 }
}

function mouthSize(animal) {
    return animal.toLowerCase() == 'aliigator' ? 'small' : 'wide';
}

---- Do I get a bonus? ----
function bonusTime(salary, bonus) {
    if(bonus) {
        return "\u00A3" + String(salary * 10);
    } else {
        return "\u00A3" + String(salary);
    }
}
(bonusTime(10000, true), '£100000');
return bonus ? `L${10 * salary}` : `L${salary}`
