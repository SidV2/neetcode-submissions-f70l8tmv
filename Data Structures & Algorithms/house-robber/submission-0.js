class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Array(nums.length).fill(-1);
        function dfs(i) {
            if(i >= nums.length) {
                return 0;
            }
            if(cache[i] !== -1) {
                return cache[i];
            }
            cache[i] = Math.max(dfs(i + 1), nums[i] + dfs(i + 2));
            return cache[i];
        }
        return dfs(0);
    }
}
