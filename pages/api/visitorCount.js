import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const existingVisitor = await prisma.visitor.findUnique({ where: { id: 1 } });

    if (existingVisitor) {
      await prisma.visitor.update({
        where: { id: 1 },
        data: { count: existingVisitor.count + 1 },
      });
    } else {
      await prisma.visitor.create({ data: { count: 1 } });
    }

    const updatedVisitor = await prisma.visitor.findUnique({ where: { id: 1 } });
    res.status(200).json({ count: updatedVisitor.count });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}