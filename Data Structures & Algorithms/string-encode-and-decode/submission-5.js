class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let formattedStr = '';
        for(const str of strs) {
            formattedStr += `${str.length}#${str}`;
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
        while(left < str.length) {
            let right = left;
            let length;
            while(str[right] !== '#') {
                right++;
            }
            length = Number(str.substring(left, right));
            const decWord = str.substring(right + 1, right + 1 + length);
            result.push(decWord);
            left = right + 1 + length;
        }
        return result;
    }
}
