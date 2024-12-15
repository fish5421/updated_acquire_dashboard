import React, { useContext, useState, useMemo } from 'react';
import { HelpCircle } from 'lucide-react';
import { DashboardContext } from '../context/DashboardContext';
import Filter from './Filter';
import StartupDetailsTable from './StartupDetailsTable';
import RevenueVsPriceChart from './RevenueVsPriceChart';
import ProfitVsPriceChart from './ProfitVsPriceChart';
import SummaryStatistics from './SummaryStatistics';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { formatRatio } from "@/lib/utils";

const Dashboard = ({ isLoading }) => {
  const { data, hasUploadedData, isLoadingData, selectedFileIds } = useContext(DashboardContext);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const hasSelectedData = selectedFileIds.length > 0;

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

  if (!hasSelectedData) {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard 2.0</h1>
        <div className="flex items-center justify-center h-64">
          <p className="text-xl font-semibold">No files selected.</p>
        </div>
      </div>
    );
  }

  if (isLoadingData) {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard 2.0</h1>
        <div className="flex items-center justify-center h-64">
          <svg className="animate-spin h-8 w-8 text-gray-500" viewBox="0 0 24 24">
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
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard 2.0</h1>
      <Filter />
      <SummaryStatistics
        averageMetrics={averageMetrics}
        hasUploadedData={hasUploadedData}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              Revenue vs Price
              <div className="relative inline-block ml-2">
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64">
                <h3 className="text-xl font-semibold mb-2">No Data to Display</h3>
                <p className="text-gray-600 mb-4">Select files to see the Revenue vs Price chart.</p>
              </div>
            ) : (
              <RevenueVsPriceChart />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              Profit vs Price
              <div className="relative inline-block ml-2">
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64">
                <h3 className="text-xl font-semibold mb-2">No Data to Display</h3>
                <p className="text-gray-600 mb-4">Select files to see the Profit vs Price chart.</p>
              </div>
            ) : (
              <ProfitVsPriceChart />
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            Startup Details
            <div className="relative inline-block ml-2">
              <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <h3 className="text-xl font-semibold mb-2">No Startup Data Available</h3>
              <p className="text-gray-600 mb-4">Select files to see detailed startup information.</p>
            </div>
          ) : (
            <StartupDetailsTable
              onSort={(key) => setSortConfig({
                key,
                direction: sortConfig.direction === 'ascending' ? 'descending' : 'ascending'
              })}
              sortConfig={sortConfig}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;