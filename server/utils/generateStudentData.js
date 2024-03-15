const faker = require('faker'); // Install faker library for generating random data

// Function to generate a random student data
function generateStudentData() {
  return {
    _id: { $oid: faker.datatype.uuid() },
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    category: faker.random.arrayElement(['UG', 'PG']),
    city: faker.address.city(),
    contact: { $numberDouble: faker.phone.phoneNumber('##########') },
    fatherContact: { $numberDouble: faker.phone.phoneNumber('##########') },
    image: faker.image.imageUrl(),
    roomNo: faker.random.alphaNumeric(3), // Random room number
    blockNo: faker.random.alphaNumeric(1), // Random block number
    status: faker.random.arrayElement(['Hostel', 'Day Scholar']),
    createdAt: { $date: { $numberLong: new Date().getTime() } },
    updatedAt: { $date: { $numberLong: new Date().getTime() } },
    __v: { $numberInt: 0 }
  };
}

// Generate 5 sample student data
const sampleData = Array.from({ length: 5 }, generateStudentData);

console.log(JSON.stringify(sampleData, null, 2));
