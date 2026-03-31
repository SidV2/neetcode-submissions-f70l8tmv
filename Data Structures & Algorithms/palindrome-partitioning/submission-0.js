class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    dfs(currentIndex, currentPath, result, str) {
        if(currentIndex === str.length) {
            result.push([...currentPath]);
            return;
        }
        function isPalindrome(substring) {   
            let left = 0;
            let right = substring.length - 1;
            while(left < right) {
                if(substring[left] !== substring[right]) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        }
        for(let end = currentIndex; end < str.length; end++) {
            const sub = str.substring(currentIndex, end + 1);
            if(isPalindrome(sub)) {
                currentPath.push(sub);
                this.dfs(end + 1, currentPath, result, str);
                currentPath.pop();
            }
        }
        return result;
    }
    partition(s) {
        let result = [];
        let i = 0;
        let currentPath = [];
        this.dfs(i, currentPath, result, s);
        return result;
    }
}


// Try writing it yourself first! You have all the pieces:

// A recursive function that takes the current index and current path
// A loop that tries every possible end index from current position
// A palindrome check
// Push, recurse, pop
// A base case when index reaches end of string