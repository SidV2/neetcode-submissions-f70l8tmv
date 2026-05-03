class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];

    const memo = new Map();

    const dfs = (i, robbedFirst) => {
        // Walked off the end
        if (i >= n) return 0;
        // Can't rob last house if we already robbed first
        if (robbedFirst && i === n - 1) return 0;

        const key = `${i},${robbedFirst}`;
        if (memo.has(key)) return memo.get(key);

        const skip = dfs(i + 1, robbedFirst);
        const rob  = nums[i] + dfs(i + 2, robbedFirst || i === 0);

        const best = Math.max(skip, rob);
        memo.set(key, best);
        return best;
    };

    return dfs(0, false);
}
}
