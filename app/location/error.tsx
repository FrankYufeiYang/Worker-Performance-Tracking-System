'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className='flex h-screen text-2xl md:text-4xl flex-col items-center justify-center'>
      <h2 className='text-center'>{error.message}</h2>
      <h2>If the same error happens again, please contact IT</h2>

      <button
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
