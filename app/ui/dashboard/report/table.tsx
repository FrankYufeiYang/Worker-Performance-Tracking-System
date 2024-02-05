import { Report } from '@/app/lib/definitions';

export default async function ReportsTable({
  reports
}: {
  reports: Report[] | undefined;
}) {
  return (
    <div className=' mt-1 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <div className='md:hidden'>
            {reports?.map((report) => (
              <div
                key={report.date.toISOString() + report.name + report.location}
                className='mb-2 w-full rounded-md bg-white p-4'
              >
                <div>
                  <div className='mb-2 flex items-center'>
                    <p>{report.name}</p>
                  </div>
                  <p className='text-gray-500'>{report.location}</p>
                </div>
                <div className='flex w-full items-center justify-between pt-4'>
                  <div className='flex justify-end gap-2'>
                    <p className='text-gray-500'>
                      {report.date.toLocaleString()}
                    </p>
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
                  Location
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Time
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {reports?.map((report) => (
                <tr
                  key={
                    report.date.toISOString() + report.name + report.location
                  }
                  className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <p>{report.name}</p>
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    <p>{report.location}</p>
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    <p>{report.date.toLocaleString()}</p>
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
