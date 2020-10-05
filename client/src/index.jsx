/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import SellerModule from './components/sellerModule/App.jsx';
import StoreModule from './components/storeModule/App.jsx';

const App = () => (
  <div>
    <SellerModule />
    <StoreModule />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
