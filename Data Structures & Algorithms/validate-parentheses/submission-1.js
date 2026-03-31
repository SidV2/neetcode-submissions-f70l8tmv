class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeMap = {
            '}' : '{',
            ')' : '(',
            ']' : '['
        };
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '}' || s[i] === ']' || s[i] === ')') {
                if(stack[stack.length - 1] === closeMap[s[i]]) {
                    stack.pop();
                } else {
                    stack.push(s[i]);
                }
            } else {
                stack.push(s[i]);
            }
            
        }
        return stack.length === 0; 
    }
}
