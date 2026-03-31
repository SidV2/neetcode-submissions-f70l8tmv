class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let res = 0;
        for(let i = 0; i < nums.length; i++) {
            let length = 0;
            if(!(numsSet.has(nums[i] - 1))) {
                //begin sequnce
                length++;
                while(numsSet.has(nums[i] + length)) {
                    length++;
                }
            }
            res = Math.max(res, length);
        }
        return res;
    }
}
