
import { Select } from 'antd';
import { useState } from 'react';

const YearSelect = ({ className }) => {
  const currentYear = new Date().getFullYear();
  const startYear = 2000;

  const yearOptions = Array.from({ length: currentYear - startYear + 1 }, (_, index) => {
    const year = startYear + index;
    return { value: year.toString(), label: year.toString() };
  }).reverse(); // Most recent year first

  const [selectedYear, setSelectedYear] = useState(currentYear.toString());

  return (
    <Select
      value={selectedYear}
      onChange={setSelectedYear}
      className={className}
      popupClassName="customDropdown"
      options={yearOptions}
    />
  );
};

export default YearSelect;
