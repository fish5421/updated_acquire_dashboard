import React, { useContext, useMemo, useState, useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCompactNumber, formatCurrency } from '@/lib/utils';
import { DashboardContext } from '@/context/DashboardContext';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

const CHUNK_SIZE = 100;

const RevenueVsPriceChart = () => {
  const { getFilteredData } = useContext(DashboardContext);
  const filteredData = useMemo(() => getFilteredData(), [getFilteredData]);

  const [displayedData, setDisplayedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    return (
      <motion.div
        className="h-[300px] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="w-full h-full animate-pulse">
          <Skeleton className="w-full h-full" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-[300px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
          <CartesianGrid stroke="#e0e0e0" />
          <XAxis
            type="number"
            dataKey="TTM Revenue"
            name="Revenue"
            unit="$"
            domain={domains.revenue}
            tickFormatter={(value) => formatCompactNumber(value)}
            stroke="#111729"
          />
          <YAxis
            type="number"
            dataKey="Asking Price"
            name="Price"
            unit="$"
            domain={domains.price}
            tickFormatter={(value) => formatCompactNumber(value)}
            stroke="#111729"
          />
          <Tooltip
            formatter={(value, name) => [formatCurrency(value), name]}
            labelFormatter={() => ''}
            contentStyle={{ backgroundColor: 'white', border: '1px solid #97A3B6', borderRadius: '4px' }}
            itemStyle={{ color: '#111729' }}
          />
          <Scatter name="Revenue vs Price" data={displayedData} fill="#EB862A" />
        </ScatterChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default React.memo(RevenueVsPriceChart);