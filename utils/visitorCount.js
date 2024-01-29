import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function incrementVisitorCount() {
  const existingVisitor = await prisma.visitor.findUnique({ where: { id: 1 } });

  if (existingVisitor) {
    // If a visitor record exists, update the count
    await prisma.visitor.update({
      where: { id: 1 },
      data: { count: existingVisitor.count + 1 },
    });
  } else {
    // If no visitor record exists, create one
    await prisma.visitor.create({ data: { count: 1 } });
  }
}
