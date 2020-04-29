/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
    let leftProduct, rightProduct, output;
    leftProduct = [];
    rightProduct = [];
    output = [];

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            leftProduct[i] = rightProduct[nums.length - 1] = 1;
        } else {
            leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
            rightProduct[nums.length - 1 - i] = rightProduct[nums.length - i] * nums[nums.length - i]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        output[i] = leftProduct[i] * rightProduct[i];
    }

    return output;
};

console.log(productExceptSelf([1,2,3,4,1]));