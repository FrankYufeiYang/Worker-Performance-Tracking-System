import ManagerLoginForm from '@/app/ui/login/manager-login-form';
import { Metadata } from 'next';

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center md:h-screen'>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36 text-white text-2xl'>Manager Log In</div>
        <ManagerLoginForm />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Sign In to Clock In',
};
