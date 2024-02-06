'use client';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import Image from 'next/image';
import { PrinterIcon } from '@heroicons/react/24/solid';

export default function Page({ params }: { params: { name: string } }) {
  const name = params.name;
  const token = 'lab1';
  const pathname = `${window.location.origin}/location/${name}`;
  const [qrSrc, setQRSrc] = useState('');
  useEffect(() => {
    QRCode.toDataURL(pathname).then((qrCode: string) => {
      console.log(qrCode);
      setQRSrc(qrCode);
    });
  }, [pathname]);
  console.log(pathname);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Location ', href: '/dashboard/locations' },
          {
            label: `${name}`,
            href: `/dashboard/locations/${name}/qrcode`,
            active: true,
          },
        ]}
      />
      <div
        className='flex flex-col items-center justify-center'
        id='printableArea'
      >
        <Image width={500} height={500} src={qrSrc} alt='QR Code' />
        <p className=' text-xl'> Log In Token: {token} </p>
      </div>
      <div className='flex items-center justify-center pt-20'>
        <button
          className='rounded-md border p-2 hover:bg-gray-100'
          onClick={() => window.print()}
        >
          <span className=''>Print QR code</span>
          <PrinterIcon className=' w-20' />
        </button>
      </div>
    </main>
  );
}
