let A = [3, 8, 9, 7, 6]

// console.log(A[A.length-1]);
// // console.log(A[4]);
//
// function solution (A, k) {
//     let newArr = [];
//     newArr = A.unshift(A[A.length-1]);
//     console.log(newArr);
// }
//
// // console.log(solution(A, 3));
//
// console.log(9%20);

function solution (A, k) {
    let newArr = [];
    if(!A.length) {
        return [];
    }
    for(let i = 0; i < k; i++) {
        A.unshift(A.pop())
    }
    return A;
}

console.log(solution(A, 2));
