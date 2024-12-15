import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { DashboardContext } from '@/context/DashboardContext';
import { calculateFinancialRatioAsNumber } from "@/lib/utils";
import TableHeader from './TableHeader';
import VirtualRow from './VirtualRow';
import Pagination from './Pagination';

const ROW_HEIGHT = 48;

const StartupDetailsTable = ({ onSort, sortConfig }) => {
  const { data, filters, removeListingFromData } = useContext(DashboardContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  
  const filteredData = useMemo(() => {
    return data.filter(item =>
      (!filters.revenue || (item['TTM Revenue'] >= filters.revenue[0] && item['TTM Revenue'] <= filters.revenue[1])) &&
      (!filters.profit || (item['TTM Profit'] >= filters.profit[0] && item['TTM Profit'] <= filters.profit[1])) &&
      (!filters.price || (item['Asking Price'] >= filters.price[0] && item['Asking Price'] <= filters.price[1])) &&
      (!filters.businessType || filters.businessType === 'all' || item['Business Type'] === filters.businessType)
    );
  }, [data, filters]);

  const sortedData = useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let aValue, bValue;

        if (sortConfig.key === 'price to revenue') {
          aValue = calculateFinancialRatioAsNumber(a['Asking Price'], a['TTM Revenue']);
          bValue = calculateFinancialRatioAsNumber(b['Asking Price'], b['TTM Revenue']);
        } else if (sortConfig.key === 'price-to-profit') {
          aValue = calculateFinancialRatioAsNumber(a['Asking Price'], a['TTM Profit']);
          bValue = calculateFinancialRatioAsNumber(b['Asking Price'], b['TTM Profit']);
        } else {
          aValue = typeof a[sortConfig.key] === 'string' && !isNaN(a[sortConfig.key].replace(/[^0-9.-]+/g, ""))
            ? parseFloat(a[sortConfig.key].replace(/[^0-9.-]+/g, ""))
            : a[sortConfig.key];
          bValue = typeof b[sortConfig.key] === 'string' && !isNaN(b[sortConfig.key].replace(/[^0-9.-]+/g, ""))
            ? parseFloat(b[sortConfig.key].replace(/[^0-9.-]+/g, ""))
            : b[sortConfig.key];
        }

        if (aValue === null || aValue === 0) return sortConfig.direction === 'ascending' ? 1 : -1;
        if (bValue === null || bValue === 0) return sortConfig.direction === 'ascending' ? -1 : 1;

        return sortConfig.direction === 'ascending' ? aValue - bValue : bValue - aValue;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

  // Calculate the current page's data
  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, pageSize]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handlePageSizeChange = useCallback((newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  }, []);

  const handleRemove = useCallback((id) => {
    setTimeout(() => {
      removeListingFromData(id);
    }, 300);
  }, [removeListingFromData]);

  // Reset to first page when filtered data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData.length]);

  const loadMoreItems = useCallback(async (startIndex, stopIndex) => {
    setIsNextPageLoading(true);
    await new Promise(resolve => setTimeout(resolve, 100));
    setIsNextPageLoading(false);
  }, []);

  const isItemLoaded = useCallback(index => {
    return index < currentPageData.length;
  }, [currentPageData.length]);

  return (
    <div className="h-[600px] relative">
      <TableHeader sortConfig={sortConfig} onSort={onSort} />

      <div className="h-[500px]">
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={currentPageData.length}
              loadMoreItems={loadMoreItems}
              minimumBatchSize={pageSize}
            >
              {({ onItemsRendered, ref }) => (
                <List
                  ref={ref}
                  height={height}
                  itemCount={currentPageData.length}
                  itemSize={ROW_HEIGHT}
                  width={width}
                  onItemsRendered={onItemsRendered}
                >
                  {({ index, style }) => (
                    <VirtualRow
                      index={index}
                      style={style}
                      data={currentPageData}
                      onRemove={handleRemove}
                    />
                  )}
                </List>
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedData.length / pageSize)}
        pageSize={pageSize}
        totalRecords={sortedData.length}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default React.memo(StartupDetailsTable);