import React, { useState, useEffect, ChangeEvent } from 'react';
import _debounce from 'lodash/debounce';
import DataTable from '../components/DataTable/Datatable.tsx';
import Filters from '../components/Filters/Filters.tsx';
import { data, strategyFilterData, styleFilterData, assetClassFilterData, marketAndRegionFilterData } from '../components/data/productData.ts';
import searchIcon from '../assets/Icon ionic-md-search@2x.png';
import './DataTableContainer.css';
import Dropdown from '../components/Dropdown/Dropdown.tsx';
import { Option, DataTypes } from '../components/data/productDataTypes.ts'


const DataTableContainer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<DataTypes[]>(data);
  const [strategyFilter, setStrategyFilter] = useState<(string | Option)[]>([]);
  const [assetClassFilter, setAssetClassFilter] = useState<(string | Option)[]>([]);
  const [marketAndRegionFilter, setMarketAndRegionFilterFilter] = useState<(string | Option)[]>([]);
  const [styleFilter, setStyleFilter] = useState<(string | Option)[]>([]);

  useEffect(() => {
    // Function to filter data based on search query and filters
    const filterData = () => {
      let filtered = data.filter((item) =>
        item.fundName.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (strategyFilter.length > 0) {
        filtered = filtered.filter(item => strategyFilter.includes(item.strategy));
      }

      if (assetClassFilter.length > 0) {
        filtered = filtered.filter((item: DataTypes) =>
          assetClassFilter.some(option =>
            typeof option === 'object'
              ? option.options?.some(subOption => subOption.value === item.assetClass)
              : option === item.assetClass
          )
        );
      }

      if (marketAndRegionFilter.length > 0) {
        filtered = filtered.filter((item: DataTypes) =>
          marketAndRegionFilter.some(option => {
            if (typeof option === 'string') {
              return option === item.region;
            } else {
              return option.options?.some(subOption => subOption.value === item.region || (subOption.options && subOption.options.some(childOption => childOption.value === item.region)));
            }
          })
        );
      }
      if (styleFilter.length > 0) {
        filtered = filtered.filter(item => styleFilter.includes(item.style));
      }
      setFilteredData(filtered);
    };

    // Call the filtering function when searchQuery or any filter changes
    filterData();
  }, [searchQuery, strategyFilter, assetClassFilter, marketAndRegionFilter, styleFilter]);

  // Function to handle search input changes with debounce
  const debouncedSearch = _debounce((value) => {
    setSearchQuery(value);
  }, 300);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    debouncedSearch(value);
  };

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
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filters">
        <Dropdown title='Strategy' content={<Filters data={strategyFilterData} onChange={setStrategyFilter} />} />
        <Dropdown title='Asset Class' content={<Filters data={assetClassFilterData} onChange={setAssetClassFilter} />} />
        <Dropdown title='Market & Region' content={<Filters data={marketAndRegionFilterData} onChange={setMarketAndRegionFilterFilter} />} />
        <Dropdown title='Style' content={<Filters data={styleFilterData} onChange={setStyleFilter} />} />
      </div>
      <DataTable data={filteredData} />
    </div>
  );
};

export default DataTableContainer;
