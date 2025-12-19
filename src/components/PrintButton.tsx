import React from 'react';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="px-4 py-2 bg-secondary-500 dark:bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 hover:shadow-lg transition-all no-print"
      title="Print or save as PDF"
    >
      🖨️ Print CV
    </button>
  );
};

export default PrintButton;
