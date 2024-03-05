import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function InvalidLocation() {
  return (
    <main className=' w-screen h-screen flex flex-col items-center justify-center'>
      <h1 className='text-bold md:text-2xl lg:text-4xl mx-4 text-center'>
        <p>You are Logged in!</p> <br /> please close this page and scan a valid
        QR code at the working location
      </h1>
      <br />
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-200 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
          <PowerIcon className='w-6' />
          <div className=''>Sign Out</div>
        </button>
      </form>
    </main>
  );
}
