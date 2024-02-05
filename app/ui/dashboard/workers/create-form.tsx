'use client';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createWorker } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form() {
  // const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createLocation, initialState);
  // console.log(state);

  return (
    <form action={createWorker}>
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        <div className='mb-4'>
          <label htmlFor='email' className='mb-2 block text-sm font-medium'>
            Worker Email
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='cannot have duplicated emails.'
                required
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
            </div>
            {/* <div id='customer-error' aria-live='polite' aria-atomic='true'> */}
            {/* {state.errors?.amount &&
                state.errors.amount.map((error: string) => (
                  <p className='mt-2 text-sm text-red-500' key={error}>
                    {error}
                  </p>
                ))}
            </div> */}
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='name' className='mb-2 block text-sm font-medium'>
            Worker Name
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='name'
                name='name'
                type='string'
                required
                placeholder='full name that shows on the report'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
            </div>
            {/* <div id='customer-error' aria-live='polite' aria-atomic='true'> */}
            {/* {state.errors?.amount &&
                state.errors.amount.map((error: string) => (
                  <p className='mt-2 text-sm text-red-500' key={error}>
                    {error}
                  </p>
                ))}
            </div> */}
          </div>
        </div>

        {/* <div id='customer-error' aria-live='polite' aria-atomic='true'>
          {state.message && (
            <p className='mt-2 text-sm text-red-500'>{state.message}</p>
          )}
        </div> */}
      </div>
      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href='/dashboard/workers'
          className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button type='submit'>Create Wroker</Button>
      </div>
    </form>
  );
}
