import ManagerLoginForm from '@/app/ui/login/manager-login-form';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex flex-col justify-between align-baseline h-20 w-full rounded-lg bg-blue-500 p-3 md:h-36 text-white text-2xl'>
          <Link href={'/'} className='w-6 m-1 h-6 '>
            <ArrowLeftCircleIcon />
          </Link>
          <h1>Manager Log In</h1>
        </div>
        <ManagerLoginForm />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Sign In as Manager',
};
