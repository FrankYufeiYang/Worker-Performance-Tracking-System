import { workerClockIn } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';
import { auth } from '@/auth';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const session = await auth();
  const name = session?.user?.name || 'N/A';
  return (
    <main className=''>
      <div className=' flex flex-col items-center justify-center m-2 md:m-6 text-2xl md:text-4xl'>
        <p>Hello {name}.</p>
        <p>
          Click the button to sign in for{' '}
          <span className=' text-red-500'>{id}</span>!
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
