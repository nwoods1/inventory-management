// app/api/inventory/route.ts

import { NextResponse } from 'next/server';
import { getInventory } from '@/lib/getInventory';
import prisma from '@/lib/prisma'; // Change this to default import

export async function GET() {
  console.log('Fetching inventory...'); // Log to see if the endpoint is hit
  try {
    const inventory = await getInventory();
    console.log('Inventory fetched:', inventory); // Log the inventory
    return NextResponse.json(inventory);
  } catch (error) {
    console.error('Error:', error); // Log the error
    return NextResponse.json({ error: 'Failed to fetch inventory data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const data = await request.json();

  try {
    const newItem = await prisma.inventory.create({
      data: {
        name: data.name,
        category: data.category,
        room: data.room,
        quantity: data.quantity,
        supply_level: data.supply_level,
      },
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Error adding inventory item:", error);
    return NextResponse.json({ error: "Failed to add item" }, { status: 500 });
  }
}
