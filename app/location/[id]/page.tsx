import { workerClockIn } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';
import { auth } from '@/auth';
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const session = await auth();
  const name = session?.user?.name || 'N/A';
  console.log(session);
  

  return (
    <main>
      <div className=' flex flex-col items-center justify-center h-screen	'>
        Hello {name}
        <label>Are you sure you want to check in at {id}?</label>
        <form action={workerClockIn}>
          <input type='hidden' name='name' value={name} />
          <input type='hidden' name='location' value={id} />
          <Button>Confirm </Button>
        </form>
      </div>
    </main>
  );
}
