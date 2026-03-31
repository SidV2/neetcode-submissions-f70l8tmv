class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set(nums);
        let longestStreak = 0;
        for(let num of hashSet) {
            let count = 0;
            if(!hashSet.has(num - 1)) {
                count++;
                let latestNumInSeq = num;
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
