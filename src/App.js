import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Cart } from './Cart';
import { AppLayout } from './Components/AppLayout';
import { NavigationBar } from './Components/Navigationbar';
import { ProductList } from './ProductList';

function App() {
  return (
    <React.Fragment>
       <Router>
          <AppLayout>
          <NavigationBar />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/" component={Cart} />
            </Switch>
          </AppLayout>
        </Router>
    </React.Fragment>
  );
}

//store.subscribe(() => {console.log('test'); console.log(store.getState()); })

export default App;
