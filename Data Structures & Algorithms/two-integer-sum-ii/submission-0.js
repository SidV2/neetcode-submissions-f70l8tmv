class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        for(let i = 0; i < numbers.length; i++) {
            let tmp = target - numbers[i];
            if(map.has(tmp)) {
                return [map.get(tmp), i + 1];
            }
            map.set(numbers[i], i + 1);
        }
        return [];
    }
}
