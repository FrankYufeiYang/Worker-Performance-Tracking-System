'use client';
import { deleteLocation } from '@/app/lib/actions';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function DeleteLocationConfirmation({ name }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const deleteInvoiceWithId = deleteLocation.bind(null, name);
  const onSubmit = (e) => {
    if (!confirm(`Do you want to delete this location: ${name}`)) {
      e.preventDefault();
    }
  };
  return (
    <form action={deleteInvoiceWithId} onSubmit={onSubmit}>
      <button
        disabled={!loaded}
        className='rounded-md border p-2 hover:bg-gray-100'
      >
        <span className='sr-only'>Delete</span>
        <TrashIcon className='w-4' />
      </button>
    </form>
  );
}
