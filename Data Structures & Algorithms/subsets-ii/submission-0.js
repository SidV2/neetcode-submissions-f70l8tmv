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
        let left = i;
        while(nums[left] === nums[left + 1]) {
            left++;
        }
        this.dfs(nums, i + 1, subset, res);
        subset.pop();
        this.dfs(nums, left + 1, subset, res);
    }

    subsetsWithDup(nums) {
        const res = [];
        const subset = [];
        const sortedNums = nums.sort((a ,b) => a - b);
        this.dfs(sortedNums, 0, subset, res);
        return res;
    }
}


[[],[1],[1,2],[1,1],[1,2,1],[2]]
[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]