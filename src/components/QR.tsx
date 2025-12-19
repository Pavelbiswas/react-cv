import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRProps {
  cvUrl: string;
}

const QR: React.FC<QRProps> = ({ cvUrl }) => {
  const qrRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (qrRef.current) {
      QRCode.toCanvas(qrRef.current, cvUrl, {
        errorCorrectionLevel: 'H',
        margin: 1,
        width: 250,
        color: {
          dark: '#2c3e50',
          light: '#ecf0f1',
        },
      });
    }
  }, [cvUrl]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center shadow-lg">
      <h3 className="text-2xl font-bold text-primary-600 dark:text-blue-300 mb-6">
        Scan My CV
      </h3>
      <div className="inline-block p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <canvas ref={qrRef}></canvas>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 break-all">{cvUrl}</p>
    </div>
  );
};

export default QR;
