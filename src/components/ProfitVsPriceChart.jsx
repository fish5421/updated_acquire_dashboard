import React, { useMemo, useContext, useState, useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCompactNumber, formatCurrency } from '@/lib/utils';
import { DashboardContext } from '@/context/DashboardContext';

const CHUNK_SIZE = 100;

const ProfitVsPriceChart = () => {
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

  const calculateDomain = useCallback((data, key, buffer = 0.1) => {
    if (data.length === 0) return [0, 1];
    const values = data.map(item => Number(item[key]));
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const range = maxValue - minValue;
    return [
      minValue < 0 ? minValue - Math.abs(range * buffer) : Math.max(0, minValue - range * buffer),
      maxValue + range * buffer
    ];
  }, []);

  const domains = useMemo(() => ({
    profit: calculateDomain(displayedData, 'TTM Profit'),
    price: calculateDomain(displayedData, 'Asking Price')
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
          dataKey="TTM Profit"
          name="Profit"
          unit="$"
          domain={domains.profit}
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
        <Scatter name="Profit vs Price" data={displayedData} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default React.memo(ProfitVsPriceChart);