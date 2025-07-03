
import { Layout, Menu } from 'antd';

import {CalendarCheck,ChartNoAxesCombined,ChartPie,FileChartPie,LogOut,UsersRound,WrapText,CircleUserRound} from "lucide-react";
import styles from '../css/sidebar.module.css';
import { useState } from 'react';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState (false);
  const  menuItems=[
          { key: '1', icon: <UsersRound  strokeWidth={3} />, label: '' },
          { key: '2', icon: <WrapText strokeWidth={3}  />, label: '' },
          { key: '3', icon: <ChartPie strokeWidth={3}  />, label: '' },
          { key: '4', icon: <ChartNoAxesCombined strokeWidth={3} />, label: '' },
          { key: '5', icon: <CalendarCheck  strokeWidth={3} />, label: '' },
          { key: '6', icon: <FileChartPie strokeWidth={3}  />, label: '' },
          // { 
          //   style: { marginTop: '2rem' },
          //   key: '7', 
          //   icon: <LogOut  strokeWidth={3} className="logoutIcon" />,
          //    label: '' 
          //   },
        ]

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
        <CircleUserRound   strokeWidth={3}   className={styles.logoIcon}  ></CircleUserRound>

        
      </div>


      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['1']}
        className={styles.menu}
        // items={[
        //   { key: '1', icon: <UsersRound  strokeWidth={3} />, label: '' },
        //   { key: '2', icon: <WrapText strokeWidth={3}  />, label: '' },
        //   { key: '3', icon: <ChartPie strokeWidth={3}  />, label: '' },
        //   { key: '4', icon: <ChartNoAxesCombined strokeWidth={3} />, label: '' },
        //   { key: '5', icon: <CalendarCheck  strokeWidth={3} />, label: '' },
        //   { key: '6', icon: <FileChartPie strokeWidth={3}  />, label: '' },
        //   { 
        //     style: { marginTop: '2rem' },
        //     key: '7', 
        //     icon: <LogOut  strokeWidth={3} className="logoutIcon" />,
        //      label: '' 
        //     },
        // ]}
        items={menuItems}
      />
       <div className={styles.logoutItem}>
        <LogOut strokeWidth={3} />
      </div>
    {/* </div> */}
     
    </Sider>
  );
};

export default Sidebar;
