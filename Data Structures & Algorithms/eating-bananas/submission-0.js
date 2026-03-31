class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    //[1, 2, 3, 4] h -> 5

    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result;
        while(left <= right) {
            let totalTime = 0;
            let mid = Math.floor((left + right) / 2);
            for(let i = 0; i < piles.length; i++) {
                let currPileTime = Math.ceil(piles[i] / mid);
                totalTime += currPileTime;
            }
            if(totalTime <= h) {
                result = mid;
                right = mid - 1;
            }
            if(totalTime > h) {
                left = mid + 1;
            }
        }
        return result;
    }
}
