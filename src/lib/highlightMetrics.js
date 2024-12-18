// highlightMetrics.js
// This function identifies the best metrics among selected businesses.
// For TTM Revenue & TTM Profit: higher is better.
// For Asking Price, Price-to-Revenue, Price-to-Profit: lower is better.

export function highlightMetrics(businesses) {
    if (!Array.isArray(businesses) || businesses.length === 0) {
        return {
            'TTM Revenue': 0,
            'TTM Profit': 0,
            'Asking Price': 0,
            'price to revenue': Infinity,
            'price-to-profit': Infinity
        };
    }

    let bestRevenue = Number.NEGATIVE_INFINITY;
    let bestProfit = Number.NEGATIVE_INFINITY;
    let bestPrice = Number.NEGATIVE_INFINITY;
    let bestPriceToRevenue = Infinity;
    let bestPriceToProfit = Infinity;

    businesses.forEach(b => {
        const revenue = Number(b['TTM Revenue']) || 0;
        const profit = Number(b['TTM Profit']) || 0;
        const price = Number(b['Asking Price']) || 0;
        const ptr = revenue > 0 ? price / revenue : Infinity;
        const ptp = profit > 0 ? price / profit : Infinity;

        if (revenue > bestRevenue) bestRevenue = revenue;
        if (profit > bestProfit) bestProfit = profit;
        if (price > bestPrice) bestPrice = price;
        if (ptr < bestPriceToRevenue) bestPriceToRevenue = ptr;
        if (ptp < bestPriceToProfit) bestPriceToProfit = ptp;
    });

    // Ensure all keys are returned, and handle infinite values gracefully
    return {
        'TTM Revenue': isFinite(bestRevenue) ? bestRevenue : 0,
        'TTM Profit': isFinite(bestProfit) ? bestProfit : 0,
        'Asking Price': isFinite(bestPrice) ? bestPrice : 0,
        'price to revenue': isFinite(bestPriceToRevenue) ? bestPriceToRevenue : Infinity,
        'price-to-profit': isFinite(bestPriceToProfit) ? bestPriceToProfit : Infinity
    };
}