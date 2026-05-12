class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = new Array(s.length + 1).fill(false);
        dp[s.length] = true;

        for(let i = s.length - 1; i >= 0; i--) {
            for(const word of wordDict) {
                const wordToMatch = s.slice(i, i + word.length);
                if(i + word.length <= s.length && wordToMatch === word) {
                    dp[i] = dp[i + word.length] //checking if the word hast match in the future
                }
                if(dp[i]) break;
            }
        }
        return dp[0];
    }
}
