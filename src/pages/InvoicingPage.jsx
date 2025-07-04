
import { useEffect, useState } from 'react';
import { fetchInvoicingData } from '../api/invoicingAPI';
import styles from '../css/invoicing.module.css';

import Header from '../components/Header.jsx';
import { InvoicingCard } from '../Components/InvoicingCard.jsx';
import Sidebar from '../components/Sidebar.jsx';

export const InvoicingPage = () => {
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('Company');

  useEffect(() => {
    fetchInvoicingData(selectedFilter).then(setData);
  }, [selectedFilter]);

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  return (
    <div className={` ${styles.hideScrollbar}`}>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <div className={styles.main}>
          <Header selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
          <div className={styles.container}>
            {data.map((d, i) => (
              <InvoicingCard key={i} {...d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
