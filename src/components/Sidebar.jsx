
import { Layout, Menu ,Drawer} from 'antd';
import {
  CalendarCheck,
  ChartNoAxesCombined,
  ChartPie,
  FileChartPie,
  LogOut,
  UsersRound,
  WrapText,
  CircleUserRound,
} from 'lucide-react';
import styles from '../css/sidebar.module.css';
import { useState } from 'react';
import ClientModal from '../components/ClientModal';


const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const menuItems = [
    { key: '1', icon: <UsersRound strokeWidth={3} />, label: '' },
    { key: '2', icon: <WrapText strokeWidth={3} />, label: '' },
    { key: '3', icon: <ChartPie strokeWidth={3} />, label: '' },
    { key: '4', icon: <ChartNoAxesCombined strokeWidth={3} />, label: '' },
    { key: '5', icon: <CalendarCheck strokeWidth={3} />, label: '' },
    { key: '6', icon: <FileChartPie strokeWidth={3} />, label: '' },
  ];

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className={styles.sidebar}
        width={80}
        theme="dark"
      >
        <div className={styles.logo}>
          <CircleUserRound
            strokeWidth={3}
            className={styles.logoIcon}
            onClick={showModal}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          className={styles.menu}
          items={menuItems}
        />

        <div className={styles.logoutItem}>
          <LogOut strokeWidth={3} />
        </div>
      </Sider>

     
      <Drawer
  open={isModalVisible}
  onClose={handleCancel}
  closable={false}
  placement="left"
  width={340}
  bodyStyle={{ padding: 0, background: '#1f1f1f' }}
>
  <ClientModal onClose={handleCancel} />
</Drawer>

    </>
  );
};

export default Sidebar;
