class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        let result = [];
        const freqBuck = Array.from({ length: nums.length + 1 }, () => []);
        for(let i = 0; i < nums.length; i++) {
            let number = nums[i];
            freqMap[number] = (freqMap[number] || 0) + 1;
        }
        Object.keys(freqMap).forEach(key => {
            let number = key;
            let freqOfNumber = freqMap[number];
            freqBuck[freqOfNumber].push(Number(number));
        });
        console.log(freqBuck);
        for(let i = freqBuck.length - 1; i > 0; i--) {
            while(freqBuck[i].length && k !== 0) {
                result.push(freqBuck[i].pop());
                k--;
            }
        }
        return result;
    }
}
