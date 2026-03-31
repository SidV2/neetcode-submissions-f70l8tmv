class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] in map) return true;
            map[nums[i]] = 1;
            console.log(map, nums[i]);
            
        }
        return false;
    }
}
