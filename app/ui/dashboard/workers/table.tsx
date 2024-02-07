import {
  DeleteWorkerButton,
  UpdateWorkerButton,
} from '@/app/ui/dashboard/locations/buttons';
import { fetchFilteredWorkers } from '@/app/lib/data';

export default async function WorkersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const workers = await fetchFilteredWorkers(query, currentPage);

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <div className='md:hidden'>
            {workers?.map((worker) => (
              <div
                key={worker.id}
                className='mb-2 w-full rounded-md bg-white p-4'
              >
                <div>
                  <div className='mb-2 flex items-center'>
                    <p>{worker.name}</p>
                  </div>
                  <p className='text-sm text-gray-500'>{worker.email}</p>
                </div>
                <div className='flex w-full items-center justify-between pt-4'>
                  <div className='flex justify-end gap-2'>
                    <UpdateWorkerButton id={worker.id} />
                    <DeleteWorkerButton id={worker.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className='hidden min-w-full text-gray-900 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Name
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Email (Unique Identifier)
                </th>
                <th scope='col' className='relative py-3 pl-6 pr-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {workers?.map((worker) => (
                <tr
                  key={worker.name}
                  className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <p>{worker.name}</p>
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {worker.email}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className='flex justify-end gap-3'>
                      <UpdateWorkerButton id={worker.id} />
                      <DeleteWorkerButton id={worker.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
