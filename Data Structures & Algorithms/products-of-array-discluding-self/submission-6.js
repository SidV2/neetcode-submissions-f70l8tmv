class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixArr = new Array(nums.length).fill(1);
        let suffixArr = new Array(nums.length).fill(1);
        let resultArr = new Array(nums.length).fill(1);
        prefixArr[0] = 1;
        suffixArr[nums.length - 1] = 1;
        for(let i = 1; i < nums.length; i++) {
            prefixArr[i] = nums[i - 1] * prefixArr[i - 1];
        }
        for(let i = nums.length - 2; i >= 0; i--) {
            suffixArr[i] = nums[i + 1] * suffixArr[i + 1];
        }
        for(let i = 0; i < nums.length; i++) {
            resultArr[i] = prefixArr[i] * suffixArr[i];
        }
        return resultArr;
    }
}
