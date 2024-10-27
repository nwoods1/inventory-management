// pages/api/addInventory.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { name, category, room, quantity, supply_level } = req.body;

    try {
      const newItem = await prisma.inventory.create({
        data: {
          name,
          category,
          room,
          quantity: parseInt(quantity),
          supply_level,
        },
      });

      res.status(201).json(newItem);
    } catch (error) {
      console.error("Error creating new item:", error);
      res.status(500).json({ error: "Failed to create item" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
