class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let formattedStr = '';
        for(const str of strs) {
            formattedStr += `#${str.length}#${str}`;
        }
        console.log(formattedStr);
        return formattedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let left = 0;
        while(str[left] === '#') {
            const secondHash = str.indexOf('#', left + 1);
            const length = Number(str.substring(left + 1, secondHash));
            const decWord = str.substring(secondHash + 1, secondHash + 1 + length);
            result.push(decWord);
            left = secondHash + 1 + length;
        }
        return result;
    }
}
