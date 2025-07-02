import styles from '../css/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>SDR</div>
      <div className={styles.menu}></div>
    </div>
  );
};

export default Sidebar;