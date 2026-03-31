class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    dfs(result, subset, i, nums, target) {
        if(target === 0) {
            result.push([...subset]);
            return;
        }
        if(target < 0 || i >= nums.length) {
            return;
        }
        subset.push(nums[i]);
        this.dfs(result, subset, i, nums, target - nums[i]);
        subset.pop();
        this.dfs(result, subset, i + 1, nums, target);
    }

    combinationSum(nums, target) {
        let result = [];
        let subset = [];
        this.dfs(result, subset, 0, nums, target);
        return result;
    }
}
