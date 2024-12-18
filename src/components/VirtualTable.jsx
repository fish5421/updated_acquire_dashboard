import React, { useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer'; 
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, ExternalLink } from 'lucide-react';
import { formatCurrency, calculateFinancialRatio } from "@/lib/utils";

const ROW_HEIGHT = 48;

const VirtualTable = ({ data, onRemove }) => {
  const Row = useCallback(({ index, style }) => {
    const item = data[index];
    return (
      <TableRow
        style={style}
        className={`${index % 2 === 0 ? 'bg-tertiary/20' : 'bg-white'}`}
      >
        <TableCell className="text-neutral-dark">{item['Business Type']}</TableCell>
        <TableCell className="text-right text-neutral-dark">{formatCurrency(item['TTM Revenue'])}</TableCell>
        <TableCell className="text-right text-neutral-dark">{formatCurrency(item['TTM Profit'])}</TableCell>
        <TableCell className="text-right text-neutral-dark">{formatCurrency(item['Asking Price'])}</TableCell>
        <TableCell className="text-right text-neutral-dark">{calculateFinancialRatio(item['Asking Price'], item['TTM Revenue'])}</TableCell>
        <TableCell className="text-right text-neutral-dark">{calculateFinancialRatio(item['Asking Price'], item['TTM Profit'])}</TableCell>
        <TableCell>
          <a href={item['marketplace-card href']} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 text-neutral-light" />
          </a>
        </TableCell>
        <TableCell>
          <Button variant="ghost" size="sm" onClick={() => onRemove(item.id)}>
            <Trash2 className="h-4 w-4 text-neutral-light" />
          </Button>
        </TableCell>
      </TableRow>
    );
  }, [data, onRemove]);

  return (
    <div style={{ height: '400px' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={data.length}
            itemSize={ROW_HEIGHT}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default React.memo(VirtualTable);