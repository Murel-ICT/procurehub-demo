// src/services/dataGenerator.js

import { Faker, en } from '@faker-js/faker';

// ✅ Create a manual instance with English locale
const faker = new Faker({ locale: [en] });

/**
 * Generates occupancy data for past + future days
 */
export function generateOccupancySeries(daysPast = 30, daysFuture = 30) {
  const now = new Date();
  const formatDate = (date) => date.toISOString().split('T')[0];

  const past = Array.from({ length: daysPast }).map((_, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() - (daysPast - i));

    return {
      date: formatDate(date),
      occupancy: faker.number.int({ min: 50, max: 100 }) // ✅ use number.int
    };
  });

  const future = Array.from({ length: daysFuture }).map((_, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() + i + 1);

    const month = date.getMonth() + 1;
    const base = faker.number.int({ min: 60, max: 90 }); 
    const seasonal = (month >= 3 && month <= 10) ? 10 : 0;

    return {
      date: formatDate(date),
      occupancy: Math.min(100, base + seasonal)
    };
  });

  return [...past, ...future];
}
