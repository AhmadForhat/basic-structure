import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  container
} from './style'

import ShopsGallery from './views/ShopsGallery'
import ProductsGallery from './views/ProductsGallery'
import ProductDisplay from './views/ProductDisplay'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/product/:store/:id">
          <div style={container}>
            <ProductDisplay />
          </div>
          </Route>
          <Route path="/productsGallery/:store">
            <div style={container}>
              <ProductsGallery />
            </div>
          </Route>
          <Route path="/">
            <div style={container}>
              <ShopsGallery />
            </div>
          </Route>
        </Switch>
    </Router>
  );
}