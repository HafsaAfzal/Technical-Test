// import { useEffect, useState } from 'react';
// import { fetchInvoicingData } from '../api/invoicingAPI';
// import styles from '../css/invoicing.module.css';
// import Sidebar from '../Components/Sidebar.jsx';
// import Header from '../Components/Header.jsx';
// import { InvoicingCard } from '../Components/InvoicingCard.jsx';

// export const InvoicingPage = () => {
//   const [data, setData] = useState([]);

//   const fetchData = (filter) => {
//     fetchInvoicingData(filter).then(setData);
//   };

//   useEffect(() => {
//     fetchData('SDR'); 
//   }, []);

//   return (
//     <div className={`${styles.modalWrapper} ${styles['hide-scrollbar']}`}>
//       <div className={styles.wrapper}>
//         <Sidebar />
//         <div className={styles.main}>
//           <Header onFilterChange={fetchData} />
//           <div className={styles.container}>
//             {data.map((d, i) => (
//               <InvoicingCard key={i} {...d} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


//////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from 'react';
import { fetchInvoicingData } from '../api/invoicingAPI';
import styles from '../css/invoicing.module.css';
import Sidebar from '../Components/Sidebar.jsx';
import Header from '../Components/Header.jsx';
import { InvoicingCard } from '../Components/InvoicingCard.jsx';

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
        <Sidebar />
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
