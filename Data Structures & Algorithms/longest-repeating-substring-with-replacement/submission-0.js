class Solution {
    characterReplacement(s, k) {
        let freqMap = new Map();
        let left = 0;
        let res = 0;
        let maxFreqTillNow = 0;

        for (let right = 0; right < s.length; right++) {
            freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);
            maxFreqTillNow = Math.max(maxFreqTillNow, freqMap.get(s[right]));
            const windowLength = right - left + 1;
            if ((windowLength) - maxFreqTillNow > k) {
                freqMap.set(s[left], freqMap.get(s[left]) - 1);
                left++;
            }

            // Update the result with the current valid window size
            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}