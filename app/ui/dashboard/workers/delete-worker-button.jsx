'use client';
import { deleteWorker } from '@/app/lib/actions';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
export function DeleteWorkerButton({ id, name }) {
  const deleteWorkerWithEmail = deleteWorker.bind(null, id);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    setLoaded(true)
  },[])
  const onSubmit = (e) => {
    if (!confirm(`Do you want to delete this worker: ${name}`)) {
      e.preventDefault();
    }
  };
  return (
    <form action={deleteWorkerWithEmail} onSubmit={onSubmit}>
      <button disabled={!loaded} className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>Delete</span>
        <TrashIcon className='w-4' />
      </button>
    </form>
  );
}
