import React from 'react';
import { User } from '../data/productDataTypes'
import './PageHeader.css';

type PageHeaderProps = {
  logo: string;
  user: User;
}

const PageHeader: React.FC<PageHeaderProps> = ({ logo, user }) => {
  return (
    <div className="page-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="user-container">
        <img src={user.image} alt="User" className="user-image" />
        <span className="user-name">{user.name}</span>
      </div>
    </div>
  );
};

export default PageHeader;
