import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './Dashboard';
import { DashboardContext } from '../context/DashboardContext';

// Mock context value
const mockContextValue = {
  data: [],
  filters: {},
  hasUploadedData: false,
  // Add other necessary context properties
};

const renderWithContext = (ui, contextValue = mockContextValue) => {
  return render(
    <DashboardContext.Provider value={contextValue}>
      {ui}
    </DashboardContext.Provider>
  );
};

describe('Dashboard Component', () => {
  test('displays empty state messages when no data is available', () => {
    renderWithContext(<Dashboard />);
    
    // Check for "No Data to Display" message in Revenue vs Price chart
    expect(screen.getByText('No Data to Display')).toBeInTheDocument();
    expect(screen.getByText('Upload data from the File Management page to see the Revenue vs Price chart.')).toBeInTheDocument();

    // Check for "No Data to Display" message in Profit vs Price chart
    expect(screen.getByText('Upload data from the File Management page to see the Profit vs Price chart.')).toBeInTheDocument();

    // Check for "No Startup Data Available" message
    expect(screen.getByText('No Startup Data Available')).toBeInTheDocument();
    expect(screen.getByText('Upload data from the File Management page to see detailed startup information.')).toBeInTheDocument();
  });
});