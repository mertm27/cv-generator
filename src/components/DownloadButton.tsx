import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ThemeSelector from './ThemeSelector';

const DownloadButton: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'CV',
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
    `,
  });

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={handlePrint}
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium"
      >
        📄 Download CV as PDF
      </button>
      
      {/* Hidden component for printing */}
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;
