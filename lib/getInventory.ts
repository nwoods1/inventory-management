// src/lib/getInventory.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getInventory() {
  try {
    const allItems = await prisma.inventory.findMany();
    return allItems;
  } catch (error) {
    console.error('Error fetching inventory:', error);
    throw new Error('Failed to fetch inventory data');
  } finally {
    await prisma.$disconnect(); // Close the connection after fetching
  }
}
