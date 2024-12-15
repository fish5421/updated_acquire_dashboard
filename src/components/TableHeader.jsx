import React from 'react';
import { Info, ArrowUpDown } from 'lucide-react';
import { Tooltip } from "@/components/ui/tooltip";

const TableHeader = ({ sortConfig, onSort }) => {
  const HeaderCell = ({ label, sortKey, tooltip }) => (
    <div 
      className={`flex-1 px-4 py-2 font-medium cursor-pointer transition-colors hover:bg-gray-100 ${
        sortConfig.key === sortKey ? 'bg-blue-50' : ''
      }`}
      onClick={() => onSort(sortKey)}
    >
      <div className="flex items-center justify-between">
        <span>{label}</span>
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
      </div>
    </div>
  );

  return (
    <div className="flex border-b bg-white sticky top-0 z-10">
      <HeaderCell label="Type" sortKey="Business Type" tooltip="Type of business" />
      <HeaderCell label="TTM Revenue" sortKey="TTM Revenue" tooltip="Trailing Twelve Months Revenue" />
      <HeaderCell label="TTM Profit" sortKey="TTM Profit" tooltip="Trailing Twelve Months Profit" />
      <HeaderCell label="Asking Price" sortKey="Asking Price" tooltip="Requested selling price" />
      <HeaderCell label="Price to Revenue" sortKey="price to revenue" tooltip="Asking Price / TTM Revenue" />
      <HeaderCell label="Price-to-Profit" sortKey="price-to-profit" tooltip="Asking Price / TTM Profit" />
      <div className="flex-1 px-4 py-2 font-medium">View</div>
      <div className="flex-1 px-4 py-2 font-medium">Actions</div>
    </div>
  );
};

export default React.memo(TableHeader);