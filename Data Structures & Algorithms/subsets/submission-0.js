class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    dfs(nums, i, subset, res) {
        if(i >= nums.length) {
            res.push([...subset]);
            return;
        }
        //add it
        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, res);
        subset.pop();
        this.dfs(nums, i + 1, subset, res);
    }

    subsets(nums) {
        const res = [];
        const subset = [];
        this.dfs(nums, 0, subset, res);
        return res;
    }
}
