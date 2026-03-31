class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;
        while(right <= prices.length - 1) {
            if(prices[left] >= prices[right]) {
                //buying opprotuniy
                left = right;
                right++;
            }
            if(prices[right] > prices[left]) {
                //Selling opportunioty
                let profit = Math.max(maxProfit, prices[right] - prices[left]);
                maxProfit = Math.max(profit, maxProfit);
                right++;
            }

        }
        return maxProfit;
    }
}
