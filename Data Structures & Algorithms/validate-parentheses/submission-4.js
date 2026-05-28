class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeOpen = {
            ')': '(',
            '}': '{',
            ']': '[' 
        }
        for(const char of s) {
            if(char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {
                const peekStackTop = stack[stack.length - 1];
                if(closeOpen[char] !== peekStackTop || !stack.length) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}
