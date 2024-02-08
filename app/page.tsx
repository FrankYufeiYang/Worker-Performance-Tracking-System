import Link from 'next/link';
import { lusitana } from './ui/fonts';

export default function Home() {
  return (
    <>
      <div className=' flex flex-col items-center justify-center text-white h-[30vh] bg-blue-500'>
        <div className=' text-center '>
          <h1 className='text-xl md:text-4xl font-extrabold'>
            Worker Performance Tracking System
          </h1>
          <p className='text-md md:text-lg mt-2'>Demo Version </p>
        </div>
      </div>
      <div className='flex h-[70vh]  '>
        <div className='w-[50vw] h-1/2 font-bold border-r-4 border-l m-auto flex items-center justify-center '>
          <Link href='/login' className='flex items-center justify-center '>
            <h1 className={`${lusitana.className} text-4xl`}>Worker Login</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6 ml-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </Link>
        </div>
        <div className='w-[50vw] border-r-4 font-bold m-auto'>
          <Link
            href='/login/manager'
            className='flex items-center justify-center '
          >
            <h1 className={`${lusitana.className} text-4xl`}>Manager Login</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6 ml-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
