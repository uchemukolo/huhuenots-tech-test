import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import DataTableContainer from './DataTableContainer';

// Mocking data and dependencies
jest.mock('../components/data/productData.ts', () => ({
  data: [
    { fundName: 'Fund 1', strategy: 'Strategy 1', assetClass: 'Asset Class 1', region: 'Region 1', style: 'Style 1' },
    { fundName: 'Fund 2', strategy: 'Strategy 2', assetClass: 'Asset Class 2', region: 'Region 2', style: 'Style 2' },
    { fundName: 'Fund 3', strategy: 'Strategy 3', assetClass: 'Asset Class 3', region: 'Region 3', style: 'Style 3' },
  ],
  strategyFilterData: ['Strategy 1', 'Strategy 2', 'Strategy 3'],
  styleFilterData: ['Style 1', 'Style 2', 'Style 3'],
  assetClassFilterData: ['Asset Class 1', 'Asset Class 2', 'Asset Class 3'],
  marketAndRegionFilterData: ['Region 1', 'Region 2', 'Region 3'],
}));

describe('DataTableContainer Component', () => {
  test('renders correctly', () => {
    const { getAllByText, getByPlaceholderText } = render(<DataTableContainer />);
    
    // Check if search input and filters are rendered
    expect(getByPlaceholderText('Enter fund name')).toBeInTheDocument();
    expect(getAllByText('Strategy')[0]).toBeInTheDocument();
    expect(getAllByText('Asset Class')[0]).toBeInTheDocument();
    expect(getAllByText('Market & Region')[0]).toBeInTheDocument();
    expect(getAllByText('Style')[0]).toBeInTheDocument();
  });

  test('filters data based on search input', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<DataTableContainer />);
    const searchInput = getByPlaceholderText('Enter fund name');

    // Type search query and wait for filtering
    fireEvent.change(searchInput, { target: { value: 'Fund 1' } });
    await waitFor(() => expect(queryByText('Fund 1')).toBeInTheDocument());
    expect(queryByText('Fund 2')).not.toBeInTheDocument();
    expect(queryByText('Fund 3')).not.toBeInTheDocument();
  });

  test('handles filter change', async () => {
    const { getAllByText, queryByText, findByText } = render(<DataTableContainer />);
    const strategyFilter = getAllByText('Strategy')[1];

    // Click on a strategy filter option and wait for filtering
    fireEvent.click(strategyFilter);
    fireEvent.click(strategyFilter);
  const strategyOption = await findByText('Strategy 1');
  fireEvent.click(strategyOption);
    await waitFor(() => expect(queryByText('Fund 1')).toBeInTheDocument());
  });
});
