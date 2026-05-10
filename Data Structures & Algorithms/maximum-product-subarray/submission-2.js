class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let currMax = 1;
        let currMin = 1;
        for(const num of nums) {
            let tempCurrMax = currMax * num;
            currMax = Math.max(Math.max(num * currMax, num * currMin), num);
            currMin = Math.min(Math.min(tempCurrMax, num * currMin), num);
            res = Math.max(res, currMax);
        }
        return res;
    }
}
