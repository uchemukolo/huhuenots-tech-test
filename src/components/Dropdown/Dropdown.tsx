import React, { useState, ReactNode } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down.svg'
import './Dropdown.css';

type DropdownProps = {
  title: string;
  content: ReactNode;
}
const Dropdown: React.FC<DropdownProps> = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggle}>
        <span className="dropdown-title">{title}</span>
        <ArrowDownIcon className={`dropdown-icon ${open ? 'open' : ''}`} height="11px" width="11px" strokeWidth={100} />
      </div>
      {open && <div className="dropdown-content">{content}</div>}
    </div>
  );
}

export default Dropdown;
