import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { HelpCircle } from 'lucide-react';
import { formatCurrency, calculateFinancialRatio, formatRatio } from "@/lib/utils";
import logError from "@/lib/errorLogger";
import Filter from './Filter';
import StartupDetailsTable from './StartupDetailsTable';
import RevenueVsPriceChart from './RevenueVsPriceChart';
import ProfitVsPriceChart from './ProfitVsPriceChart';
import SummaryStatistics from './SummaryStatistics';
import { DashboardContext } from '../context/DashboardContext';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const Dashboard = ({ isLoading }) => {
  console.log('Dashboard rendering. isLoading:', isLoading);

  const [activeTooltip, setActiveTooltip] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [error, setError] = useState(null);
  const { data, filters, updateFilterRanges, hasUploadedData } = useContext(DashboardContext);

  console.log('Dashboard data:', data);
  console.log('Has uploaded data:', hasUploadedData);

  const processData = useCallback(() => {
    try {
      console.log('Processing data. Data length:', data.length);
      if (data.length > 0 && !hasUploadedData) {
        console.log('Updating filter ranges');
        updateFilterRanges(data);
      }
    } catch (err) {
      logError(err, { component: 'Dashboard', function: 'processData' });
      setError('An error occurred while processing the data. Please try again.');
    }
  }, [data, hasUploadedData, updateFilterRanges]);

  useEffect(() => {
    processData();
  }, [processData]);

  const generateReport = useCallback(() => {
    console.log('Generating report');
    // Implement report generation logic here
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

    console.log('Average calculations:', { avgRevenue, avgProfit, avgPrice });

    const avgPriceToRevenue = avgRevenue !== 0 ? avgPrice / avgRevenue : 0;
    const avgPriceToProfit = avgProfit !== 0 ? avgPrice / avgProfit : 0;

    console.log('Ratio calculations:', { avgPriceToRevenue, avgPriceToProfit });

    return {
      avgRevenue,
      avgProfit,
      avgPrice,
      avgPriceToRevenue: formatRatio(avgPriceToRevenue),
      avgPriceToProfit: formatRatio(avgPriceToProfit),
    };
  }, [data, hasUploadedData]);

  console.log('Calculated average metrics:', averageMetrics);

  const ContextualHelp = ({ id, content }) => (
    <div className="relative inline-block ml-2">
      <HelpCircle
        className="w-4 h-4 text-gray-400 cursor-help"
        onMouseEnter={() => setActiveTooltip(id)}
        onMouseLeave={() => setActiveTooltip(null)}
      />
      {activeTooltip === id && (
        <div className="absolute z-10 w-64 p-2 mt-2 text-sm bg-white rounded-md shadow-lg border border-gray-200">
          {content}
        </div>
      )}
    </div>
  );

  const EmptyStateMessage = ({ title, message }) => (
    <div className="flex flex-col items-center justify-center h-64">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{message}</p>
    </div>
  );

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard 2.0</h1>
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-xl font-semibold">Loading data...</p>
        </div>
      ) : (
        <>
          <Filter />

          <SummaryStatistics
            averageMetrics={averageMetrics}
            hasUploadedData={hasUploadedData}
            generateReport={generateReport}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  Revenue vs Price
                  <ContextualHelp
                    id="help-revenue-price"
                    content="This chart shows the relationship between a startup's revenue and its asking price"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!hasUploadedData ? (
                  <EmptyStateMessage
                    title="No Data to Display"
                    message="Upload data from the File Management page to see the Revenue vs Price chart."
                  />
                ) : (
                  <RevenueVsPriceChart />
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Profit vs Price
                  <ContextualHelp
                    id="help-profit-price"
                    content="This chart shows the relationship between a startup's profit and its asking price"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!hasUploadedData ? (
                  <EmptyStateMessage
                    title="No Data to Display"
                    message="Upload data from the File Management page to see the Profit vs Price chart."
                  />
                ) : (
                  <ProfitVsPriceChart />
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                Startup Details
                <ContextualHelp
                  id="help-startup-details"
                  content="This table shows detailed information for each startup matching your filters"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!hasUploadedData ? (
                <EmptyStateMessage
                  title="No Startup Data Available"
                  message="Upload data from the File Management page to see detailed startup information."
                />
              ) : (
                <StartupDetailsTable 
                  onSort={(key) => setSortConfig({ key, direction: sortConfig.direction === 'ascending' ? 'descending' : 'ascending' })} 
                  sortConfig={sortConfig} 
                />
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default Dashboard;