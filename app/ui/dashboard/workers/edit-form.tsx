'use client';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateWorker } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Worker } from '@/app/lib/definitions';

export default function EditWorkForm({ worker }: { worker: Worker }) {
  // const initialState = { message: null, errors: {} };
  const updateWorkerWithEmail = updateWorker.bind(null, worker.id);
  // const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);
  return (
    <form action={updateWorkerWithEmail}>
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        {/* Worker Email */}
        <div className='mb-4'>
          <label htmlFor='email' className='mb-2 block text-sm font-medium'>
            Email
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='email'
                name='email'
                type='email'
                defaultValue={worker.email}
                placeholder='Enter Worker Email'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='name' className='mb-2 block text-sm font-medium'>
            Name
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='name'
                name='name'
                defaultValue={worker.name}
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href='/dashboard/workers'
          className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button type='submit'>Edit Worker</Button>
      </div>
    </form>
  );
}
