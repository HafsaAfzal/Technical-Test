import { useEffect, useState } from 'react';
import { fetchInvoicingData } from '../api/invoicingAPI';
import styles from '../css/invoicing.module.css';
import Sidebar from '../Components/Sidebar.jsx';
import  Header  from '../Components/Header.jsx';
import { InvoicingCard } from '../Components/InvoicingCard.jsx';

export const InvoicingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchInvoicingData().then(setData);
  }, []);

  return (
    <div className={styles.wrapper}>
     <Sidebar></Sidebar>
      <div className={styles.main}>
        <Header></Header>
        <div className={styles.container}>
          {data.map((d, i) => (
            // <InvoicingCard key={i} {...d} />
            <InvoicingCard  key={i} {...d}  ></InvoicingCard>
          ))}
        </div>
      </div>
    </div>
  );
};