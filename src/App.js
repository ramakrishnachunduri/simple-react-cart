import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartUI } from './UI/CartUI';
import { AppLayout } from './Components/AppLayout';
import { NavigationBar } from './Components/Navigationbar';
import { ProductListUI } from './UI/ProductListUI';

function App() {
  return (
    <React.Fragment>
       <BrowserRouter>
          <AppLayout className="p-0 m-10">
          <NavigationBar/>
            <Switch>
              <Route exact path="/" component={ProductListUI} />
              <Route exact path="/cart" component={CartUI} />
            </Switch>
          </AppLayout>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
