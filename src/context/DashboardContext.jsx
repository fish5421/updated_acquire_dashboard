import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';

/**
 * DashboardContext provides global state for the dashboard and file management.
 * 
 * Changes made:
 * - Removed single selectedFileId; replaced with selectedFileIds (array).
 * - Data now aggregates from all selected files.
 * - Added isLoadingData to handle loading states when selection changes.
 * - Updated logic in useEffect to handle multiple file selections.
 */

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [selectedFileIds, setSelectedFileIds] = useState([]);

  // Filters and ranges
  const [filters, setFilters] = useState({
    revenue: [0, 0],
    profit: [0, 0],
    price: [0, 0],
    businessType: 'all',
  });

  const [filterRanges, setFilterRanges] = useState({
    revenue: [0, 0],
    profit: [0, 0],
    price: [0, 0],
  });

  const [isLoadingData, setIsLoadingData] = useState(false);

  const updateFilterRanges = useCallback((data) => {
    if (!data || data.length === 0) return;

    const getNumeric = (item, key) => Number(item[key]) || 0;

    const minRevenue = Math.min(...data.map(d => getNumeric(d, 'TTM Revenue')));
    const maxRevenue = Math.max(...data.map(d => getNumeric(d, 'TTM Revenue')));
    const minProfit = Math.min(...data.map(d => getNumeric(d, 'TTM Profit')));
    const maxProfit = Math.max(...data.map(d => getNumeric(d, 'TTM Profit')));
    const minPrice = Math.min(...data.map(d => getNumeric(d, 'Asking Price')));
    const maxPrice = Math.max(...data.map(d => getNumeric(d, 'Asking Price')));

    setFilterRanges({
      revenue: [minRevenue, maxRevenue],
      profit: [minProfit, maxProfit],
      price: [minPrice, maxPrice]
    });

    // Reset filters to full range if needed (if initial upload)
    setFilters(prevFilters => {
      const updated = { ...prevFilters };
      if (prevFilters.revenue[0] === 0 && prevFilters.revenue[1] === 0) {
        updated.revenue = [minRevenue, maxRevenue];
      }
      if (prevFilters.profit[0] === 0 && prevFilters.profit[1] === 0) {
        updated.profit = [minProfit, maxProfit];
      }
      if (prevFilters.price[0] === 0 && prevFilters.price[1] === 0) {
        updated.price = [minPrice, maxPrice];
      }
      return updated;
    });
  }, []);

  // Derive selected files
  const selectedFiles = useMemo(() => {
    return files.filter(file => selectedFileIds.includes(file.id));
  }, [files, selectedFileIds]);

  // Aggregated data from all selected files
  const data = useMemo(() => {
    if (selectedFiles.length === 0) return [];
    return selectedFiles.reduce((acc, file) => {
      if (file.data && Array.isArray(file.data)) {
        return acc.concat(file.data);
      }
      return acc;
    }, []);
  }, [selectedFiles]);

  const hasUploadedData = files.length > 0;

  // Derive business types
  const businessTypes = useMemo(() => {
    if (!hasUploadedData || data.length === 0) return ['all'];
    const types = new Set();
    data.forEach(item => {
      if (item['Business Type']) {
        types.add(item['Business Type']);
      }
    });
    return ['all', ...Array.from(types)];
  }, [data, hasUploadedData]);

  // Handle updates when selected files change
  useEffect(() => {
    if (selectedFileIds.length === 0) {
      // No files selected, reset filters to defaults
      setFilters({
        revenue: [0, 0],
        profit: [0, 0],
        price: [0, 0],
        businessType: 'all',
      });
      return;
    }

    setIsLoadingData(true);
    // Simulate async update if needed. Here we just update immediately.
    Promise.resolve().then(() => {
      updateFilterRanges(data);
      setIsLoadingData(false);
    });
  }, [selectedFileIds, data, updateFilterRanges]);

  return (
    <DashboardContext.Provider
      value={{
        files,
        setFiles,
        selectedFileIds,
        setSelectedFileIds,
        data,
        filters,
        setFilters,
        filterRanges,
        updateFilterRanges,
        hasUploadedData,
        businessTypes,
        isLoadingData
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};