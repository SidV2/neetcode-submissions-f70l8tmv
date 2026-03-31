class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};
        let result = [];
        const bucket = Array(nums.length + 1).fill(null).map(() => []);
        for(let i = 0 ; i < nums.length; i++) {
            let char = nums[i];
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        console.log(freqMap);
        Object.entries(freqMap).forEach(([num, freq]) => {
            bucket[freq].push(num);
        })
        for(let i = bucket.length - 1; i >=0 ; i--) {
            while(bucket[i].length && k !== 0) {
                result.push(bucket[i].pop());
                k--;
            }
        }
        return result;
    }

}
