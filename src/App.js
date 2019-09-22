import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Product from './components/Products';
import Cart from './components/Cart';

const App = () => {
  return (
    <HashRouter basename="/">
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
    </HashRouter>
  );
};

export default App;
