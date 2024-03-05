import {
  UpdateLocation,
  LocationQRCodeButton,
} from '@/app/ui/dashboard/locations/buttons';
import DeleteLocationConfirmation from './deleteLocationConfirmation';
import { fetchFilteredLocations } from '@/app/lib/data';

export default async function LocationsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const locations = await fetchFilteredLocations(query, currentPage);

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <div className='md:hidden'>
            {locations?.map((location) => (
              <div
                key={location.name}
                className='mb-2 w-full rounded-md bg-white p-4'
              >
                {location.name}
                <div className='flex w-full items-center justify-between pt-4'>
                  <div className='flex justify-end gap-2'>
                    {/* <UpdateLocation name={location.name} /> */}
                    <LocationQRCodeButton name={location.name} />
                    <DeleteLocationConfirmation name={location.name} />
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

                <th scope='col' className='relative py-3 pl-6 pr-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {locations?.map((location) => (
                <tr
                  key={location.name}
                  className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <p>{location.name}</p>
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className='flex justify-end gap-3'>
                      {/* <UpdateLocation name={location.name} /> */}
                      <LocationQRCodeButton name={location.name} />
                      <DeleteLocationConfirmation name={location.name} />
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
