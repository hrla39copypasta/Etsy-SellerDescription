const db = require('./index');

const pictures = [
  'https://bit.ly/3l356cA',
  'https://bit.ly/3iqXxuO',
  'https://bit.ly/3l0pong',
  'https://bit.ly/3ipLE8n',
  'https://bit.ly/33ozWXh',
  'https://bit.ly/3jqOuLG',
  'https://bit.ly/3nbbbWo',
  'https://bit.ly/2SoZQ6M',
  'https://bit.ly/3iy13DP',
  'https://bit.ly/34ijEyy',
  'https://bit.ly/34nOiGA',
  'https://bit.ly/30tsFU8',
  'https://bit.ly/2GiWgc0',
  'https://bit.ly/33m9UnE',
  'https://bit.ly/2SjUcTN',
  'https://bit.ly/36qiN1d',
  'https://bit.ly/3nee0WQ',
  'https://bit.ly/34hEXjz',
  'https://bit.ly/2GpZr1n',
  'https://bit.ly/30p92ww',
  'https://bit.ly/36qThZO',
  'https://bit.ly/3nctXg9',
  'https://bit.ly/3lcl8kL',
  'https://bit.ly/2SnzPoF',
  'https://bit.ly/36qTg8c',
  'https://bit.ly/30r5V7g',
  'https://bit.ly/33pBvEh',
  'https://bit.ly/3jta4is',
  'https://bit.ly/36r6mlP',
  'https://bit.ly/30tcFla',
  'https://bit.ly/2EUQVXT',
  'https://bit.ly/3jqISkr',
  'https://bit.ly/3l8JOul',
  'https://bit.ly/3l84thZ',
  'https://bit.ly/3iqWgE2',
  'https://bit.ly/3cWeBb0',
  'https://bit.ly/2HSScQn',
  'https://bit.ly/34cX1LC',
  'https://bit.ly/2SirBy7',
  'https://bit.ly/34iYQHd',
  'https://bit.ly/33mYRKM',
  'https://bit.ly/30u7qSf',
  'https://bit.ly/3jr73zc',
  'https://bit.ly/2GbS0LG',
  'https://bit.ly/3cQNWw2',
  'https://bit.ly/2SrCwoZ',
  'https://bit.ly/2Gk6ZTH',
  'https://bit.ly/3cPOG4G',
  'https://bit.ly/3irGVD7',
  'https://bit.ly/3ncCTC7',
  'https://bit.ly/34m5EDM',
  'https://bit.ly/3itHX1o',
  'https://bit.ly/3iq23tl',
  'https://bit.ly/3cS6SdI',
  'https://bit.ly/3jt9a5y',
  'https://bit.ly/33qfZiR',
  'https://bit.ly/3im8xJX',
  'https://bit.ly/2HV0RBX',
  'https://bit.ly/3lcyInV',
  'https://bit.ly/34jxW1F',
  'https://bit.ly/2Ge3f6i',
  'https://bit.ly/3jreoia',
  'https://bit.ly/2F063mU',
  'https://bit.ly/3jqXXmf',
  'https://bit.ly/30v4tAP',
  'https://bit.ly/33m9v4z',
  'https://bit.ly/3jolkgg',
  'https://bit.ly/2Snynmd',
  'https://bit.ly/3cWduYS',
  'https://bit.ly/30pxxJR',
  'https://bit.ly/2Gx0LiS',
  'https://bit.ly/30sHqqa',
  'https://bit.ly/34o7RP0',
  'https://bit.ly/2Syne29',
  'https://bit.ly/2GbRfSQ',
  'https://bit.ly/33ozcS5',
  'https://bit.ly/3jqMAe0',
  'https://bit.ly/30u6A83',
  'https://bit.ly/3cQ9vNp',
  'https://bit.ly/3nfLnIy',
  'https://bit.ly/34n5dJx',
  'https://bit.ly/33osRWI',
  'https://bit.ly/3ireG7o',
  'https://bit.ly/2Sm86EI',
  'https://bit.ly/3imDKwp',
  'https://bit.ly/2SkDMuf',
  'https://bit.ly/3cTab4t',
  'https://bit.ly/30w97ia',
  'https://bit.ly/3cUiehx',
  'https://bit.ly/3cUidtZ',
  'https://bit.ly/33lhP4y',
  'https://bit.ly/36F8lDt',
  'https://bit.ly/34jwSLd',
  'https://bit.ly/33oYzTR',
  'https://bit.ly/2SipvOL',
  'https://bit.ly/2Ge23Qm',
  'https://bit.ly/3irEKiV',
  'https://bit.ly/2HR0p7E',
  'https://bit.ly/3l4Xzu3',
  'https://bit.ly/30srEvE',
];

// Seller info
const firstNames = ['John', 'Ponnappa', 'Mia', 'Peter', 'Natalie', 'Ang', 'Nguta', 'Tamzyn', 'Salome', 'Trevor', 'Tarryn', 'Eugenia', 'Andrew', 'Verona', 'Jane', 'Maureen', 'Desiree', 'Daly', 'Hayman', 'Ruveni'];
const lastNames = ['Stone', 'Priya', 'Wong', 'Stanbridge', 'Lee-Walsh', 'Li', 'Ithya', 'French', 'Simoes', 'Virtue', 'Campbell-Gillies', 'Anders', 'Kazantzis', 'Blair', 'Meldrum', 'Smith', 'Burch', 'Harry', 'Andrews', 'Ellawala'];

const createSeller = () => {
  const seller = {};
  seller.firstName = `${firstNames[Math.floor(Math.random() * Math.floor(firstNames.length))]}`;

  seller.lastName = `${lastNames[Math.floor(Math.random() * Math.floor(lastNames.length))]}`;

  seller.image = `${pictures[Math.floor(Math.random() * Math.floor(pictures.length))]}`;

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

    store.image = `${pictures[Math.floor(Math.random() * Math.floor(pictures.length))]}`;
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

  product.image = `${pictures[Math.floor(Math.random() * Math.floor(pictures.length))]}`;

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
