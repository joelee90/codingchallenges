let arr = [9, 3, 9, 3, 9, 7, 9]

// 1st trial
// function solution (arr) {
//     let oddInArray = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !== arr[i+1]) {
//             oddInArray.push(arr[i]);
//         }
//     } return oddInArray;
// }


function solution (arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }
    return result;
    console.log(result);
}
console.log(solution(arr));

// console.log(9^3);
// console.log(10^9);
//
// console.log(9^9);
// console.log(0^3);
