import React, { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const LazyChart = ({ Chart, data, height = 300 }) => {
  return (
    <Suspense fallback={<Skeleton className={`w-full h-${height}`} />}>
      <Chart data={data} />
    </Suspense>
  );
};

export default LazyChart;