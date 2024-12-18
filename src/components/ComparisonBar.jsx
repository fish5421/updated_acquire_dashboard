import React, { useMemo } from 'react';
import ComparisonCard from './ComparisonCard';
import { highlightMetrics } from '../lib/highlightMetrics';

const ComparisonBar = ({ selectedBusinesses, onRemove }) => {
    const bestMetrics = useMemo(() => highlightMetrics(selectedBusinesses), [selectedBusinesses]);

    const isBestMetric = (metricName, value) => {
        return bestMetrics[metricName] === value;
    };

    return (
        <div className="fixed top-0 w-full bg-white shadow-md flex overflow-x-auto z-50 items-center border-b border-neutral-light">
            <div className="flex items-center px-4 py-2 border-r border-neutral-light bg-tertiary/20">
                <span className="text-sm font-semibold text-neutral-dark">Comparing {selectedBusinesses.length} of 4</span>
            </div>
            {selectedBusinesses.map((b) => (
                <ComparisonCard
                    key={b.id}
                    business={b}
                    isBestMetric={(metricName) => {
                        let metricValue;
                        if (metricName === 'TTM Revenue') metricValue = Number(b['TTM Revenue']) || 0;
                        if (metricName === 'TTM Profit') metricValue = Number(b['TTM Profit']) || 0;
                        if (metricName === 'Asking Price') metricValue = Number(b['Asking Price']) || 0;
                        if (metricName === 'price to revenue') {
                            const rev = Number(b['TTM Revenue']) || 0;
                            metricValue = rev > 0 ? (Number(b['Asking Price']) || 0) / rev : Infinity;
                        }
                        if (metricName === 'price-to-profit') {
                            const prof = Number(b['TTM Profit']) || 0;
                            metricValue = prof > 0 ? (Number(b['Asking Price']) || 0) / prof : Infinity;
                        }
                        return isBestMetric(metricName, metricValue);
                    }}
                    onRemove={() => onRemove(b.id)}
                />
            ))}
        </div>
    );
};

export default ComparisonBar;