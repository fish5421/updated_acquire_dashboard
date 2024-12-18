import React from 'react';
import { formatCurrency } from '@/lib/utils';
import { X } from 'lucide-react';

const ComparisonCard = ({ business, isBestMetric, onRemove }) => {
    const revenue = Number(business['TTM Revenue']) || 0;
    const profit = Number(business['TTM Profit']) || 0;
    const price = Number(business['Asking Price']) || 0;
    const priceToRevenue = revenue ? price / revenue : null;
    const priceToProfit = profit ? price / profit : null;

    const getClass = (metricName) =>
        isBestMetric(metricName) ? 'font-bold text-primary' : 'text-neutral-dark';

    return (
        <div className="cards_in_bar min-w-[200px] px-4 py-2 border-r border-neutral-light bg-white">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium truncate text-neutral-dark">{business.name || 'N/A'}</h3>
                <button
                    className="text-neutral-light hover:text-neutral-dark"
                    onClick={onRemove}
                    aria-label="Remove from comparison"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
            <div className={`text-sm ${getClass('TTM Revenue')}`}>Revenue: {formatCurrency(revenue)}</div>
            <div className={`text-sm ${getClass('TTM Profit')}`}>Profit: {formatCurrency(profit)}</div>
            <div className={`text-sm ${getClass('Asking Price')}`}>Asking Price: {formatCurrency(price)}</div>
            <div className={`text-sm ${getClass('price to revenue')}`}>
                Price/Revenue: {priceToRevenue ? priceToRevenue.toFixed(2) : 'N/A'}
            </div>
            <div className={`text-sm ${getClass('price-to-profit')}`}>
                Price/Profit: {priceToProfit ? priceToProfit.toFixed(2) : 'N/A'}
            </div>
        </div>
    );
};

export default ComparisonCard;