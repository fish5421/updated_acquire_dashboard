import React, { useMemo, useContext, useState, useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCompactNumber, formatCurrency } from '@/lib/utils';
import { DashboardContext } from '@/context/DashboardContext';

const CHUNK_SIZE = 100;

const RevenueVsPriceChart = () => {
  const { data, filters } = useContext(DashboardContext);
  const [displayedData, setDisplayedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filteredData = useMemo(() => {
    return data.filter(item =>
      (!filters.revenue || (item['TTM Revenue'] >= filters.revenue[0] && item['TTM Revenue'] <= filters.revenue[1])) &&
      (!filters.profit || (item['TTM Profit'] >= filters.profit[0] && item['TTM Profit'] <= filters.profit[1])) &&
      (!filters.price || (item['Asking Price'] >= filters.price[0] && item['Asking Price'] <= filters.price[1])) &&
      (!filters.businessType || filters.businessType === 'all' || item['Business Type'] === filters.businessType)
    );
  }, [data, filters]);

  const loadChunk = useCallback((startIndex) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const chunk = filteredData.slice(startIndex, startIndex + CHUNK_SIZE);
        resolve(chunk);
      }, 0);
    });
  }, [filteredData]);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    setDisplayedData([]);
    
    for (let i = 0; i < filteredData.length; i += CHUNK_SIZE) {
      const chunk = await loadChunk(i);
      setDisplayedData(prev => [...prev, ...chunk]);
    }
    
    setIsLoading(false);
  }, [filteredData, loadChunk]);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const calculateDomain = useCallback((data, key, buffer = 0.1, allowNegative = false) => {
    if (data.length === 0) return [0, 1];
    const minValue = allowNegative ? Math.min(...data.map(item => item[key])) : Math.max(0, Math.min(...data.map(item => item[key])));
    const maxValue = Math.max(...data.map(item => item[key]));
    const range = maxValue - minValue;
    return [
      minValue - (allowNegative ? range * buffer : 0),
      maxValue + range * buffer
    ];
  }, []);

  const domains = useMemo(() => ({
    revenue: calculateDomain(displayedData, 'TTM Revenue', 0.1, false),
    price: calculateDomain(displayedData, 'Asking Price', 0.1, true)
  }), [displayedData, calculateDomain]);

  if (isLoading) {
    return <div className="h-[300px] flex items-center justify-center">Loading chart data...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="TTM Revenue"
          name="Revenue"
          unit="$"
          domain={domains.revenue}
          tickFormatter={(value) => formatCompactNumber(value)}
        />
        <YAxis
          type="number"
          dataKey="Asking Price"
          name="Price"
          unit="$"
          domain={domains.price}
          tickFormatter={(value) => formatCompactNumber(value)}
        />
        <Tooltip
          formatter={(value, name) => [formatCurrency(value), name]}
          labelFormatter={() => ''}
        />
        <Scatter name="Revenue vs Price" data={displayedData} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default React.memo(RevenueVsPriceChart);