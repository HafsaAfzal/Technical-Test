
/////////////////////////////////////////////////////////////////////////////////
import styles from '../css/header.module.css';
import { Select } from 'antd';

import { useEffect, useState } from 'react';
import { fetchFilterOptions } from '../api/invoicingAPI';
import YearSelect from './YearSelect';
import MonthSelect from './MonthSelect';


const Header = ({ selectedFilter,onFilterChange }) => {
  const [filterOptions, setFilterOptions] = useState([]);


  const displayTitle =
    selectedFilter === 'Company'
      ? 'INVOICING FEE'
      : `${selectedFilter.toUpperCase()} - INVOICING FEE`;

  useEffect(() => {
    fetchFilterOptions().then(setFilterOptions);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.title}>{displayTitle}</div>
      <div className={styles.controls}>

        <MonthSelect
          className={styles.monthYearSelect}
          defaultValue="May"
          onChange={(value) => console.log(value)}
          
        />

        <YearSelect className={styles.monthYearSelect}></YearSelect>
        <Select
          defaultValue="Company"
          className={styles.filterSelect}
          popupClassName="customDropdown"
          options={filterOptions}
          onChange={onFilterChange}
        />
        <Select
          defaultValue="Telesales"
          className={styles.filterSelect}
          popupClassName="customDropdown"
          options={[
            { value: 'All', label: 'All' },
            { value: 'Telesales', label: 'Telesales' },
            { value: 'Digital', label: 'Digital' },
          ]}
        />
        <div className={styles.total}>Total Amount: £7,100</div>
      </div>
    </div>
  );
};

export default Header;








