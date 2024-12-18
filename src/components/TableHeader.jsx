import React from 'react';
import { Info, ArrowUpDown } from 'lucide-react';
import { Tooltip } from "@/components/ui/tooltip";

const TableHeader = ({ sortConfig, onSort, compareCount }) => {
  const HeaderCell = ({ label, sortKey, tooltip, sortable = true, children }) => (
    <div
      className={`flex-1 px-4 py-2 font-medium ${sortable ? 'cursor-pointer transition-colors hover:bg-gray-100' : ''} ${sortConfig.key === sortKey ? 'bg-blue-50' : ''
        }`}
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
            <ArrowUpDown className={`h-4 w-4 transition-transform ${sortConfig.key === sortKey
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
    <div className="flex border-b bg-white sticky top-0 z-10">
      <HeaderCell label="Type" sortKey="Business Type" tooltip="Type of business" />
      <HeaderCell label="TTM Revenue" sortKey="TTM Revenue" tooltip="Trailing Twelve Months Revenue" />
      <HeaderCell label="TTM Profit" sortKey="TTM Profit" tooltip="Trailing Twelve Months Profit" />
      <HeaderCell label="Asking Price" sortKey="Asking Price" tooltip="Requested selling price" />
      <HeaderCell label="Price-to-Revenue" sortKey="price to revenue" tooltip="Asking Price / TTM Revenue" />
      <HeaderCell label="Price-to-Profit" sortKey="price-to-profit" tooltip="Asking Price / TTM Profit" />
      <HeaderCell label="View" sortKey="" tooltip="View business details" sortable={false} />
      <HeaderCell label="Actions" sortKey="" tooltip="Available actions" sortable={false} />
      <HeaderCell label="Compare" sortKey="" tooltip="Add business to comparison" sortable={false}>
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