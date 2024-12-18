import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [files, setFilesState] = useState([]);
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

  // Memoized selector for selectedFiles
  const selectedFilesSelector = useMemo(() => {
    return files.filter(file => selectedFileIds.includes(file.id));
  }, [files, selectedFileIds]);

  // Memoized selector for data
  const dataSelector = useMemo(() => {
    if (selectedFilesSelector.length === 0) return [];
    return selectedFilesSelector.reduce((acc, file) => {
      if (file.data && Array.isArray(file.data)) {
        return acc.concat(file.data);
      }
      return acc;
    }, []);
  }, [selectedFilesSelector]);

  // Memoized selector for hasUploadedData
  const hasUploadedDataSelector = useMemo(() => {
    return files.length > 0;
  }, [files]);

  // Memoized selector for businessTypes
  const businessTypesSelector = useMemo(() => {
    if (!hasUploadedDataSelector || dataSelector.length === 0) return ['all'];
    const types = new Set();
    dataSelector.forEach(item => {
      if (item['Business Type']) {
        types.add(item['Business Type']);
      }
    });
    return ['all', ...Array.from(types)];
  }, [dataSelector, hasUploadedDataSelector]);

  // Update filter ranges whenever selectedFileIds or data changes
  useEffect(() => {
    if (selectedFileIds.length === 0) {
      setFilters({
        revenue: [0, 0],
        profit: [0, 0],
        price: [0, 0],
        businessType: 'all',
      });
      return;
    }

    setIsLoadingData(true);
    Promise.resolve().then(() => {
      updateFilterRanges(dataSelector);
      setIsLoadingData(false);
    });
  }, [selectedFileIds, dataSelector, updateFilterRanges]);

  // Derived filtered data
  const filteredDataSelector = useMemo(() => {
    if (dataSelector.length === 0) return [];
    const f = filters;
    return dataSelector.filter(item =>
      (!f.revenue || (item['TTM Revenue'] >= f.revenue[0] && item['TTM Revenue'] <= f.revenue[1])) &&
      (!f.profit || (item['TTM Profit'] >= f.profit[0] && item['TTM Profit'] <= f.profit[1])) &&
      (!f.price || (item['Asking Price'] >= f.price[0] && item['Asking Price'] <= f.price[1])) &&
      (!f.businessType || f.businessType === 'all' || item['Business Type'] === f.businessType)
    );
  }, [dataSelector, filters]);

  // Function to remove a listing from data/files
  const removeListingFromData = useCallback((id) => {
    setFilesState(prevFiles => {
      return prevFiles.map(file => {
        if (!file.data) return file;
        const newData = file.data.filter(item => item.id !== id);
        if (newData.length === file.data.length) {
          // No change
          return file;
        }
        return { ...file, data: newData };
      });
    });
  }, []);

  // Safe setter to ensure unique IDs and array format (appends files)
  const safeSetFiles = useCallback((newFiles) => {
    // Normalize newFiles to always be an array
    const normalizedFiles = Array.isArray(newFiles) ? newFiles : [newFiles].filter(Boolean);

    setFilesState((prevFiles) => {
      // Create a map of existing file names to prevent duplicates
      const existingFileNames = new Set(prevFiles.map(f => f.name));
      
      // Filter out any files that already exist by name
      const uniqueNewFiles = normalizedFiles.filter(file => !existingFileNames.has(file.name));

      // Process and append only unique files
      return [
        ...prevFiles,
        ...uniqueNewFiles.map(file => {
          if (!file || !file.data) return file;

          const normalizedData = Array.isArray(file.data) ? file.data : [];

          return {
            ...file,
            data: normalizedData.map(item => {
              return { ...item, id: item.id ?? uuidv4() };
            })
          };
        })
      ];
    });
  }, []);

  // NEW FUNCTION ADDED:
  // This function replaces the entire files array without just appending
  const replaceFiles = useCallback((newFiles) => {
    setFilesState(() => {
      return newFiles.map(file => {
        if (!file || !file.data) return file;

        const normalizedData = Array.isArray(file.data) ? file.data : [];

        return {
          ...file,
          data: normalizedData.map(item => {
            return { ...item, id: item.id ?? uuidv4() };
          })
        };
      });
    });
  }, []);

  // Create stable references for getters
  const getHasUploadedData = useCallback(() => hasUploadedDataSelector, [hasUploadedDataSelector]);
  const getData = useCallback(() => dataSelector, [dataSelector]);
  const getBusinessTypes = useCallback(() => businessTypesSelector, [businessTypesSelector]);
  const getFilteredData = useCallback(() => filteredDataSelector, [filteredDataSelector]);

  const value = {
    files,
    setFiles: safeSetFiles, // Appending behavior
    replaceFiles,           // Replacing behavior (newly added)
    selectedFileIds,
    setSelectedFileIds,
    filters,
    setFilters,
    filterRanges,
    updateFilterRanges,
    isLoadingData,
    removeListingFromData,
    getHasUploadedData,
    getData,
    getBusinessTypes,
    getFilteredData,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};