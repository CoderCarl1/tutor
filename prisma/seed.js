const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  // create a fake user
  await prisma.user.create({
    data: {
      firstname: 'carl',
      lastname: 'davidson',
      email: 'carl.davidson@hotmail.com',
      isAdmin: true,
      username: 'tester',
      // Hash for password - test1234
      passwordHash:
        '$2a$10$SXf5i2jqXNkTNY30Buyd2uDBk0UxgThgIAa20SUazDSNxbhi08yOC',
    },
  });
}

seed();
