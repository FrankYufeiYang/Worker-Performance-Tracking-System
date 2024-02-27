'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Button } from '@mui/material';
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

  function setCurrentMonth() {
    const now = new Date(); // Current date and time
    const start = new Date(now.getFullYear(), now.getMonth(), 1); // First day of the current month
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Last day of the current month
    setStartDate(
      `${start.getFullYear()}-${(start.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${start.getDate().toString().padStart(2, '0')}`
    );
    setEndDate(
      `${end.getFullYear()}-${(end.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${end.getDate().toString().padStart(2, '0')}`
    );
  }

  return (
    <div className='w-full md:w-1/2 xl:w-1/3 flex flex-col mt-4'>
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
      <div className='mt-4 flex  justify-between'>
        <Button color='secondary' variant='outlined' onClick={setCurrentMonth}>
          Current Month
        </Button>
        <Button
          className='bg-blue-500'
          onClick={handleSearch}
          variant='contained'
        >
          Fetch Reports
        </Button>
      </div>
    </div>
  );
}
