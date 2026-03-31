class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        let freqMap = {};
        for(let i = 0; i < s1.length; i++) {
            let char = s1[i];
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        
        for(let i = 0; i <= s2.length - s1.length; i++) {
            const copyOfFreqMap = {...freqMap};
            let left = i;
            let right = left + s1.length;
            const stringToCompare = s2.substring(left, right);
            let isValid = true;
            
            for(let j = 0; j < stringToCompare.length; j++) {
                let char = stringToCompare[j];
                if(char in copyOfFreqMap && copyOfFreqMap[char] > 0) {
                    copyOfFreqMap[char]--;
                } else {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) return true;
        }
        
        return false;
    }
}