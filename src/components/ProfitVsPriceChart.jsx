import React, { useContext, useMemo, useState, useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCompactNumber, formatCurrency } from '@/lib/utils';
import { DashboardContext } from '@/context/DashboardContext';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

const CHUNK_SIZE = 100;

const ProfitVsPriceChart = () => {
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
    // Construct a more elaborate skeleton structure
    return (
      <motion.div
        className="relative h-[300px] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* 
          Custom shimmer effect: 
          We'll use a gradient background that moves left to right.
          Tailwind tip: 
          Use bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200
          and position it absolutely, then animate its position with keyframes.
        */}

        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_2s_infinite_linear]"></div>

        {/* 
          Skeleton layout:
          - One vertical axis line (left side)
          - One horizontal axis line (bottom)
          - A few horizontal grid lines
          - Some circular skeletons representing points 
        */}

        <div className="relative h-full w-full p-6 flex flex-col justify-end">
          {/* Vertical axis line */}
          <div className="absolute left-8 bottom-0 h-[80%] w-[2px] rounded bg-gray-200/80"></div>

          {/* Horizontal axis line */}
          <div className="absolute left-8 bottom-6 w-[85%] h-[2px] rounded bg-gray-200/80"></div>

          {/* Horizontal grid lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-8 bottom-6"
              style={{
                bottom: `${6 + (i + 1) * 50}px`,
                width: '85%',
                height: '2px',
                backgroundColor: 'rgba(229, 231, 235, 0.6)',
                borderRadius: '1px'
              }}
            ></div>
          ))}

          {/* Simulated data points as circles */}
          {Array.from({ length: 7 }).map((_, i) => {
            const randomLeft = 10 + Math.random() * 75; // percentage from left axis
            const randomBottom = 10 + Math.random() * 200; // px from bottom axis line
            return (
              <div
                key={i}
                className="absolute bg-gray-200/80 rounded-full"
                style={{
                  left: `${randomLeft}%`,
                  bottom: `${randomBottom}px`,
                  width: '8px',
                  height: '8px'
                }}
              ></div>
            );
          })}
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
            dataKey="TTM Profit"
            name="Profit"
            unit="$"
            domain={domains.profit}
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
          <Scatter name="Profit vs Price" data={displayedData} fill="#287F71" />
        </ScatterChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default React.memo(ProfitVsPriceChart);