// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import CustomerList from './components/CustomerList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ProductList} />
        <Route path="/customers" component={CustomerList} />
        {/* Add routes for orders, payments, etc. */}
      </Switch>
    </Router>
  );
};

export default App;