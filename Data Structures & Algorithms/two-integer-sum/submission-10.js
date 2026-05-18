class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexMap = {};
        for(let i = 0; i < nums.length; i++) {
            const otherNumber = target - nums[i];
            if(otherNumber in indexMap) {
                return [indexMap[otherNumber], i];
            }
            indexMap[nums[i]] = i;
        }
    }
}
