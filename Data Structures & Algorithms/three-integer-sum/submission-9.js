class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        let res = [];
        console.log(sortedNums);
        for(let i = 0; i < sortedNums.length; i++) {
            let left = i + 1;
            let right = sortedNums.length - 1;
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            while(left < right) {
                if(sortedNums[i] + sortedNums[left] + sortedNums[right] === 0) {
                    res.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left++;
                    right--;
                    while(nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while(nums[right] === nums[right + 1]) {
                        right++;
                    }
                } else if(sortedNums[i] + sortedNums[left] + sortedNums[right] > 0) {
                    right--;
                } else if(sortedNums[i] + sortedNums[left] + sortedNums[right] < 0) {
                    left++;
                }
            }
        }
        return res;
    }
}
