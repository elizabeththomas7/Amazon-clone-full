import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./NavigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from './ProductList';
import { Provider } from "./Provider";
import reducer,{initialState} from './Reducer';
import Checkout from './Checkout';

function App() {
  return (
    <Provider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
    <div className="App">
    <Header />
          <Navigation />
        <Switch>
          <Route  path='/' exact component={Home}>
          </Route>
        <Route path="/products" exact component={Products}>
          </Route>
        <Route path="/checkout" exact component={Checkout}>
          </Route>
        </Switch>
        <Footer />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
