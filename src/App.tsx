import React from 'react';
import PageHeader from './components/PageHeader/PageHeader.tsx';
import DataTableContainer from './pages/DataTableContainer.tsx';
import PageFooter from './components/PageFooter/PageFooter.tsx';
import logo from './assets/Huguenots_mark@2x.png';
import userImage from './assets/Flag_of_Great_Britain_(1707–1800).svg@2x.png';
import { User } from './components/data/productDataTypes.ts'
import './App.css'

const App: React.FC = () => {
  const user: User = {
    image: userImage,
    name: 'Professional Investor'
  };

  return (
    <div className="App">
      <PageHeader logo={logo} user={user} />
      <h2 className='page-title'>Product Finder</h2>
      <DataTableContainer />
      <PageFooter logo={logo} />
    </div>
  );
};

export default App;
