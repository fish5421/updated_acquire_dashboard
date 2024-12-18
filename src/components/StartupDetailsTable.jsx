import React, { useState, useContext, useMemo, useCallback, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { DashboardContext } from '@/context/DashboardContext';
import TableHeader from './TableHeader';
import VirtualRow from './VirtualRow';
import Pagination from './Pagination';
import { calculateFinancialRatioAsNumber } from "@/lib/utils";

const StartupDetailsTable = ({ onSort, sortConfig, onToggleCompare, selectedComparisons }) => {
  const { getFilteredData, removeListingFromData } = useContext(DashboardContext);

  const filteredData = useMemo(() => getFilteredData(), [getFilteredData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const sortedData = useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig.key !== null && sortConfig.key !== '') {
      sortableItems.sort((a, b) => {
        let aValue, bValue;

        if (sortConfig.key === 'price to revenue') {
          aValue = calculateFinancialRatioAsNumber(a['Asking Price'], a['TTM Revenue']);
          bValue = calculateFinancialRatioAsNumber(b['Asking Price'], b['TTM Revenue']);
        } else if (sortConfig.key === 'price-to-profit') {
          aValue = calculateFinancialRatioAsNumber(a['Asking Price'], a['TTM Profit']);
          bValue = calculateFinancialRatioAsNumber(b['Asking Price'], b['TTM Profit']);
        } else if (sortConfig.key && a[sortConfig.key] !== undefined && b[sortConfig.key] !== undefined) {
          aValue = typeof a[sortConfig.key] === 'string' && !isNaN(a[sortConfig.key].replace(/[^0-9.-]+/g, ""))
            ? parseFloat(a[sortConfig.key].replace(/[^0-9.-]+/g, ""))
            : a[sortConfig.key];
          bValue = typeof b[sortConfig.key] === 'string' && !isNaN(b[sortConfig.key].replace(/[^0-9.-]+/g, ""))
            ? parseFloat(b[sortConfig.key].replace(/[^0-9.-]+/g, ""))
            : b[sortConfig.key];
        } else {
          return 0;
        }

        if (aValue === null || aValue === 0) return sortConfig.direction === 'ascending' ? 1 : -1;
        if (bValue === null || bValue === 0) return sortConfig.direction === 'ascending' ? -1 : 1;

        return sortConfig.direction === 'ascending' ? aValue - bValue : bValue - aValue;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

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
    setCurrentPage(1);
  }, []);

  const handleRemove = useCallback((id) => {
    removeListingFromData(id);
  }, [removeListingFromData]);

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
    <div className="h-[600px] relative text-neutral-dark">
      <TableHeader sortConfig={sortConfig} onSort={onSort} compareCount={selectedComparisons.length} />

      <div className="h-[500px] bg-white">
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
                  itemSize={48}
                  width={width}
                  onItemsRendered={onItemsRendered}
                  itemKey={(index) => currentPageData[index].id}
                >
                  {({ index, style }) => (
                    <VirtualRow
                      index={index}
                      style={style}
                      data={currentPageData}
                      onRemove={handleRemove}
                      onToggleCompare={onToggleCompare}
                      selectedComparisons={selectedComparisons}
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