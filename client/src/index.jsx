/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import SellerModule from './components/sellerModule/App.jsx';
import StoreModule from './components/storeModule/App.jsx';

ReactDOM.render(<SellerModule />, document.getElementById('seller-info'));
ReactDOM.render(<StoreModule />, document.getElementById('store'));
