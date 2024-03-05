import { PencilIcon, PlusIcon, QrCodeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateLocations() {
  return (
    <Link
      href='/dashboard/locations/create'
      className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
    >
      <span className='hidden md:block'>Create Locations</span>
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  );
}

export function UpdateLocation({ name }: { name: string }) {
  return (
    <Link
      href={`/dashboard/locations/${name}/edit`}
      className='rounded-md border p-2 hover:bg-gray-100'
    >
      <PencilIcon className='w-5' />
    </Link>
  );
}


export function CreateWorkerButton() {
  return (
    <Link
      href='/dashboard/workers/create'
      className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
    >
      <span className='hidden md:block'>Create Workers</span>
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  );
}

export function UpdateWorkerButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/workers/${id}/edit`}
      className='rounded-md border p-2 hover:bg-gray-100'
    >
      <PencilIcon className='w-5' />
    </Link>
  );
}


export function LocationQRCodeButton({ name }: { name: string }) {

  return (
    <Link
      href={`/dashboard/locations/${name}/qrcode`}
      className='rounded-md border p-2 hover:bg-gray-100'
    >
      <QrCodeIcon className='w-5' />
    </Link>
  );
}
