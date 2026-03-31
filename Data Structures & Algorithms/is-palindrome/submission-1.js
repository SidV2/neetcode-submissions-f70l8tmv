class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const formattedStr = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
        let left = 0, right = formattedStr.length - 1;
        while(left < formattedStr.length - 1 && right >= 0) {
            if(formattedStr[left] !== formattedStr[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
