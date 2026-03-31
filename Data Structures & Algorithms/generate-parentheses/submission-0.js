class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    dfs(result, str, openCount, closeCount, n) {
        //base case
        if(openCount === n && closeCount === n) {
            result.push(str);
            return;
        }
        if(openCount < n) {
            this.dfs(result, str + '(', openCount + 1, closeCount, n);
        }
        if(closeCount < openCount) {
            this.dfs(result, str + ')', openCount, closeCount + 1, n);
        }
    }
    generateParenthesis(n) {
        let result = [];
        let str = "";
        let openCount = 0;
        let closeCount = 0;
        this.dfs(result, str, openCount, closeCount, n);
        return result;
    }
}
