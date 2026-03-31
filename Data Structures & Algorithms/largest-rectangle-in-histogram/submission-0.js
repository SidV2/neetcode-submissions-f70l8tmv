class Solution {
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
                let poppedIndex = stack.pop();
                let width;
                if (stack.length === 0) {
                    width = i;
                } else {
                    width = i - stack[stack.length - 1] - 1;
                }
                let area = heights[poppedIndex] * width;
                maxArea = Math.max(area, maxArea);
            }
            stack.push(i);
        }

        // Drain the stack
        while (stack.length) {
            let poppedIndex = stack.pop();
            let width;
            if (stack.length === 0) {
                width = heights.length;
            } else {
                width = heights.length - stack[stack.length - 1] - 1;
            }
            let area = heights[poppedIndex] * width;
            maxArea = Math.max(area, maxArea);
        }

        return maxArea;
    }
}