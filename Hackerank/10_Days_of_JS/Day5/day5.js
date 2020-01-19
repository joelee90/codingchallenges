// Rectangle.prototype.area = function() {
//     return this.w * this.h;
// }
//
//
// class Square extends Rectangle {
//     constructor(s) {
//         super(s);
//         this.h = s;
//         this.w = s;
//     }
// }
//
// // -----------------------------------------------------------------------------
//
// function sides(literals, ...expressions) {
//         let [a, p] = expressions;
//
//         let s1 = (p + Math.sqrt(p*p - 16*a)) / 4;
//         let s2 = (p - Math.sqrt(p*p - 16*a)) / 4;
//
//         return [s1, s2].sort();
// }

// -----------------------------------------------------------------------------

nums = [1,2,3,4,5]
// function modifyArray(nums) {
//     let getNew = (n) => {
//         if(n%2 == 0) {
//             return n*2;
//         } else return n*3;
//     }
//     let newArr = nums.map(getNew);
//     return newArr;
// }
//
// console.log(modifyArray(nums));

function modifyArray(nums) {
    let getNew = (n) => {
        let a = (n%2 == 0) ? n*2 : n*3;
        return a;
    }
    let newArr = nums.map(getNew)
    return newArr;
}

console.log(modifyArray(nums));
