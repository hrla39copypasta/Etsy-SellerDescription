const db = require('./index');

const getSeller = (id, callback) => {
  const queryStr = `SELECT
  sellers.id,
  sellers.first_name,
  sellers.last_name,
  sellers.seller_image,
  stores.store_name,
  stores.sales,
  stores.year_started,
  stores.based_in,
  stores.store_image
  FROM sellers, stores
  WHERE
  sellers.id=${id}
  AND
  stores.id=sellers.store_id;`;
  db.query(queryStr, (err, result) => {
    if (err) callback(err);
    else callback(null, result);
  });
};

const getSellerProducts = (id, callback) => {
  const queryStr = `SELECT * FROM stores, products WHERE stores.id=products.store_id AND stores.id=${id}`;
  db.query(queryStr, (err, result) => {
    if (err) callback(err);
    else callback(null, result);
  });
};

module.exports = {
  getSeller,
  getSellerProducts,
};
