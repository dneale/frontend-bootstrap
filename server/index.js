// index.js
var faker = require('faker');

module.exports = () => {
  const data = { products: [] };

  const numberOfRecords = 152000;
  console.log(`generating ${numberOfRecords} records`);

  faker.seed(123);

  for (let i = 0; i < numberOfRecords; i++) {
    data.products.push({
      id: i,
      name: `${faker.commerce.productName()}`,
      stock: `${faker.random.number()}`,
      department: `${faker.commerce.department()}`,
      warehouse: `${faker.address.state()}`,
      lastModified: `${faker.date.past()}`,
      comment: `${faker.lorem.sentences()}`
    })
  }
  return data
};