'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Button } from '../../button';

export default function DateInterval({}: {}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [startDate, setStartDate] = useState(
    searchParams.get('startDate') || ''
  );
  const [endDate, setEndDate] = useState(searchParams.get('endDate') || '');

  const handleSearch = useDebouncedCallback(() => {
    console.log(startDate);
    console.log(endDate);
    console.log(typeof startDate);

    const params = new URLSearchParams(searchParams);
    params.set('startDate', startDate);
    params.set('endDate', endDate);
    replace(`${pathname}?${params.toString()}`);
  }, 1200);

  return (
    <div className='w-full md:w-4/6 flex flex-col mt-4'>
      <label htmlFor='startDate'>Start Date:</label>
      <input
        id='startDate'
        type='date'
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 outline-4 placeholder:text-gray-500'
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor='endDate'> End Date:</label>

      <input
        id='endDate'
        type='date'
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 outline-4 placeholder:text-gray-500'
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <div className='mt-4 flex flex-row-reverse'>
        <Button onClick={handleSearch}>
          Fetch Reports
        </Button>
      </div>
    </div>
  );
}
