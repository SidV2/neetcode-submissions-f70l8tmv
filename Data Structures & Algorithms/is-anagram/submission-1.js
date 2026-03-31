class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const sMap = {};
        for(let i = 0; i < s.length; i++) {
            let char = s[i];
            sMap[char] = (char in sMap) ? sMap[char] += 1 : 1;
        }
        for(let i = 0; i < t.length; i++) {
            let char = t[i];
            if(char in sMap) {
                sMap[char] = sMap[char] - 1;
            }
        }
        for (let key in sMap) {
            if (sMap[key] !== 0) return false;
        }
        return true;
    }
}
