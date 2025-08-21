'use client';
import Image from 'next/image';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

export default function PortfolioQRCode() {
  const [qrSrc, setQrSrc] = useState('');

  useEffect(() => {
    const url = 'https://mahbub-dev.vercel.app/';
    QRCode.toDataURL(url, {
      width: 64,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'H',
    })
      .then(setQrSrc)
      .catch(console.error);
  }, []);

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrSrc;
    link.download = 'portfolio-qr.png';
    link.click();
  };

  return (
    <div className="">
      {qrSrc && (
        <>
          <Image
            width={64}
            height={64}
            src={qrSrc}
            alt="Portfolio QR Code"
            className="w-16 h-16"
          />
          {/* <button
            onClick={downloadQR}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download QR
          </button> */}
        </>
      )}
    </div>
  );
}
