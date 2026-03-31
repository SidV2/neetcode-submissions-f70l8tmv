class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = height.length - 1;
        let lMax = height[left], rMax = height[right];
        let res = 0;
        while(left < right) {
            if(lMax < rMax) {
                left++;
                lMax = Math.max(lMax, height[left]);
                res += lMax - height[left];
            } else {
                right--;
                rMax = Math.max(rMax, height[right]);
                res += rMax - height[right];
            } 
        }
    return res;
    }
}
