import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Product from './components/Products';
import Cart from './components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <Product />
                </React.Fragment>
              )}
            />
            <Route path="/checkout" render={() => <Cart />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
