class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqMap = {};
        let result = true;
        if(s.length !== t.length) return false;
        for(const char of s) {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        for(const char of t) {
            if(char in freqMap) {
                freqMap[char] = freqMap[char] - 1;
            }
        }
        Object.keys(freqMap).forEach((key) => {
            if(freqMap[key] !== 0) {
                result = false;
            }
        });
        return result;
    }
}
