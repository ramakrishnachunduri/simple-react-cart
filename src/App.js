import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cart } from './Cart';
import { AppLayout } from './Components/AppLayout';
import { NavigationBar } from './Components/Navigationbar';
import { ProductList } from './ProductList';

function App() {
  return (
    <React.Fragment>
       <BrowserRouter>
          <AppLayout>
          <NavigationBar/>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </AppLayout>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
