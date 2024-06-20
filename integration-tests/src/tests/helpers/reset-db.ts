import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ResetDb = async () => {
  await prisma.$transaction([prisma.request.deleteMany()]);
};
