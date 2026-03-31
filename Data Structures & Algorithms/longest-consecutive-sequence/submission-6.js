class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let seqLength = 0;
        for(let i = 0; i < nums.length; i++) {
            if(!numsSet.has(nums[i] - 1)) {
                let currentSqLength = 1
                //start sequence
                let startNumber = nums[i];
                while(numsSet.has(startNumber + 1)) {
                    currentSqLength++;
                    startNumber = startNumber + 1;
                }
                seqLength = Math.max(seqLength, currentSqLength);
            }
        }
        return seqLength;
    }
}
