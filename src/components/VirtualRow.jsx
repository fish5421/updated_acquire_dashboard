import React, { useState, useCallback } from 'react';
import { Trash2, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { formatCurrency, calculateFinancialRatio } from "@/lib/utils";

const VirtualRow = React.memo(({ index, style, data, onRemove, onToggleCompare, selectedComparisons }) => {
  const item = data[index];
  if (!item) return null;

  const [isRemoving, setIsRemoving] = useState(false);

  const isSelected = selectedComparisons.some(b => b.id === item.id);

  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    const checked = e.target.checked;
    onToggleCompare(item, checked);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    setIsRemoving(true);
  };

  const handleTransitionEnd = useCallback(() => {
    if (isRemoving) {
      onRemove(item.id);
    }
  }, [isRemoving, onRemove, item.id]);

  return (
    <div
      style={style}
      onTransitionEnd={handleTransitionEnd}
      className={`flex items-center border-b border-gray-100
        ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} 
        ${isSelected ? 'border-l-4 border-primary bg-primary/10' : ''} 
        ${isRemoving ? 'opacity-0 transition-opacity duration-300' : 'transition-opacity duration-300 opacity-100'}
      `}
    >
      <div className="flex-1 px-4 py-3 text-neutral-dark border-r border-gray-200/50">{item['Business Type']}</div>
      <div className="flex-1 px-4 py-3 text-right text-neutral-dark border-r border-gray-200/50">{formatCurrency(item['TTM Revenue'])}</div>
      <div className="flex-1 px-4 py-3 text-right text-neutral-dark border-r border-gray-200/50">{formatCurrency(item['TTM Profit'])}</div>
      <div className="flex-1 px-4 py-3 text-right text-neutral-dark border-r border-gray-200/50">{formatCurrency(item['Asking Price'])}</div>
      <div className="flex-1 px-4 py-3 text-right text-neutral-dark border-r border-gray-200/50">
        {calculateFinancialRatio(item['Asking Price'], item['TTM Revenue'])}
      </div>
      <div className="flex-1 px-4 py-3 text-right text-neutral-dark border-r border-gray-200/50">
        {calculateFinancialRatio(item['Asking Price'], item['TTM Profit'])}
      </div>

      <div className="w-[80px] px-4 py-3 text-center border-r border-gray-200/50">
        <a href={item['marketplace-card href']} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 text-neutral-light inline-block" />
        </a>
      </div>

      <div className="w-[80px] px-4 py-3 text-center border-r border-gray-200/50">
        <Button variant="ghost" size="sm" onClick={handleRemoveClick}>
          <Trash2 className="h-4 w-4 text-neutral-light inline-block" />
        </Button>
      </div>

      <div
        className="w-[80px] px-4 py-3 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <label
          className="relative inline-block cursor-pointer p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
            className="w-4 h-4 cursor-pointer border-neutral-light rounded text-primary focus:ring-primary"
            aria-label="Select this business for comparison"
          />
        </label>
      </div>
    </div>
  );
});

VirtualRow.displayName = 'VirtualRow';

export default VirtualRow;