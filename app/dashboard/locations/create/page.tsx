import Form from '@/app/ui/dashboard/locations/create-form';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Locations', href: '/dashboard/locations' },
          {
            label: 'Create Location',
            href: '/dashboard/locations/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
