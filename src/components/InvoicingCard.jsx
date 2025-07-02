import styles from '../css/invoicing.module.css';

export const InvoicingCard = ({ name, amount, invoiceable, percent }) => {
  const getColor = () => {
    if (percent >= 80) return '#00ff5b';
    if (percent >= 50) return '#ff9900';
    return '#d61f3c';
  };

  return (
    <div className={styles.card}>
      <div className={styles.name}>{name}</div>
      <div className={styles.barWrapper}>
        <div
          className={styles.bar}
          style={{ width: `${percent}%`, backgroundColor: getColor() }}
        >
          Invoiceable Amount (£{invoiceable.toFixed(2)}) ({percent.toFixed(2)}%)


          
        </div>
      </div>
      <div className={styles.total}>£{(amount / 1000).toFixed(0)}k</div>
    </div>
  );
};