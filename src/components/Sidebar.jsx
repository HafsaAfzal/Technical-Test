// import styles from '../css/sidebar.module.css';


// const Sidebar = () => {
//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.logo}>SDR</div>
//       <div className={styles.menu}></div>
      
//     </div>
//   );
// };

// export default Sidebar;

///////////////////////////////////////////////////////////////////////////
// Sidebar.jsx
import { Layout, Menu } from 'antd';

import {CalendarCheck,ChartNoAxesCombined,ChartPie,FileChartPie,LogOut,UsersRound,WrapText} from "lucide-react";
import styles from '../css/sidebar.module.css';
import { useState } from 'react';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={styles.sidebar}
      width={80}
      theme="dark"
    >
      <div className={styles.logo}> 
        <img src="/logo.svg" alt="logo" className={styles.logoIcon} />
      </div>

      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['1']}
        className={styles.menu}
        items={[
          { key: '1', icon: <UsersRound />, label: '' },
          { key: '2', icon: <WrapText />, label: '' },
          { key: '3', icon: <ChartPie />, label: '' },
          { key: '4', icon: <ChartNoAxesCombined />, label: '' },
          { key: '5', icon: <CalendarCheck />, label: '' },
          { key: '6', icon: <FileChartPie />, label: '' },
          { 
            style: { marginTop: '2rem' },
            key: '7', 
            icon: <LogOut />,
             label: '' 
            },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
