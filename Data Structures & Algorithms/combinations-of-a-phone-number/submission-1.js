class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    dfs(result, charMap, index, digits, str) {
        // base case
        if(index === digits.length) {
            result.push(str);
            return;
        }
        const char = digits[index];
        const charMapWord = charMap[Number(char)];
        for(let i = 0; i < charMapWord.length; i++) {
            this.dfs(result, charMap, index + 1, digits, str + charMapWord[i]);
        }
        return result;

    }
    letterCombinations(digits) {
        if(!digits.length) return [];
        let result = [];
        let str = "";
        const charMap = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz'
        }
        let index = 0;
        this.dfs(result, charMap, index, digits, str);
        return result;
    }
}


// Exactly! So now try writing the code — you have all the pieces:

// A dfs that takes the current index and current combination string
// A base case when index === digits.length
// A loop over the characters mapped to digits[index]
// Recurse with index + 1 and the combination so far

