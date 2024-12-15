import { useState, useEffect, useCallback } from 'react';

const CHUNK_SIZE = 100;

export const useChartData = (data) => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadChunk = useCallback((startIndex) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const chunk = data.slice(startIndex, startIndex + CHUNK_SIZE);
        resolve(chunk);
      }, 0);
    });
  }, [data]);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    const chunks = [];
    for (let i = 0; i < data.length; i += CHUNK_SIZE) {
      const chunk = await loadChunk(i);
      chunks.push(...chunk);
      setChartData(prevData => [...prevData, ...chunk]);
    }
    setIsLoading(false);
  }, [data, loadChunk]);

  useEffect(() => {
    setChartData([]);
    loadData();
  }, [loadData]);

  return { chartData, isLoading };
};