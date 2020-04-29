/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let numsMap = new Map();
    let complement;
    
    for (let i = 0; i < nums.length; i++) {
        complement = target - [nums[i]];
        
        if (numsMap.has(complement)) {
            return [numsMap.get(complement), i];
        }
        
        numsMap.set(nums[i], i);
    }
    
    return [];
};

console.log(twoSum([1,2,3,4], 7));