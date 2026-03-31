class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1;
        while(left < right) {
            if(!this.alphaNum(s[left])) {
                left++;
                continue;
            }
            if(!this.alphaNum(s[right])) {
                right--;
                continue;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            if(this.alphaNum(s[left]) && this.alphaNum(s[right])) {
                left++;
                right--;
            }
        }
        return true;
    }

    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
