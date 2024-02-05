import EditWorkForm from '@/app/ui/dashboard/workers/edit-form';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import { fetchWorkerById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const worker = await fetchWorkerById(id);
    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Workers', href: '/dashboard/workers' },
            {
              label: 'Edit Worker',
              href: `/dashboard/workers/${id}/edit`,
              active: true,
            },
          ]}
        />
        <EditWorkForm worker={worker} />
      </main>
    );
}
