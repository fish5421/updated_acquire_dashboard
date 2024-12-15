import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, X } from 'lucide-react';
import { Tooltip } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import RangeFilter from './RangeFilter';
import { DashboardContext } from '../context/DashboardContext';
import { useDebounce } from '../hooks/useDebounce';

const Filter = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { filters, setFilters, filterRanges, hasUploadedData, businessTypes } = useContext(DashboardContext);

  const debouncedSetFilters = useDebounce(setFilters, 300);

  useEffect(() => {
    const newActiveFilters = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value) && (value[0] > filterRanges[key][0] || value[1] < filterRanges[key][1])) {
        newActiveFilters[key] = true;
      } else if (key === 'businessType' && value !== 'all') {
        newActiveFilters[key] = true;
      }
    });
    setActiveFilters(newActiveFilters);
  }, [filters, filterRanges]);

  const handleFilterChange = (key, newValue) => {
    setIsLoading(true);
    debouncedSetFilters(prevFilters => {
      setIsLoading(false);
      return { ...prevFilters, [key]: newValue };
    });
  };

  const handleResetFilter = (key) => {
    const resetValue = key === 'businessType' ? 'all' : filterRanges[key];
    handleFilterChange(key, resetValue);
  };

  const resetAllFilters = () => {
    setFilters({
      revenue: filterRanges.revenue,
      profit: filterRanges.profit,
      price: filterRanges.price,
      businessType: 'all',
    });
  };

  const generatePresets = (key) => {
    const [min, max] = filterRanges[key];
    const range = max - min;
    return [
      { label: `${min} - ${min + range * 0.25}`, min: min, max: min + range * 0.25 },
      { label: `${min + range * 0.25} - ${min + range * 0.5}`, min: min + range * 0.25, max: min + range * 0.5 },
      { label: `${min + range * 0.5} - ${min + range * 0.75}`, min: min + range * 0.5, max: min + range * 0.75 },
      { label: `${min + range * 0.75} - ${max}`, min: min + range * 0.75, max: max },
    ];
  };

  if (!hasUploadedData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-64">
            <h3 className="text-xl font-semibold mb-2">No Data to Display</h3>
            <p className="text-gray-600 mb-4">Upload data from the File Management page to see available filters.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Filters</span>
          <Button onClick={resetAllFilters} variant="outline" size="sm">
            Reset All Filters
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {['revenue', 'profit', 'price'].map((key) => (
              <div key={key} className="space-y-2">
                <div className="h-8 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-700 flex items-center flex-1">
                    <span className="flex-grow capitalize">{key}</span>
                    <Tooltip content={`Set the ${key} range for startups to display`}>
                      <HelpCircle className="w-4 h-4 text-gray-400 cursor-help ml-2" />
                    </Tooltip>
                    <div className="w-8 h-8 flex items-center justify-center">
                      {activeFilters[key] && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="px-1 py-0 bg-red-100 hover:bg-red-200 text-red-600"
                          onClick={() => handleResetFilter(key)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </h3>
                </div>
                <div className="min-h-[180px]">
                  {isLoading ? (
                    <Skeleton className="h-[180px]" />
                  ) : (
                    <RangeFilter
                      label={`${key} Range`}
                      min={filterRanges[key][0]}
                      max={filterRanges[key][1]}
                      value={filters[key]}
                      onChange={(value) => handleFilterChange(key, value)}
                      presets={generatePresets(key)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-8 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700 flex items-center flex-1">
                <span className="flex-grow">Business Type</span>
                <Tooltip content="Filter startups by their business type">
                  <HelpCircle className="w-4 h-4 text-gray-400 cursor-help ml-2" />
                </Tooltip>
                <div className="w-8 h-8 flex items-center justify-center">
                  {activeFilters.businessType && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-1 py-0 bg-red-100 hover:bg-red-200 text-red-600"
                      onClick={() => handleResetFilter('businessType')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </h3>
            </div>
            <div className="min-h-[40px]">
              {isLoading ? (
                <Skeleton className="h-10" />
              ) : (
                <Select
                  value={filters.businessType}
                  onValueChange={(value) => handleFilterChange('businessType', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type === 'all' ? 'All' : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Filter;