class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefArr = new Array(nums.length).fill(1);
        let suffArr = new Array(nums.length).fill(1);
        let resArr = new Array(nums.length).fill(1);
        for(let i = 1; i < nums.length; i++) {
            prefArr[i] = prefArr[i - 1] * nums[i - 1];
        }
        for(let i = nums.length - 2; i >= 0 ; i--) {
            suffArr[i] = suffArr[i + 1] * nums[i + 1];
        }
        for(let i = 0; i < nums.length; i++) {
            resArr[i] = prefArr[i] * suffArr[i];
        }
        return resArr;
    }
}
