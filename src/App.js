import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Detail from './components/Detail/Detail';
import Cart from './components/Cart/Cart';
import Default from './components/Default/Default';
import { ProductProvider } from './components/ProductProvider';
import ModalProduct from './components/Modal/ModalProduct';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={ProductList} />
          <Route component={Default} />
        </Switch>
        <ModalProduct />
      </ProductProvider>
    </Router>
  );
}

export default App;
