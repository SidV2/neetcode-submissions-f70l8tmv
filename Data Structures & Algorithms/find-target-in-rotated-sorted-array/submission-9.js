class Solution {
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) return mid;

            // Left half is sorted
            if (nums[left] <= nums[mid]) {
                // Is target inside the sorted left half?
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1; // go left
                } else {
                    left = mid + 1;  // go right
                }
            }
            // Right half is sorted
            else {
                // Is target inside the sorted right half?
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;  // go right
                } else {
                    right = mid - 1; // go left
                }
            }
        }

        return -1;
    }
}