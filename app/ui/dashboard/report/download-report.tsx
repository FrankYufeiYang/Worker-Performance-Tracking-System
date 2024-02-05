'use client';
import { Report } from '@/app/lib/definitions';
import { Button } from '../../button';

export default function DownloadReport({
  reports,
}: {
  reports: Report[] | undefined;
}) {
  function downloadCSV() {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Name,Location,Time\n'; // CSV header

    reports?.forEach((report) => {
      const row = `${report.name},${report.location},${report.date.toLocaleString()}`;
      csvContent += row + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'reports.csv');
    document.body.appendChild(link); // Required for FF
    link.click(); // Trigger the download
  }

  return <Button onClick={downloadCSV}>Download CSV</Button>;
}
