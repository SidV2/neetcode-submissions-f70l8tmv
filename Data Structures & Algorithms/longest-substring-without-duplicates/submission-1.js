class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longestSubstring = 0;
        let charMap = {};
        for(let right = 0; right < s.length; right++) {
            let char = s[right];
            if(char in charMap) {
                left = Math.max(charMap[char] + 1, left);
            }
            charMap[char] = right;
            longestSubstring = Math.max(longestSubstring, right - left + 1);
        }
        return longestSubstring;
    }
}
