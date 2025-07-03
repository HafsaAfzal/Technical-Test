
// File: api/invoicingAPI.js
export const fetchInvoicingData = async (filter = 'SDR') => {
  const sdrData = [
     { name: 'Josh', amount: 7000, invoiceable: 1800, percent: 80.5 },
    { name: 'Ashley T.', amount: 5000, invoiceable: 1000, percent: 60.5 },
    { name: 'Carlton Z.', amount: 8000, invoiceable: 800, percent: 55.0 },
    { name: 'M. Oliver', amount: 20000, invoiceable: 750, percent: 50.57 },
    { name: 'Arthur V.', amount: 15000, invoiceable: 600, percent: 41.67 },
    { name: 'Turner', amount: 13000, invoiceable: 600, percent: 40.0 },
    { name: 'L. Litteral', amount: 5000, invoiceable: 550, percent: 35.0 },
    { name: 'Timothy', amount: 2000, invoiceable: 500, percent: 33.33 },
    { name: 'John K.', amount: 10000, invoiceable: 300, percent: 28.57 },
    { name: 'Thomas', amount: 8000, invoiceable: 300, percent: 28.57 },
    { name: 'Ryan', amount: 15000, invoiceable: 300, percent: 28.57 }
  ];

  const companyData = [
    { name: 'AURA', amount: 7000, invoiceable: 1800, percent: 80.5 },
    { name: 'Amstrd Digital', amount: 5000, invoiceable: 1000, percent: 60.5 },
    { name: 'Aptus Technology', amount: 8000, invoiceable: 800, percent: 55.0 },
    { name: 'Conversation Design Institute', amount: 20000, invoiceable: 750, percent: 50.57 },
    { name: 'Assured Network Solution', amount: 15000, invoiceable: 600, percent: 41.67 },
    { name: 'Azakaw', amount: 13000, invoiceable: 600, percent: 40.0 },
    { name: 'Centeralise', amount: 5000, invoiceable: 550, percent: 35.0 },
    { name: 'Connect group', amount: 2000, invoiceable: 500, percent: 33.33 },
    { name: 'Cario-AU/NZ ', amount: 10000, invoiceable: 300, percent: 28.57 },
    { name: 'Cario-Asia', amount: 8000, invoiceable: 300, percent: 28.57 },
    { name: 'Curral-BDM', amount: 15000, invoiceable: 300, percent: 28.57 }
  ];

  return filter === 'Company' ? companyData : sdrData;
};

export const fetchFilterOptions = async () => {
  return [
    { value: 'SDR', label: 'SDR' },
    { value: 'Company', label: 'Company' },
  ];
};