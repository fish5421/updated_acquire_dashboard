import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip } from "@/components/ui/tooltip"
import { formatCurrency } from "@/lib/utils"
import { BarChart3 } from "lucide-react"

const SummaryStatistics = ({ averageMetrics, hasUploadedData }) => {
  if (!hasUploadedData || !averageMetrics || typeof averageMetrics !== 'object') {
    return null
  }

  const metricsToDisplay = [
    {
      label: 'Average Revenue',
      key: 'avgRevenue',
      format: (val) => formatCurrency(val),
      icon: <BarChart3 className="w-4 h-4 text-primary" />,
      tooltip: 'This metric represents the average TTM Revenue across all selected startups.'
    },
    {
      label: 'Average Profit',
      key: 'avgProfit',
      format: (val) => formatCurrency(val),
      icon: <BarChart3 className="w-4 h-4 text-primary" />,
      tooltip: 'This metric shows the average TTM Profit for the selected startups.'
    },
    {
      label: 'Average Price',
      key: 'avgPrice',
      format: (val) => formatCurrency(val),
      icon: <BarChart3 className="w-4 h-4 text-primary" />,
      tooltip: 'The average asking price of the selected startups.'
    },
    {
      label: 'Avg Price/Revenue',
      key: 'avgPriceToRevenue',
      format: (val) => val,
      icon: <BarChart3 className="w-4 h-4 text-primary" />,
      tooltip: 'Average ratio of asking price to TTM revenue.'
    },
    {
      label: 'Avg Price/Profit',
      key: 'avgPriceToProfit',
      format: (val) => val,
      icon: <BarChart3 className="w-4 h-4 text-primary" />,
      tooltip: 'Average ratio of asking price to TTM profit.'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {metricsToDisplay.map((metric, idx) => {
        const value = averageMetrics[metric.key]
        const formattedValue = value !== undefined && value !== null ? metric.format(value) : 'N/A'

        return (
          <Tooltip key={idx} content={
            <p className="text-sm text-neutral-dark">{metric.tooltip}</p>
          }>
            <div className="w-full">
              <Card className="rounded-lg border border-neutral-light shadow-sm bg-white">
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-neutral-light flex items-center space-x-1">
                      {metric.icon}
                      <span>{metric.label}</span>
                    </p>
                    <p className="text-2xl font-semibold text-neutral-dark">
                      {formattedValue}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Tooltip>
        )
      })}
    </div>
  )
}

export default SummaryStatistics