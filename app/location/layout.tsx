import SideNav from '@/app/ui/dashboard/sidenav';
import Image from 'next/image';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen flex-col'>
      <div className='mb-2 flex h-[20vh] items-center justify-between bg-blue-700 p-4 '>
        <Image
          className='w-40 sm:w-44  md:w-auto'
          width={160}
          height={80}
          src={'/logo.svg'}
          alt='logo'
        />
        <Image
          className='w-32  md:w-auto'
          width={160}
          height={80}
          src={'/Outlook-Logos1.png'}
          alt='logo'
        />
      </div>
      <div className='flex-grow flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
}
