class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let result = true;
        if(s.length !== t.length) return false;
        const sMap = {};
        const tMap = {};
        for(let i = 0; i < s.length; i++) {
            let char = s[i];
            sMap[char] = (char in sMap) ? sMap[char] += 1 : 1;
        }
        for(let i = 0; i < t.length; i++) {
            let char = t[i];
            tMap[char] = (char in tMap) ? tMap[char] += 1 : 1;
        }
        Object.keys(sMap).forEach(key => {
            if(!(key in tMap)) result = false;
            if(sMap[key] !== tMap[key]) result = false;
        });
        return result;
    }
}
