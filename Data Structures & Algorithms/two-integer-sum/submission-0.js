class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffMap = {};
        for(let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            if(difference in diffMap) {
                return [diffMap[difference], i];
            }
            diffMap[nums[i]] = i;
        }
        console.log(diffMap);
    }
}
