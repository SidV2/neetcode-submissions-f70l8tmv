class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    dfs(result, permuationsRes, nums) {
        // base case
        if(permuationsRes.length === nums.length) {
            result.push([...permuationsRes]);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(!permuationsRes.includes(nums[i])) {
                permuationsRes.push(nums[i]);
                this.dfs(result, permuationsRes, nums);
                permuationsRes.pop();
            }
        }
        return result;
    }

    permute(nums) {
        let result = [];
        let permuationsRes = [];
        this.dfs(result, permuationsRes, nums);
        return result;
    }
}
