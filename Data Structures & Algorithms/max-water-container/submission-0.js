class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
        let result = 0;
        while(left < right) {
            const area = Math.min(heights[left], heights[right]) * (right - left);
            console.log(area);
            result = Math.max(result, area);
            if(heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
            
        }
        return result;
    }
}
