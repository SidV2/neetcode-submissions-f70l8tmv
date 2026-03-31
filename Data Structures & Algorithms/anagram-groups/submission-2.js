class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramHashMap = {};
        for(let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0);
            for(let char of strs[i]) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
             if (!anagramHashMap[key]) {
                anagramHashMap[key] = [];
            }
            anagramHashMap[key].push(strs[i]);
        }
        return Object.values(anagramHashMap);

    }
}
