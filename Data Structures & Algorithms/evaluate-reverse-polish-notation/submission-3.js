class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let result = 0;
        for(let i = 0 ; i < tokens.length; i++) {
            if(!['+', '-', '*', '/'].includes(tokens[i])) {
                stack.push(tokens[i]);
            } else {
                const secondOperand = Number(stack.pop());
                const firstOperand = Number(stack.pop());
                if(tokens[i] === '+') {
                    result = firstOperand + secondOperand;
                }
                if(tokens[i] === "-") {
                    result = firstOperand - secondOperand;
                }
                if(tokens[i] === '*') {
                    result = firstOperand * secondOperand;
                }
                if(tokens[i] === '/') {
                    result = Math.trunc(firstOperand / secondOperand);
                }
                stack.push(result);
            }
        }
        return stack.pop();
    }
}
