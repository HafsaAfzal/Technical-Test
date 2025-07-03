
import { Select } from 'antd';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const MonthSelect = ({ className, defaultValue = 'Jan', onChange }) => {
  const monthOptions = months.map((month) => ({
    label: month,
    value: month,
  }));

  return (
    <Select
      className={className}
      defaultValue={defaultValue}
      popupClassName="customDropdown"
      options={monthOptions}
      onChange={onChange}
    />
  );
};

export default MonthSelect;
