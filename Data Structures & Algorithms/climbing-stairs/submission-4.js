class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Array(n).fill(-1);

        function dfs(i) {
            if(i === n) return 1;
            if(i > n) return 0;
            if (cache[i] !== -1) return cache[i];
            return cache[i] = dfs(i + 1) + dfs(i + 2);
        }
        return dfs(0);
    }
}
