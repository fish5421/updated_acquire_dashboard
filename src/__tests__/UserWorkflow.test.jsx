import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mock modules
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

jest.mock('papaparse', () => ({
  parse: jest.fn((file, config) => {
    setTimeout(() => {
      config.complete({
        data: [
          { 'Business Type': 'Tech', 'TTM Revenue': 1000000, 'TTM Profit': 500000, 'Asking Price': 5000000 },
          { 'Business Type': 'Retail', 'TTM Revenue': 2000000, 'TTM Profit': 750000, 'Asking Price': 7500000 },
          { 'Business Type': 'Tech', 'TTM Revenue': 1500000, 'TTM Profit': 600000, 'Asking Price': 6000000 },
        ],
      });
    }, 100);
  }),
}));

// Custom render function
const renderApp = () => {
  return render(
    <MemoryRouter initialEntries={['/file-management']}>
      <App />
    </MemoryRouter>
  );
};

describe('User Workflow Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Complete user workflow: Upload file, navigate to dashboard, apply filters, and analyze data', async () => {
    renderApp();

    // Step 1: Navigate to File Management
    await waitFor(() => {
      const fileManagementLink = screen.getByRole('link', { name: /File Management/i });
      expect(fileManagementLink).toBeInTheDocument();
      fireEvent.click(fileManagementLink);
    }, { timeout: 10000 });

    // Step 2: Upload a file
    const fileInput = await screen.findByTestId('file-input', {}, { timeout: 10000 });
    const file = new File(['test'], 'test.csv', { type: 'text/csv' });
    await act(async () => {
      userEvent.upload(fileInput, file);
    });

    const uploadButton = await screen.findByTestId('upload-button', {}, { timeout: 10000 });
    await act(async () => {
      fireEvent.click(uploadButton);
    });

    await waitFor(() => {
      expect(screen.queryByText('100% Uploaded')).toBeInTheDocument();
    }, { timeout: 10000 });

    // Step 3: Navigate to Dashboard
    await waitFor(() => {
      const dashboardLink = screen.getByRole('link', { name: /Dashboard/i });
      expect(dashboardLink).toBeInTheDocument();
      fireEvent.click(dashboardLink);
    }, { timeout: 10000 });

    // Step 4: Verify initial dashboard state
    await waitFor(() => {
      expect(screen.getByText(/Avg Revenue/i)).toBeInTheDocument();
      expect(screen.getByText(/Avg Profit/i)).toBeInTheDocument();
      expect(screen.getByText(/Total Listings/i)).toBeInTheDocument();
    }, { timeout: 10000 });

    const initialRows = await screen.findAllByRole('row', {}, { timeout: 10000 });
    expect(initialRows).toHaveLength(4); // 3 data rows + 1 header row

    // Step 5: Apply Business Type filter
    const businessTypeFilter = await screen.findByLabelText('Business Type', {}, { timeout: 10000 });
    await act(async () => {
      fireEvent.change(businessTypeFilter, { target: { value: 'Tech' } });
    });

    // Step 6: Verify filtered state
    await waitFor(() => {
      const filteredRows = screen.getAllByRole('row');
      expect(filteredRows).toHaveLength(3); // 2 Tech rows + 1 header row
      expect(screen.queryByText('Retail')).not.toBeInTheDocument();
    }, { timeout: 10000 });

    // Step 7: Apply Revenue Range filter
    const minRevenueInput = await screen.findByLabelText('Min Revenue', {}, { timeout: 10000 });
    await act(async () => {
      fireEvent.change(minRevenueInput, { target: { value: '1200000' } });
    });

    // Step 8: Verify filtered state after range filter
    await waitFor(() => {
      const rangeFilteredRows = screen.getAllByRole('row');
      expect(rangeFilteredRows).toHaveLength(2); // 1 Tech row (revenue > 1.2M) + 1 header row
    }, { timeout: 10000 });

    // Step 9: Verify chart updates
    expect(screen.getByTestId('revenue-price-chart')).toBeInTheDocument();
    expect(screen.getByTestId('profit-price-chart')).toBeInTheDocument();

    // Step 10: Clear filters
    const clearFiltersButton = await screen.findByText('Clear Filters', {}, { timeout: 10000 });
    await act(async () => {
      fireEvent.click(clearFiltersButton);
    });

    // Step 11: Verify restored state
    await waitFor(() => {
      const restoredRows = screen.getAllByRole('row');
      expect(restoredRows).toHaveLength(4); // All 3 rows + 1 header row
      expect(screen.getByText('Retail')).toBeInTheDocument();
    }, { timeout: 10000 });

    // Step 12: Verify summary statistics update
    const avgRevenue = await screen.findByText(/Avg Revenue/i, {}, { timeout: 10000 });
    const avgProfit = await screen.findByText(/Avg Profit/i, {}, { timeout: 10000 });
    const totalListings = await screen.findByText(/Total Listings/i, {}, { timeout: 10000 });

    expect(avgRevenue).toHaveTextContent('$1,500,000.00');
    expect(avgProfit).toHaveTextContent('$616,666.67');
    expect(totalListings).toHaveTextContent('3');
  }, 60000); // Increase the overall test timeout to 60 seconds
});