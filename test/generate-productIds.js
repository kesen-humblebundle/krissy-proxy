const faker = require('faker');
const fs = require('fs');
const {writeData} = require('../database/writeToCSV.js');

/* 
* @function generateGeneralDiscountsGenerates
*
* @typedef {object} Data
* @property {number} publisher_id
*
* @returns {Data} one fake data record
*/


/* Generates 1 product record */
const generateProductIds = () => {

  let record = {
    product_id: faker.random.number({min: 9000000, max: 10000000}) //1-5M publisherId's
  };

  return record;

};

module.exports.generateProductIds = generateProductIds;

//write products data to csv if ran from command line
process.argv[2] === '--generate' ? writeData(2e3, generateProductIds, 'productsIds', false) : null;


