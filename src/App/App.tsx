import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Shops from './views/Shops'
import Shop from './views/Shop'
import ProductDisplay from './views/ProductDisplay'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/shops/:shop/:product">
            <ProductDisplay />
          </Route>
          <Route path="/shops/:shop">
            <Shop />
          </Route>
          <Route path="/shops">
            <Shops />
          </Route>
          <Route path="/">
            <Link to="/shops">
              Iniciar
            </Link>
          </Route>
        </Switch>
    </Router>
  );
}