class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let suffix = 1;
        let suffArr = new Array(nums.length).fill(1);
        let prefArr = new Array(nums.length).fill(1);
        let res = new Array(nums.length).fill(1);
        for(let i = 0; i < nums.length; i++) {
            prefArr[i] = prefix;
            prefix = prefix * nums[i];
        }
        for(let i = nums.length - 1; i >= 0; i--) {
            suffArr[i] = suffix;
            suffix = suffix * nums[i];
        }

        for(let i = 0; i < nums.length; i++) {
            res[i] = prefArr[i] * suffArr[i];
        }
        return res;
    }
}
