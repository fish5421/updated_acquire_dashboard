import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, X } from 'lucide-react';
import { Tooltip } from "@/components/ui/tooltip";
import RangeFilter from './RangeFilter';
import { DashboardContext } from '../context/DashboardContext';
import { useDebounce } from '../hooks/useDebounce';

const Filter = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  const { filters, setFilters, filterRanges, getHasUploadedData, getBusinessTypes } = useContext(DashboardContext);

  const hasUploadedData = useMemo(() => getHasUploadedData(), [getHasUploadedData]);
  const businessTypes = useMemo(() => getBusinessTypes(), [getBusinessTypes]);

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
    debouncedSetFilters(prevFilters => ({
      ...prevFilters,
      [key]: newValue
    }));
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
      { label: `${min} - ${Math.round(min + range * 0.25)}`, min: min, max: Math.round(min + range * 0.25) },
      { label: `${Math.round(min + range * 0.25)} - ${Math.round(min + range * 0.5)}`, min: Math.round(min + range * 0.25), max: Math.round(min + range * 0.5) },
      { label: `${Math.round(min + range * 0.5)} - ${Math.round(min + range * 0.75)}`, min: Math.round(min + range * 0.5), max: Math.round(min + range * 0.75) },
      { label: `${Math.round(min + range * 0.75)} - ${max}`, min: Math.round(min + range * 0.75), max: max },
    ];
  };

  if (!hasUploadedData) {
    return (
      <Card className="bg-white border border-neutral-light">
        <CardHeader>
          <CardTitle className="text-neutral-dark">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-64">
            <h3 className="text-xl font-semibold mb-2 text-neutral-dark">No Data to Display</h3>
            <p className="text-neutral-light mb-4">Upload data from the File Management page to see available filters.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const activeFilterCount = Object.keys(activeFilters).length;

  return (
    <Card className="bg-white border border-neutral-light">
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col space-y-1">
            <CardTitle className="flex items-center space-x-2 text-neutral-dark">
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="text-sm text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {activeFilterCount} active {activeFilterCount === 1 ? 'filter' : 'filters'}
                </span>
              )}
              {activeFilterCount === 0 && (
                <span className="text-sm text-neutral-light">No active filters</span>
              )}
            </CardTitle>
          </div>
          <Button onClick={resetAllFilters} variant="outline" size="sm" className="border-neutral-light text-neutral-dark hover:bg-tertiary/30">
            Reset All Filters
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Filter */}
            <div className="space-y-2">
              <div className="h-8 flex items-center justify-between">
                <h3 className="text-sm font-medium text-neutral-dark flex items-center flex-1">
                  <span className="flex-grow capitalize flex items-center space-x-1">
                    <span>Revenue</span>
                    {activeFilters.revenue && <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>}
                  </span>
                  <Tooltip content="Adjust this slider to display startups within a certain revenue range.">
                    <HelpCircle className="w-4 h-4 text-neutral-light cursor-help ml-2" />
                  </Tooltip>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {activeFilters.revenue && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-1 py-0 bg-red-100 hover:bg-red-200 text-red-600 border-neutral-light"
                        onClick={() => handleResetFilter('revenue')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </h3>
              </div>
              <div className="min-h-[180px]">
                <RangeFilter
                  label="Revenue Range"
                  min={filterRanges.revenue[0]}
                  max={filterRanges.revenue[1]}
                  value={filters.revenue}
                  onChange={(value) => handleFilterChange('revenue', value)}
                  presets={generatePresets('revenue')}
                />
              </div>
            </div>

            {/* Profit Filter */}
            <div className="space-y-2">
              <div className="h-8 flex items-center justify-between">
                <h3 className="text-sm font-medium text-neutral-dark flex items-center flex-1">
                  <span className="flex-grow capitalize flex items-center space-x-1">
                    <span>Profit</span>
                    {activeFilters.profit && <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>}
                  </span>
                  <Tooltip content="Filter startups by profit range.">
                    <HelpCircle className="w-4 h-4 text-neutral-light cursor-help ml-2" />
                  </Tooltip>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {activeFilters.profit && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-1 py-0 bg-red-100 hover:bg-red-200 text-red-600 border-neutral-light"
                        onClick={() => handleResetFilter('profit')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </h3>
              </div>
              <div className="min-h-[180px]">
                <RangeFilter
                  label="Profit Range"
                  min={filterRanges.profit[0]}
                  max={filterRanges.profit[1]}
                  value={filters.profit}
                  onChange={(value) => handleFilterChange('profit', value)}
                  presets={generatePresets('profit')}
                />
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-2">
              <div className="h-8 flex items-center justify-between">
                <h3 className="text-sm font-medium text-neutral-dark flex items-center flex-1">
                  <span className="flex-grow capitalize flex items-center space-x-1">
                    <span>Price</span>
                    {activeFilters.price && <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>}
                  </span>
                  <Tooltip content="Set the asking price range for startups.">
                    <HelpCircle className="w-4 h-4 text-neutral-light cursor-help ml-2" />
                  </Tooltip>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {activeFilters.price && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-1 py-0 bg-red-100 hover:bg-red-200 text-red-600 border-neutral-light"
                        onClick={() => handleResetFilter('price')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </h3>
              </div>
              <div className="min-h-[180px]">
                <RangeFilter
                  label="Price Range"
                  min={filterRanges.price[0]}
                  max={filterRanges.price[1]}
                  value={filters.price}
                  onChange={(value) => handleFilterChange('price', value)}
                  presets={generatePresets('price')}
                />
              </div>
            </div>
          </div>

          {/* Business Type Filter */}
          <div className="space-y-2">
            <div className="h-8 flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-dark flex items-center flex-1">
                <span className="flex-grow flex items-center space-x-1">
                  <span>Business Type</span>
                  {activeFilters.businessType && <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>}
                </span>
                <Tooltip content="Filter startups by their business type.">
                  <HelpCircle className="w-4 h-4 text-neutral-light cursor-help ml-2" />
                </Tooltip>
                <div className="w-8 h-8 flex items-center justify-center">
                  {activeFilters.businessType && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-1 py-0 bg-red-100 hover:bg-red-200 text-red-600 border-neutral-light"
                      onClick={() => handleResetFilter('businessType')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </h3>
            </div>
            <div className="min-h-[40px]">
              <Select
                value={filters.businessType}
                onValueChange={(value) => handleFilterChange('businessType', value)}
              >
                <SelectTrigger className="w-full border-neutral-light text-neutral-dark">
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
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Filter;