// // Initialize the Prisma Client
// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'],
// });
// // Fetch data function
// async function fetchData() {
//   try {
//     // Fetch all users from the database using Prisma
//     const users = await prisma.user.findMany();
//     console.log("This is users : ", users);
//     return users;
//   } catch (error) {
//     console.error('Error fetching data: ', error);
//     throw error;
//   } finally {
//     await prisma.$disconnect()
//   };
// };

// // If this file is run directly, execute the test
// // if (require.main === module) {
// //     (async () => {
// //         try {
// //             const users = await fetchData();
// //             console.log('Fetched users:', users);
// //           } catch (error) {
// //               console.error('Error:', error);
// //             }
// //           })();
// //         }
        
//         // Export the fetchData function for use in other modules
// module.exports = fetchData;