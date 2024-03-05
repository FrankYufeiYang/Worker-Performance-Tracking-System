'use client';
import { Report } from '@/app/lib/definitions';
import { LinearProgress } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

export default async function ReportsTable({ reports }: { reports: Report[] }) {
  const columns: GridColDef[] = [
    { field: 'location', headerName: 'Location', flex: 1 },
    {
      field: 'date',
      headerName: 'Time',
      flex: 1,
      valueGetter(params) {
        return params.value.toLocaleString();
      },
    },
    { field: 'name', headerName: 'Worker', flex: 0.6 },
  ];
  return (
    <div className='mt-4 md:mt-20 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <div className='md:hidden'>
            {reports?.map((report) => (
              <div
                key={report.date.toISOString() + report.name + report.location}
                className='mb-2 w-full rounded-md bg-white p-4'
              >
                <div>
                  <div className='mb-1 flex items-center'>
                    <p>{report.location}</p>
                  </div>
                  <p className='mb-1 text-gray-600'>{report.date.toLocaleString()}</p>
                  <p className='text-gray-600'>
                    {report.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='hidden min-w-full text-gray-900 md:table'>
            <DataGrid
              rows={reports}
              columns={columns}
              slots={{ toolbar: GridToolbar, loadingOverlay: LinearProgress }}
              slotProps={{
                toolbar: { printOptions: { disableToolbarButton: true } },
              }}
              getRowId={(row) => row.date + row.name + row.location}
            ></DataGrid>
          </div>
        </div>
      </div>
    </div>
  );
}
