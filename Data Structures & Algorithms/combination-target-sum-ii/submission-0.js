class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    dfs(result, subset, i, candidates, target) {
        if(target === 0) {
            result.push([...subset]);
            return;
        }
        if(target < 0 || i >= candidates.length) {
            return;
        }
        subset.push(candidates[i]);
        this.dfs(result, subset, i + 1, candidates, target - candidates[i]);
        subset.pop();
        let left = i;
        while(left < candidates.length - 1 && candidates[left + 1] === candidates[left]) {
            left++;
        }
        this.dfs(result, subset, left + 1, candidates, target);
    }
    combinationSum2(candidates, target) {
        let result = [];
        let subset = [];
        let sortedCandidates = candidates.sort((a, b) => a - b);
        this.dfs(result, subset, 0, sortedCandidates, target);
        return result;
    }
}
