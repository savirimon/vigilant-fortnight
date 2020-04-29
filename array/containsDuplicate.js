/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    const countMap = new Map();

    let i = 0;
    while (i < nums.length) {
        if (countMap.has(nums[i])) {
            return true;
        }
        countMap.set(nums[i], 1);
        i++;
    }

    return false;
};

console.log(containsDuplicate([1,2,1]));