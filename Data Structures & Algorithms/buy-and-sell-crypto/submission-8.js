class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 0;
        let profit = 0;
        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < prices[left]) {
                left = i;
            }
            right = i;
            profit = Math.max(profit, prices[right] - prices[left]);
        }
        return profit;
    }
}
