class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        let res = [];
        const freqBucket = Array.from({ length: nums.length + 1 }, () => []);
        for(let i = 0; i < nums.length; i++) {
            const number = nums[i];
            freqMap[number] = (freqMap[number] || 0) + 1;
        }
        console.log(freqMap);
        // fill the bucket as per frequency
        
        Object.keys(freqMap).forEach(key => {
            freqBucket[freqMap[key]].push(parseInt(key))
        });
        console.log(freqBucket);
        for(let i = freqBucket.length - 1; i >= 0; i--) {
            if(freqBucket[i].length && res.length < k) {
                const bucket = freqBucket[i];
                for(let j = 0; j < bucket.length; j++) {
                    res.push(bucket[j]);
                }
            }
        }
        return res;
    }
}
