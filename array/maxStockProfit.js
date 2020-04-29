/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let maxProfit = 0;
    let buyPrice, sellPrice;
    buyPrice = sellPrice = prices[0];

    for(let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = sellPrice = prices[i];
        }

        if (sellPrice < prices[i]) {
            sellPrice = prices[i];
        }

        let profit = sellPrice - buyPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};