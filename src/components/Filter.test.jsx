import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './Filter';
import { DashboardContext } from '../context/DashboardContext';

// Mock context value
const mockContextValue = {
  filters: {
    revenue: [0, 10000000],
    profit: [0, 10000000],
    price: [0, 100000000],
    businessType: 'all'
  },
  setFilters: jest.fn(),
  filterRanges: {
    revenue: [0, 10000000],
    profit: [0, 10000000],
    price: [0, 100000000],
  },
  hasUploadedData: true
};

const renderWithContext = (component) => {
  return render(
    <DashboardContext.Provider value={mockContextValue}>
      {component}
    </DashboardContext.Provider>
  );
};

// Mock the scrollIntoView function
Element.prototype.scrollIntoView = jest.fn();

describe('Filter Component', () => {
  test('populates business types correctly from data', async () => {
    const mockData = [
      { 'Business Type': 'Tech', 'TTM Revenue': 1000000, 'TTM Profit': 500000, 'Asking Price': 5000000 },
      { 'Business Type': 'Retail', 'TTM Revenue': 2000000, 'TTM Profit': 750000, 'Asking Price': 7500000 },
    ];
    renderWithContext(<Filter data={mockData} />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    fireEvent.click(selectElement);

    await waitFor(() => {
      expect(screen.getByText('all')).toBeInTheDocument();
      expect(screen.getByText('Tech')).toBeInTheDocument();
      expect(screen.getByText('Retail')).toBeInTheDocument();
    });
  });
});