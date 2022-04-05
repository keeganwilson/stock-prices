const best = prices => {
    bestProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > bestProfit) {
                bestProfit = prices[j] - prices[i]
            } 
        }
    } return bestProfit
}  

console.log(best([15, 10, 20, 22, 1, 9]))
console.log(best([1, 2, 3, 4, 5]))
console.log(best([2, 3, 10, 6, 4, 8, 1]))
console.log(best([7, 9, 5, 6, 3, 2]))
console.log(best([0, 100]))

console.log(best([5, 4 , 3, 2, 1]))
console.log(best([100]))
console.log(best([100, 0]))