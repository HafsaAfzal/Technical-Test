// File: components/ClientModal.jsx
import React from "react";
import { Input, Checkbox, Button, Tabs } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styles from "../css/clientModal.module.css";

const { TabPane } = Tabs;

const ClientModal = ({ onClose }) => {
  return (
    <div className={`${styles.hideScrollbar}`}>
    <div className={styles.modalWrapper}>
      <div className={styles.modalHeader}>
        <h3 className={styles.modalTitle}>Client</h3>
        <CloseOutlined onClick={onClose} className={styles.closeIcon} />
      </div>

      <Tabs defaultActiveKey="1" className={styles.tabs}>
        <TabPane tab={<span className={styles.tabLabel}>Details</span>} key="1">
          <Input defaultValue="CURRAL" className={styles.input} />

          <Checkbox className={styles.checkbox}>
            Show On The Appointments Tracker
          </Checkbox>

          <Input placeholder="Monthly KPI Target" className={styles.input} />
          <Input placeholder="Pound Value" className={styles.input} />
          <Input placeholder="Appointment Fee" className={styles.input} />
          <Input placeholder="Total Budget" className={styles.input} />
          <Input placeholder="Threshold" className={styles.input} />

          <Checkbox className={styles.checkbox}>Archive This Client</Checkbox>

          <Button type="primary" block className={styles.saveBtn}>
            Save Client
          </Button>

          <Button danger block className={styles.deleteBtn}>
            Delete Client
          </Button>
        </TabPane>

        <TabPane tab={<span className={styles.tabLabel}>Stakeholders</span>} key="2">
         
        </TabPane>

        <TabPane tab={<span className={styles.tabLabel}>Onboarding</span>} key="3">
       
        </TabPane>
      </Tabs>
    </div>
    </div>
  );
};

export default ClientModal;
