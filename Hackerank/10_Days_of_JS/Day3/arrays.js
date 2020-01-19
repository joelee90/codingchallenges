nums = [2,3,6,6,5,5,2,6,8,9,3,9]
let a = nums.sort(function(a,b) {return b-a});
console.log(a);
function secondLargest(nums) {
    let a = nums.sort(function(a,b) {return b-a});
    for(let i = 0; i < a.length; i++) {
        if(nums[i] === nums[0]) {

        } else {
            return nums[i];
        }
    }
}

console.log(secondLargest(nums));
