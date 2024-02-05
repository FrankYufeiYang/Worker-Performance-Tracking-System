import { sql } from '@vercel/postgres';
import {
  Location,
  Worker
} from './definitions';
import { log } from 'console';

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredLocations(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const locations = await sql<Location>`
      SELECT
        name
      FROM locations
      WHERE
        name ILIKE ${`%${query}%`}
      ORDER BY name DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return locations.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch locations.');
  }
}

export async function fetchLocationsPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM locations
    WHERE
      name ILIKE ${`%${query}%`}
  `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of locations.');
  }
}

export async function fetchFilteredWorkers(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const workers = await sql<Worker>`
      SELECT
        *
      FROM workers
      WHERE
        name ILIKE ${`%${query}%`} OR
        email ILIKE ${`%${query}%`}
      ORDER BY name DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return workers.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch workers.');
  }
}

export async function fetchWorkersPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM workers
    WHERE
      name ILIKE ${`%${query}%`}
  `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of workers.');
  }
}

export async function fetchWorkerById(id: string) {
  try {
    const worker = await sql<Worker>`SELECT *
    FROM workers
    WHERE
      id = ${id}
  `;
    return worker.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of workers.');
  }
}

