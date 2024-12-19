import React from 'react';
import { Info, ArrowUpDown } from 'lucide-react';
import { Tooltip } from "@/components/ui/tooltip";

const TableHeader = ({ sortConfig, onSort, compareCount }) => {
  const HeaderCell = ({ label, sortKey, tooltip, sortable = true, className = '', children }) => (
    <div
      className={`px-4 py-3 font-medium ${sortable ? 'cursor-pointer transition-colors hover:bg-gray-100' : ''} ${sortConfig.key === sortKey ? 'bg-blue-50' : ''} ${className}`}
      onClick={sortable ? () => onSort(sortKey) : undefined}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center space-x-1">
          <span>{label}</span>
          {children}
        </span>
        {sortable && (
          <div className="flex items-center">
            {tooltip && (
              <Tooltip content={tooltip}>
                <Info className="h-4 w-4 text-gray-400 mr-1" />
              </Tooltip>
            )}
            <ArrowUpDown className={`h-4 w-4 transition-transform ${
              sortConfig.key === sortKey
                ? sortConfig.direction === 'ascending'
                  ? 'text-blue-500 rotate-180'
                  : 'text-blue-500'
                : 'text-gray-300'
            }`} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
      <HeaderCell label="Type" sortKey="Business Type" tooltip="Type of business" className="flex-1 text-left" />
      <HeaderCell label="TTM Revenue" sortKey="TTM Revenue" tooltip="Trailing Twelve Months Revenue" className="flex-1 text-right" />
      <HeaderCell label="TTM Profit" sortKey="TTM Profit" tooltip="Trailing Twelve Months Profit" className="flex-1 text-right" />
      <HeaderCell label="Asking Price" sortKey="Asking Price" tooltip="Requested selling price" className="flex-1 text-right" />
      <HeaderCell label="Price-to-Revenue" sortKey="price to revenue" tooltip="Asking Price / TTM Revenue" className="flex-1 text-right" />
      <HeaderCell label="Price-to-Profit" sortKey="price-to-profit" tooltip="Asking Price / TTM Profit" className="flex-1 text-right" />
      <HeaderCell label="View" sortKey="" tooltip="View business details" sortable={false} className="w-[80px] text-center" />
      <HeaderCell label="Actions" sortKey="" tooltip="Available actions" sortable={false} className="w-[80px] text-center" />
      <HeaderCell label="Compare" sortKey="" tooltip="Add business to comparison" sortable={false} className="w-[80px] text-center">
        {compareCount > 0 && (
          <span className="inline-flex items-center justify-center text-xs font-semibold text-white bg-blue-500 rounded-full px-1 py-0.5">
            {compareCount}
          </span>
        )}
      </HeaderCell>
    </div>
  );
};

export default React.memo(TableHeader);