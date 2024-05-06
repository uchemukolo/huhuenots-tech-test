import React, { ChangeEvent, useCallback, useMemo } from 'react';
import _debounce from 'lodash/debounce';
import DataTable from '../components/DataTable/Datatable.tsx';
import Filters from '../components/Filters/Filters.tsx';
import { data, strategyFilterData, styleFilterData, assetClassFilterData, marketAndRegionFilterData } from '../components/data/productData.ts';
import searchIcon from '../assets/Icon ionic-md-search@2x.png';
import './DataTableContainer.css';
import Dropdown from '../components/Dropdown/Dropdown.tsx';
import { DataTypes } from '../components/data/productDataTypes.ts';
import useDataTableReducer from '../hooks/useDataTableReducer.ts';
import {extractStringsFromFilter} from '../utils/index.ts'

const DataTableContainer: React.FC = () => {
  const { state, dispatch } = useDataTableReducer();

  // const debouncedSearch = useCallback(() => {
  //   const debouncedFunction = _debounce((value: string) => {
  //     dispatch({ type: 'SET_SEARCH_QUERY', payload: value });
  //   }, 300);
  
  //   return debouncedFunction;
  // }, [dispatch]);

  // const handleSearchChange = useCallback(() => {
  //   return (e: ChangeEvent<HTMLInputElement>) => {
  //     const { value } = e.target;
  //     debouncedSearch(value);
  //   };
  // }, [debouncedSearch]);

  const debouncedSearch = useCallback(() => {
    const debouncedFunction = _debounce((value: string) => {
      dispatch({ type: 'SET_SEARCH_QUERY', payload: value });
    }, 300);

    return debouncedFunction;
  }, [dispatch, _debounce]);

  const handleSearchChange = useCallback(() => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      debouncedSearch()(value);
    };
  }, [debouncedSearch]);
  // Function to handle filter changes
  const handleFilterChange = useCallback(
    (filterType: any, value: string[]) => {
      dispatch({ type: filterType, payload: value });
    },
    [dispatch]
  );

  const filterData = useMemo(() => {
    return () => {
      let filtered = data.filter((item) =>
        item.fundName.toLowerCase().includes(state.searchQuery.toLowerCase())
      );

      if (state.strategyFilter.length > 0) {
        filtered = filtered.filter(item => state.strategyFilter.includes(item.strategy));
      }

      if (state.assetClassFilter.length > 0) {
        filtered = filtered.filter((item: DataTypes) =>
          state.assetClassFilter.some(option =>
            (typeof option === 'object' &&
              option.options &&
              option.options.some(subOption =>
                subOption.value === item.assetClass
              )) || (option === item.assetClass)
          )
        );
      }

      if (state.marketAndRegionFilter.length > 0) {
        filtered = filtered.filter((item: DataTypes) =>
          state.marketAndRegionFilter.some(option => {
            if (typeof option === 'string') {
              return option === item.region;
            } else if (option.options) {
              return (option as any).options.some(subOption =>
                subOption.value === item.region ||
                (subOption.options && subOption.options.some(childOption =>
                  childOption.value === item.region
                ))
              );
            }
            return false;
          })
        );
      }

      if (state.styleFilter.length > 0) {
        filtered = filtered.filter(item => state.styleFilter.includes(item.style));
      }

      return filtered;
    };
  }, [state]);

  const filteredData = useMemo(() => filterData(), [filterData]);

  // Extract strings from objects in assetClassFilter and marketAndRegionFilter
  const assetClassSet = extractStringsFromFilter(state.assetClassFilter);
  const marketAndRegionSet = extractStringsFromFilter(state.marketAndRegionFilter);


  return (
    <div>
      <div className="search-container">
        <label className="search-label" htmlFor="search-input">
          <img src={searchIcon} alt="Search" className="search-icon" />
          SEARCH
        </label>
        <input
          id="search-input"
          className="search-input"
          type="text"
          placeholder="Enter fund name"
          value={state.searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filters">
        <Dropdown title='Strategy' content={<Filters data={strategyFilterData} selectedOptions={new Set(state.strategyFilter)} onChange={(value: string[]) => handleFilterChange('SET_STRATEGY_FILTER', value)} />} />
        <Dropdown title='Asset Class' content={<Filters data={assetClassFilterData} selectedOptions={assetClassSet} onChange={(value: string[]) => handleFilterChange('SET_ASSET_CLASS_FILTER', value)} />} />
        <Dropdown title='Market & Region' content={<Filters data={marketAndRegionFilterData} selectedOptions={marketAndRegionSet} onChange={(value: string[]) => handleFilterChange('SET_MARKET_AND_REGION_FILTER', value)} />} />
        <Dropdown title='Style' content={<Filters data={styleFilterData} selectedOptions={new Set(state.styleFilter)} onChange={(value: string[]) => handleFilterChange('SET_STYLE_FILTER', value)} />} />
      </div>
      <DataTable data={filteredData} />
    </div>
  );
};

export default DataTableContainer;
