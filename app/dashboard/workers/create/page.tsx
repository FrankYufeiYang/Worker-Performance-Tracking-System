import CreateWorkerForm from '@/app/ui/dashboard/workers/create-form';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Workers', href: '/dashboard/workers' },
          {
            label: 'Create Workers',
            href: '/dashboard/workers/create',
            active: true,
          },
        ]}
      />
      <CreateWorkerForm />
    </main>
  );
}
