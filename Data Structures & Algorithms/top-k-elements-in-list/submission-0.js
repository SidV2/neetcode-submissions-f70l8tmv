class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        const res = [];
        let buckets = new Array(nums.length + 1);
        for(let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        Object.entries(freqMap).forEach(([num, freq]) => {
            buckets[freq].push(Number(num));
        });

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const val of buckets[i]) {
                res.push(Number(val));
                if (res.length === k) return res;
            }
        }
    }
}
