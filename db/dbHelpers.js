const db = require('./index');

const getSeller = (id, callback) => {
  const queryStr = `SELECT * FROM sellers WHERE id=${id}`;
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
