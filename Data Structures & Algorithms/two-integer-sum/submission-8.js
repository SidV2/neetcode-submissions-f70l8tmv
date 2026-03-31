class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffMap = {};
        let result = [];
        for(let i = 0; i < nums.length; i++) {
            let number = nums[i];
            
            const difference = target - nums[i];
            if(difference in diffMap) {
                result.push(diffMap[difference], i);
                break;
            }
            if(!(number in diffMap)) {
                diffMap[number] = i;
            }
        }
        for(let i = 0; i < nums.length; i++) {
            
        }
        return result;
    }
}
