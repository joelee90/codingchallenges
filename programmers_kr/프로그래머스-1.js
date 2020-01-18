even
odd

even or odd

num = 7
count = 0;

if
    even / 2
    count++;
    if returns 1 break;
check again

if
    (odd * 3) + 1
    count++;
    if returns 1 break

if both conditions doesnt reach 1 till 500, return -1

else break;

let count = 0;
let num = 0;
if count < 500 return -1

let count = 0;
while (num > 1) {
    if(count >=500) {
        return -1
    } else {
        if(num % 2 === 0) {
        num = num / 2;
    } else {
        num = num*3 + 1
    }
    count++;
    }
}
return count
