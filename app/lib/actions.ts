'use server';
import { log } from 'console';

import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const QRCode = require('qrcode');
export async function workerSignIn(
  prevState: string | undefined,
  formData: FormData
) {
  //hard coded token, print out on QR code page
  if (formData.get('token') === 'lab1') {
    formData.append('role', 'worker');
    try {
      await signIn('credentials', formData);
    } catch (error) {
      log(error);
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }
}

export async function managerSignIn(
  prevState: string | undefined,
  formData: FormData
) {
  formData.append('role', 'manager');
  try {
    await signIn('credentials', formData);
  } catch (error) {
    log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const WorkerSignInFormSchema = z.object({
  name: z.string(),
  location: z.string(),
});

export async function workerClockIn(formData: FormData) {
  const { name, location } = WorkerSignInFormSchema.parse({
    name: formData.get('name'),
    location: formData.get('location'),
  });
  try {
    await sql`
      INSERT INTO reports (name, location)
      VALUES ( ${name}, ${location})
    `;
  } catch (error) {
    console.log(error);

    return {
      message: 'Database Error: Failed to Create Report.',
    };
  }
  // potentially close the current page
}

const CreateLocationFormSchema = z.object({
  location: z.string(),
});
export async function createLocation(formData: FormData) {
  const { location } = CreateLocationFormSchema.parse({
    location: formData.get('location'),
  });
  try {
    await sql`INSERT INTO locations (name) VALUES (${location})`;
  } catch (e) {
    return {
      message: 'Database Error: Failed to Create Location.',
    };
  }
  revalidatePath('/dashboard/locations');
  redirect('/dashboard/locations');
}

export async function deleteLocation(name: string) {
  try {
    await sql`DELETE FROM locations WHERE name = ${name}`;
    revalidatePath('/dashboard/locations');
    return { message: `Deleted Location: ${name}` };
  } catch (error) {
    return { message: `Database Error: Failed to Delete Location: ${name}` };
  }
}

const CreateWorkerFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});
export async function createWorker(formData: FormData) {
  const { name, email } = CreateWorkerFormSchema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
  });
  try {
    await sql`INSERT INTO workers (name,email) VALUES (${name}, ${email})`;
  } catch (e) {
    return {
      message: 'Database Error: Failed to Create Worker.',
    };
  }
  revalidatePath('/dashboard/workers');
  redirect('/dashboard/workers');
}

export async function updateWorker(id: string, formData: FormData) {
  const validatedFields = CreateWorkerFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Worker.',
    };
  }

  const { name, email } = validatedFields.data;
  try {
    await sql`
      UPDATE workers
      SET name = ${name}, email = ${email}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Worker.' };
  }

  revalidatePath('/dashboard/workers');
  redirect('/dashboard/workers');
}

export async function deleteWorker(id: string) {
  try {
    await sql`DELETE FROM workers WHERE id = ${id}`;
    revalidatePath('/dashboard/workers');
    return { message: `Deleted Worker: ${id}` };
  } catch (error) {
    return { message: `Database Error: Failed to Delete Worker: ${id}` };
  }
}

// export async function updateLocation(formData:FormData) {

// }

