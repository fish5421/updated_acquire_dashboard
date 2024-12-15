import React, { createContext, useState, useMemo, useCallback, useEffect } from 'react';

const DashboardContext = createContext();

const defaultFilters = {
  revenue: [0, 10000000],
  profit: [0, 10000000],
  price: [0, 100000000],
  businessType: 'all'
};

const defaultFilterRanges = {
  revenue: [0, 10000000],
  profit: [0, 10000000],
  price: [0, 100000000],
};

const DashboardProvider = ({ children }) => {
  const [filters, setFilters] = useState(defaultFilters);
  const [filterRanges, setFilterRanges] = useState(defaultFilterRanges);
  const [data, setData] = useState([]);
  const [hasUploadedData, setHasUploadedData] = useState(false);
  const [businessTypes, setBusinessTypes] = useState(['all']);

  useEffect(() => {
    console.log('DashboardContext state updated:', {
      filters,
      filterRanges,
      dataLength: data.length,
      hasUploadedData,
      businessTypes
    });
  }, [filters, filterRanges, data, hasUploadedData, businessTypes]);

  const updateFilterRanges = useCallback((newData) => {
    if (newData.length === 0) {
      setFilterRanges(defaultFilterRanges);
      setFilters(defaultFilters);
      setBusinessTypes(['all']);
    } else {
      const newRanges = {
        revenue: [
          Math.min(...newData.map(item => item['TTM Revenue'])),
          Math.max(...newData.map(item => item['TTM Revenue']))
        ],
        profit: [
          Math.min(...newData.map(item => item['TTM Profit'])),
          Math.max(...newData.map(item => item['TTM Profit']))
        ],
        price: [
          Math.min(...newData.map(item => item['Asking Price'])),
          Math.max(...newData.map(item => item['Asking Price']))
        ],
      };
      setFilterRanges(newRanges);
      setFilters(prevFilters => ({
        ...prevFilters,
        revenue: newRanges.revenue,
        profit: newRanges.profit,
        price: newRanges.price,
      }));

      // Update business types
      const uniqueBusinessTypes = ['all', ...new Set(newData.map(item => item['Business Type']))];
      setBusinessTypes(uniqueBusinessTypes);
    }
  }, []);

  const removeListingFromData = useCallback((id) => {
    setData(prevData => {
      const newData = prevData.filter(item => item.id !== id);
      updateFilterRanges(newData);
      setHasUploadedData(newData.length > 0);
      return newData;
    });
  }, [updateFilterRanges]);

  const setDataAndUpdateUploadStatus = useCallback((newData) => {
    // Add a unique id to each item if it doesn't already have one
    const dataWithIds = newData.map((item, index) => ({
      ...item,
      id: item.id || `item-${index}`
    }));
    setData(dataWithIds);
    setHasUploadedData(dataWithIds.length > 0);
    updateFilterRanges(dataWithIds);
  }, [updateFilterRanges]);

  const value = useMemo(() => ({
    filters,
    setFilters,
    filterRanges,
    updateFilterRanges,
    data,
    setData: setDataAndUpdateUploadStatus,
    removeListingFromData,
    hasUploadedData,
    businessTypes,
  }), [filters, filterRanges, data, removeListingFromData, updateFilterRanges, hasUploadedData, setDataAndUpdateUploadStatus, businessTypes]);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };