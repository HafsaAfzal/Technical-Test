// import styles from '../css/header.module.css';
// import { Select, DatePicker } from 'antd';

// export const Header = () => {
//   return (
//     <div className={styles.header}>
//       <DatePicker picker="month" className={styles.datePicker} />
//       <Select defaultValue="2025" className={styles.select} options={[{ value: '2025', label: '2025' }]} />
//       <Select defaultValue="SDR" className={styles.select} options={[{ value: 'SDR', label: 'SDR' }]} />
//       <Select defaultValue="Telesales" className={styles.select} options={[{ value: 'Telesales', label: 'Telesales' }]} />
//       <div className={styles.total}>Total Amount: £7,100</div>
//     </div>
//   );
// };
//////////////////////////////////////////////////////////////////////////////////////
//////////////perfect code but selects width is not fixed/////////

// import styles from '../css/header.module.css';
// import { Select } from 'antd';

// const Header = () => {
//   return (
//     <div className={styles.header}>
//       <div className={styles.title}>SDR - INVOICING FEE</div>
//       <div className={styles.controls}>
    
//         <Select defaultValue="May" className={styles.select1} options={[{ value: 'May', label: 'May' },{ value: 'June', label: 'June' }]} />
//         <Select defaultValue="2025" className={styles.select1} options={[{ value: '2025', label: '2025' },{ value: '2024', label: '2024' }]} />
//         <Select defaultValue="SDR" className={styles.select2} options={[{ value: 'SDR', label: 'SDR' },{ value: 'Company', label: 'Company' }]} />
//         <Select defaultValue="Telesales" className={styles.select2} options={[{ value: 'All', label: 'All' },{ value: 'Telesales', label: 'Telesales' },{ value: 'Digital', label: 'Digital' }]} />
//         <div className={styles.total}>Total Amount: £7,100</div>
//       </div>
//     </div>
//   );
// };

// export default Header;

///////////////////////////////////////////////////////////////////////
import styles from '../css/header.module.css';
import { Select } from 'antd';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>SDR - INVOICING FEE</div>
      <div className={styles.controls}>
        <Select
          defaultValue="May"
          className={styles.monthYearSelect}
          options={[{ value: 'May', label: 'May' }, { value: 'June', label: 'June' }]}
        />
        <Select
          defaultValue="2025"
          className={styles.monthYearSelect}
          options={[{ value: '2025', label: '2025' }, { value: '2024', label: '2024' }]}
        />
        <Select
          defaultValue="SDR"
          className={styles.filterSelect}
          options={[{ value: 'SDR', label: 'SDR' }, { value: 'Company', label: 'Company' }]}
        />
        <Select
          defaultValue="Telesales"
          className={styles.filterSelect}
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








