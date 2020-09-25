const db = require('./index');

// Seller info
const firstNames = ['John', 'Ponnappa', 'Mia', 'Peter', 'Natalie', 'Ang', 'Nguta', 'Tamzyn', 'Salome', 'Trevor', 'Tarryn', 'Eugenia', 'Andrew', 'Verona', 'Jane', 'Maureen', 'Desiree', 'Daly', 'Hayman', 'Ruveni'];
const lastNames = ['Stone', 'Priya', 'Wong', 'Stanbridge', 'Lee-Walsh', 'Li', 'Ithya', 'French', 'Simoes', 'Virtue', 'Campbell-Gillies', 'Anders', 'Kazantzis', 'Blair', 'Meldrum', 'Smith', 'Burch', 'Harry', 'Andrews', 'Ellawala'];

const createSeller = () => {
  const seller = {};
  seller.firstName = `${firstNames[Math.floor(Math.random() * Math.floor(firstNames.length))]}`;

  seller.lastName = `${lastNames[Math.floor(Math.random() * Math.floor(lastNames.length))]}`;

  seller.image = 'https://picsum.photos/200';

  return seller;
};

// Store Info
const storeNames = ['DogWhisperer', 'TheBigCheese', 'A Store Named Store', 'Beautiful Things', 'The High Ground', 'Chewie Store', 'LightSavers', 'Absolute Sith Deals', 'Krabbys Store', 'Rubber Duck Galleria'];

const basedIn = ['United States', 'Canada', 'Mexico', 'Bahamas', 'Zanzibar'];

const createStores = () => {
  const stores = [];

  for (let i = 0; i < 10; i += 1) {
    const store = {};

    store.name = storeNames[i];

    store.sales = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
    store.year = Math.floor(Math.random() * (2020 - 2010 + 1)) + 2010;
    store.basedIn = `${basedIn[Math.floor(Math.random() * Math.floor(basedIn.length))]}`;

    store.image = 'https://picsum.photos/200';
    stores.push(store);
  }
  return stores;
};

// Product Info
const productAdjectives = ['Custom', 'Digital', 'Funny', 'Gift for Dad', 'Gift for Mom', 'Gift for Sister', 'Gift for Brother'];

const productTitle = ['Dog Renaissance Portrait', 'Dog King or Queen Portrait', 'Cat Renaissance Portrait', 'Royal Pet Portrait', 'Human Portrait', 'Painting', 'Illustration', 'Sticker', 'Fake Tree Branch'];

const createProduct = () => {
  const product = {};

  product.name = `${productAdjectives[Math.floor(Math.random() * Math.floor(productAdjectives.length))]} ${productTitle[Math.floor(Math.random() * Math.floor(productTitle.length))]}`;

  product.price = parseFloat(Math.ceil(Math.random() * Math.ceil(99.99)));

  product.freeShipping = Math.floor(Math.random() * (1 - 0 + 1));

  product.image = 'https://picsum.photos/200';

  return product;
};

const insertMockData = () => {
  const storeList = createStores();
  for (let i = 1; i <= 10; i += 1) {
    const currSeller = createSeller();

    // insert into sellers table
    const sellerQuery = `INSERT INTO sellers (first_name, last_name, seller_image, store_id) VALUES ("${currSeller.firstName}", "${currSeller.lastName}", "${currSeller.image}", ${i})`;
    db.query(sellerQuery, (err) => {
      if (err) console.error(err);
      else console.log('CREATED SELLER');
    });

    // insert into store table
    const storeQuery = `INSERT INTO stores (store_name, sales, year_started, based_in, store_image) VALUES ("${storeList[i - 1].name}", ${storeList[i - 1].sales}, ${storeList[i - 1].year}, "${storeList[i - 1].basedIn}", "${storeList[i - 1].image}")`;
    db.query(storeQuery, (err) => {
      if (err) console.error(err);
      else console.log('CREATED STORE');
    });
  }

  // Insert into products table
  for (let i = 0; i < 10; i += 1) {
    // populate 10 products to a store by id
    for (let j = 0; j < 10; j += 1) {
      const newProduct = createProduct();
      const productQuery = `INSERT INTO products (product_name, product_price, is_free_shipping, product_image, store_id) VALUES ("${newProduct.name}", ${newProduct.price}, ${newProduct.freeShipping}, "${newProduct.image}", ${i + 1})`;
      db.query(productQuery, (err) => {
        if (err) console.error(err);
        else console.log(`CREATED PRODUCT FOR STORE ID ${i}`);
      });
    }
  }
};

// run this file once
insertMockData();

db.end();
