import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Products from './components/Products';
import Suppliers from './components/Suppliers';
import Orders from './components/Orders';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/suppliers">
            <Suppliers />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
