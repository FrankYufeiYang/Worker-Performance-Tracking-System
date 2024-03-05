import { lusitana } from '@/app/ui/fonts';
import DateInterval from '../ui/dashboard/report/date-interval';
import ReportsTable from '../ui/dashboard/report/table';
import { fetchReportsByDateInterval } from '../lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    startDate?: string;
    endDate?: string;
  };
}) {
  const startDate = searchParams?.startDate || '';
  const endDate = searchParams?.endDate || '';
  const reports = await fetchReportsByDateInterval(startDate, endDate);

  return (
    <main>
      <div className='w-full'>
        <div className='flex w-full items-center justify-between'>
          <h1 className={`${lusitana.className} text-2xl`}>Report</h1>
        </div>
        <div>
          <DateInterval />
        </div>
        {reports && reports.length !== 0 ? (
          <div key={startDate + endDate}>
            {/* <div className='flex flex-row-reverse mt-8'>
              <DownloadReport reports={reports} />
            </div> */}
            <ReportsTable reports={reports} />
          </div>
        ) : (
          <div className='mt-4 md:mt-20 flow-root font-bold'> No Reports </div>
        )}
      </div>
    </main>
  );
}
