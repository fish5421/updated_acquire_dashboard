import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  currentPage,
  totalPages,
  pageSize,
  totalRecords,
  onPageChange,
  onPageSizeChange
}) => {
  const pageSizes = [25, 50, 100];

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach(i => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  return (
    <div className="flex items-center justify-between px-2 py-3 space-x-4 border-t border-neutral-light bg-white text-neutral-dark">
      <div className="flex items-center space-x-2 text-neutral-dark">
        <span className="text-sm">Show</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border border-neutral-light rounded p-1 text-sm text-neutral-dark"
        >
          {pageSizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <span className="text-sm text-neutral-dark">entries</span>
      </div>

      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="sm"
          className="border-neutral-light text-neutral-dark hover:bg-tertiary/30"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-2 text-neutral-light">...</span>
            ) : (
              <Button
                variant={currentPage === page ? 'default' : 'outline'}
                size="sm"
                className={currentPage === page ? 'bg-primary text-white hover:bg-primary/90 border-primary' : 'border-neutral-light text-neutral-dark hover:bg-tertiary/30'}
                onClick={() => onPageChange(page)}
              >
                {page}
              </Button>
            )}
          </React.Fragment>
        ))}

        <Button
          variant="outline"
          size="sm"
          className="border-neutral-light text-neutral-dark hover:bg-tertiary/30"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-sm text-neutral-dark">
        Showing {Math.min((currentPage - 1) * pageSize + 1, totalRecords)} to{' '}
        {Math.min(currentPage * pageSize, totalRecords)} of {totalRecords} entries
      </div>
    </div>
  );
};

export default React.memo(Pagination);