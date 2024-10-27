import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Example: Create a new record with all fields
  const newRecord = await prisma.inventory.create({
    data: {
      name: 'New Item',
      category: 'Office Supplies',
      room: 'Storage Room A',
      quantity: 10,
      supply_level: 'High',
    },
  });
  console.log('New Record:', newRecord);

  // Example: Retrieve all records
  const allItems = await prisma.inventory.findMany();
  console.log('All Inventory Items:', allItems);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
