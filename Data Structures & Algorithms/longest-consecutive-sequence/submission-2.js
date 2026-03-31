class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set(nums);
        let longestStreak = 0;
        for(let i = 0; i < nums.length; i++) {
            let count = 0;
            if(!hashSet.has(nums[i] - 1)) {
                count++;
                let latestNumInSeq = nums[i];
                while(hashSet.has(latestNumInSeq + 1)) {
                    count++;
                    latestNumInSeq++;
                }
            }
            //false sequence starts eliminate them
            longestStreak = Math.max(longestStreak, count);
        }
        return longestStreak;
    }
}
