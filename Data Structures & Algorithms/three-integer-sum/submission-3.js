class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        let result = [];
        for(let i = 0; i < sortedNums.length; i++) {
            if(i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            let left = i + 1, right = sortedNums.length - 1;
            while(left < right) {
                let sum = sortedNums[left] + sortedNums[right] + sortedNums[i];
                if(sum > 0) {
                    right--;
                }
                if(sum < 0) {
                    left++;
                }
                if(sum === 0) {
                    result.push([sortedNums[left], sortedNums[right], sortedNums[i]]);

                    while(left < right && sortedNums[left] === sortedNums[left + 1]) {
                        left++;
                    }
                    while(right > left && sortedNums[right] === sortedNums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                }
            }
        }
        return result;
    }
}
