import React from 'react';
import { DataTypes } from '../data/productDataTypes';
import './DataTable.css'

type DataTableProps = {
  data: DataTypes[];
}
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className='datatable-container'>
      <table>
        <thead>
          <tr>
            <th>Fund Name</th>
            <th>Primary Ticker</th>
            <th>Income Treatment</th>
            <th>Share Class Currency</th>
            <th>ISIN</th>
            <th>Strategy</th>
            <th>Asset Class</th>
            <th>Region</th>
            <th>Style</th>
          </tr>
        </thead>
        {data.length === 0 ? (
        <p className='no-data'>No Data found</p>
      ) : (
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.fundName}</td>
              <td>{item.primaryTicker}</td>
              <td>{item.incomeTreatment}</td>
              <td>{item.currency}</td>
              <td>{item.isin}</td>
              <td>{item.strategy}</td>
              <td>{item.assetClass}</td>
              <td>{item.region}</td>
              <td>{item.style}</td>
            </tr>
          ))}
        </tbody>)}
      </table>
    </div>
  );
};

export default DataTable;
