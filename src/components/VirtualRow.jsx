import React from 'react';
import { Trash2, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { formatCurrency, calculateFinancialRatio } from "@/lib/utils";

const VirtualRow = React.memo(({ index, style, data, onRemove }) => {
  const item = data[index];
  if (!item) return null;

  return (
    <div style={style} className={`flex ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
      <div className="flex-1 px-4 py-2">{item['Business Type']}</div>
      <div className="flex-1 px-4 py-2 text-right">{formatCurrency(item['TTM Revenue'])}</div>
      <div className="flex-1 px-4 py-2 text-right">{formatCurrency(item['TTM Profit'])}</div>
      <div className="flex-1 px-4 py-2 text-right">{formatCurrency(item['Asking Price'])}</div>
      <div className="flex-1 px-4 py-2 text-right">
        {calculateFinancialRatio(item['Asking Price'], item['TTM Revenue'])}
      </div>
      <div className="flex-1 px-4 py-2 text-right">
        {calculateFinancialRatio(item['Asking Price'], item['TTM Profit'])}
      </div>
      <div className="flex-1 px-4 py-2">
        <a href={item['marketplace-card href']} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div className="flex-1 px-4 py-2">
        <Button variant="ghost" size="sm" onClick={() => onRemove(item.id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
});

VirtualRow.displayName = 'VirtualRow';

export default VirtualRow;