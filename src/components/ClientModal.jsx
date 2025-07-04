// File: components/ClientModal.jsx
// import React from "react";
// import { Input, Checkbox, Button, Tabs } from "antd";
// import { CloseOutlined } from "@ant-design/icons";
// import styles from "../css/clientModal.module.css";

// const { TabPane } = Tabs;

// const ClientModal = ({ onClose }) => {
//   return (
//     <div className={`${styles.hideScrollbar}`}>
//     <div className={styles.modalWrapper}>
//       <div className={styles.modalHeader}>
//         <h3 className={styles.modalTitle}>Client</h3>
//         <CloseOutlined onClick={onClose} className={styles.closeIcon} />
//       </div>

//       <Tabs defaultActiveKey="1" className={styles.tabs}>
//         <TabPane tab={<span className={styles.tabLabel}>Details</span>} key="1">
//           <Input defaultValue="CURRAL" className={styles.input} />

//           <Checkbox className={styles.checkbox}>
//             Show On The Appointments Tracker
//           </Checkbox>

//           <Input type="number" placeholder="Monthly KPI Target" className={styles.input} />
//           <Input type="number" placeholder="Pound Value" className={styles.input} />
//           <Input  type="number"placeholder="Appointment Fee" className={styles.input} />
//           <Input type="number" placeholder="Total Budget" className={styles.input} />
//           <Input type="number" placeholder="Threshold" className={styles.input} />

//           <Checkbox className={styles.checkbox}>Archive This Client</Checkbox>

//           <Button type="primary" block className={styles.saveBtn}>
//             Save Client
//           </Button>

//           <Button danger block className={styles.deleteBtn}>
//             Delete Client
//           </Button>
//         </TabPane>

//         <TabPane tab={<span className={styles.tabLabel}>Stakeholders</span>} key="2">
         
//         </TabPane>

//         <TabPane tab={<span className={styles.tabLabel}>Onboarding</span>} key="3">
       
//         </TabPane>
//       </Tabs>
//     </div>
//     </div>
//   );
// };

// export default ClientModal;


////////////////////////////////////////////////////////////////////////////////////////////////
// File: components/ClientModal.jsx
import React, { useState } from "react";
import { Input, Checkbox, Button, Tabs } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styles from "../css/clientModal.module.css";

const { TabPane } = Tabs;

const ClientModal = ({ onClose }) => {
  const [formValues, setFormValues] = useState({
    kpi: "",
    pound: "",
    fee: "",
    budget: "",
    threshold: "",
  });

  const [errors, setErrors] = useState({
    kpi: "",
    pound: "",
    fee: "",
    budget: "",
    threshold: "",
  });

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setFormValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "Only numbers are allowed" }));
    }
  };

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

            <div className={styles.inputGroup}>
              <Input
                name="kpi"
                type="text"
                placeholder="Monthly KPI Target"
                className={styles.input}
                value={formValues.kpi}
                onChange={handleNumberChange}
              />
              {errors.kpi && <p className={styles.error}>{errors.kpi}</p>}
            </div>

            <div className={styles.inputGroup}>
              <Input
                name="pound"
                type="text"
                placeholder="Pound Value"
                className={styles.input}
                value={formValues.pound}
                onChange={handleNumberChange}
              />
              {errors.pound && <p className={styles.error}>{errors.pound}</p>}
            </div>

            <div className={styles.inputGroup}>
              <Input
                name="fee"
                type="text"
                placeholder="Appointment Fee"
                className={styles.input}
                value={formValues.fee}
                onChange={handleNumberChange}
              />
              {errors.fee && <p className={styles.error}>{errors.fee}</p>}
            </div>

            <div className={styles.inputGroup}>
              <Input
                name="budget"
                type="text"
                placeholder="Total Budget"
                className={styles.input}
                value={formValues.budget}
                onChange={handleNumberChange}
              />
              {errors.budget && <p className={styles.error}>{errors.budget}</p>}
            </div>

            <div className={styles.inputGroup}>
              <Input
                name="threshold"
                type="text"
                placeholder="Threshold"
                className={styles.input}
                value={formValues.threshold}
                onChange={handleNumberChange}
              />
              {errors.threshold && <p className={styles.error}>{errors.threshold}</p>}
            </div>

            <Checkbox className={styles.checkbox}>Archive This Client</Checkbox>

            <Button type="primary" block className={styles.saveBtn}>
              Save Client
            </Button>

            <Button danger block className={styles.deleteBtn}>
              Delete Client
            </Button>
          </TabPane>

          <TabPane tab={<span className={styles.tabLabel}>Stakeholders</span>} key="2">
            {/* Content goes here */}
          </TabPane>

          <TabPane tab={<span className={styles.tabLabel}>Onboarding</span>} key="3">
            {/* Content goes here */}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientModal;
