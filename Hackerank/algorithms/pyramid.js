let arr = [1,2,4,3,5]

function miniMaxSum(arr) {
let min = 0;
let max = 0;
let a = arr.sort((a,b) => a-b)
min += a[0] + a[1] + a[2] + a[3];
max += a[1] + a[2] + a[3] + a[4];
console.log(min, max);
}

miniMaxSum(arr);
