
import { workerClockIn } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';
import { auth } from '@/auth';
import { useFormState } from 'react-dom';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const session = await auth();
  const name = session?.user?.name || 'N/A';
  console.log(session);
  return (
    <main>
      <div className=' flex flex-col items-center justify-center h-screen m-2 md:m-6 text-2xl md:text-4xl'>
        <p>Hello {name}.</p>
        <p>
          Are you sure you want to check in at{' '}
          <span className=' text-red-500'>{id}</span>?
        </p>
        <form action={workerClockIn}>
          <input type='hidden' name='name' value={name} />
          <input type='hidden' name='location' value={id} />
          <Button className='m-4 h-20 text-xl'>Confirm </Button>
        </form>
      </div>
    </main>
  );
}
