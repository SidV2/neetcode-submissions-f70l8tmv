class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqMap = {};
        for(let i = 0; i < nums.length; i++) {
            freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
            if(freqMap[nums[i]] === 2) return true;
        }
        return false;
    }
}
