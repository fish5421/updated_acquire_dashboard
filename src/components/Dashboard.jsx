import React, { useContext, useState, useMemo, useCallback } from 'react';
import { HelpCircle, Filter as FilterIcon } from 'lucide-react';
import { DashboardContext } from '../context/DashboardContext';
import Filter from './Filter';
import StartupDetailsTable from './StartupDetailsTable';
import RevenueVsPriceChart from './RevenueVsPriceChart';
import ProfitVsPriceChart from './ProfitVsPriceChart';
import SummaryStatistics from './SummaryStatistics';
import ComparisonBar from './ComparisonBar';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { formatRatio } from "@/lib/utils";

const Dashboard = ({ isLoading }) => {
  const { getData, getHasUploadedData, isLoadingData, selectedFileIds } = useContext(DashboardContext);

  const data = useMemo(() => getData(), [getData]);
  const hasUploadedData = useMemo(() => getHasUploadedData(), [getHasUploadedData]);

  const [showFilter, setShowFilter] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedComparisons, setSelectedComparisons] = useState([]);

  const hasSelectedData = selectedFileIds.length > 0;

  const onToggleCompare = useCallback((business, checked) => {
    if (!business || !business.id) {
      console.warn("Business is missing a unique 'id' field.");
      return false;
    }

    if (checked) {
      if (selectedComparisons.find(b => b.id === business.id)) {
        return true;
      }
      if (selectedComparisons.length >= 4) {
        alert("You can only compare up to 4 businesses at a time.");
        return false;
      }
      setSelectedComparisons(prev => [...prev, business]);
      return true;
    } else {
      if (selectedComparisons.find(b => b.id === business.id)) {
        setSelectedComparisons(prev => prev.filter(b => b.id !== business.id));
      }
      return true;
    }
  }, [selectedComparisons]);

  const handleRemoveComparison = useCallback((businessId) => {
    setSelectedComparisons(prev => prev.filter(b => b.id !== businessId));
  }, []);

  const averageMetrics = useMemo(() => {
    if (!hasUploadedData || data.length === 0) {
      return {
        avgRevenue: 0,
        avgProfit: 0,
        avgPrice: 0,
        avgPriceToRevenue: 'N/A',
        avgPriceToProfit: 'N/A',
      };
    }

    const sum = data.reduce((acc, item) => {
      acc.revenue += Number(item['TTM Revenue']) || 0;
      acc.profit += Number(item['TTM Profit']) || 0;
      acc.price += Number(item['Asking Price']) || 0;
      return acc;
    }, { revenue: 0, profit: 0, price: 0 });

    const count = data.length;
    const avgRevenue = sum.revenue / count;
    const avgProfit = sum.profit / count;
    const avgPrice = sum.price / count;
    const avgPriceToRevenue = avgRevenue !== 0 ? avgPrice / avgRevenue : 0;
    const avgPriceToProfit = avgProfit !== 0 ? avgPrice / avgProfit : 0;

    return {
      avgRevenue,
      avgProfit,
      avgPrice,
      avgPriceToRevenue: formatRatio(avgPriceToRevenue),
      avgPriceToProfit: formatRatio(avgPriceToProfit),
    };
  }, [data, hasUploadedData]);

  const handleSort = useCallback((key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'ascending' ? 'descending' : 'ascending'
    }));
  }, []);

  if (!hasSelectedData) {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-neutral-dark mb-4">Dashboard 2.0</h1>
        <div className="flex items-center justify-center h-64">
          <p className="text-xl font-semibold text-neutral-dark">No files selected.</p>
        </div>
      </div>
    );
  }

  if (isLoadingData) {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-neutral-dark mb-4">Dashboard 2.0</h1>
        <div className="flex items-center justify-center h-64">
          <svg className="animate-spin h-8 w-8 text-neutral-light" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10"
              fill="none" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="sticky top-0 z-30 bg-white border-b border-neutral-light">
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-neutral-dark">Dashboard 2.0</h1>
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className={`
              flex items-center space-x-2 px-3 py-2 rounded-md shadow-sm
              ${showFilter
                ? 'bg-primary text-white border border-primary'
                : 'bg-white border border-neutral-light hover:bg-tertiary/30 text-neutral-dark'}
            `}
          >
            <FilterIcon className="w-4 h-4 text-current" />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>

        {showFilter && (
          <div className="px-4 pb-4">
            <Filter />
          </div>
        )}
      </div>

      {selectedComparisons.length > 0 && (
        <div className="p-4">
          <ComparisonBar
            selectedBusinesses={selectedComparisons}
            onRemove={handleRemoveComparison}
          />
        </div>
      )}

      <div className="p-4 space-y-4">
        <SummaryStatistics
          averageMetrics={averageMetrics}
          hasUploadedData={hasUploadedData}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="border border-neutral-light bg-white">
            <CardHeader>
              <CardTitle className="flex items-center text-neutral-dark">
                Revenue vs Price
                <div className="relative inline-block ml-2">
                  <HelpCircle className="w-4 h-4 text-neutral-light cursor-help" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {data.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-dark">No Data to Display</h3>
                  <p className="text-neutral-light mb-4">Select files to see the Revenue vs Price chart.</p>
                </div>
              ) : (
                <RevenueVsPriceChart />
              )}
            </CardContent>
          </Card>

          <Card className="border border-neutral-light bg-white">
            <CardHeader>
              <CardTitle className="flex items-center text-neutral-dark">
                Profit vs Price
                <div className="relative inline-block ml-2">
                  <HelpCircle className="w-4 h-4 text-neutral-light cursor-help" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {data.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-dark">No Data to Display</h3>
                  <p className="text-neutral-light mb-4">Select files to see the Profit vs Price chart.</p>
                </div>
              ) : (
                <ProfitVsPriceChart />
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="border border-neutral-light bg-white">
          <CardHeader>
            <CardTitle className="flex items-center text-neutral-dark">
              Startup Details
              <div className="relative inline-block ml-2">
                <HelpCircle className="w-4 h-4 text-neutral-light cursor-help" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64">
                <h3 className="text-xl font-semibold mb-2 text-neutral-dark">No Startup Data Available</h3>
                <p className="text-neutral-light mb-4">Select files to see detailed startup information.</p>
              </div>
            ) : (
              <StartupDetailsTable
                onSort={handleSort}
                sortConfig={sortConfig}
                onToggleCompare={onToggleCompare}
                selectedComparisons={selectedComparisons}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;