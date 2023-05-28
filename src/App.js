import { useEffect } from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
import Cart from './container/Cart';

import { useDispatch } from "react-redux";
import { setProducts } from "./redux/actions/productActions";

function App() {
  const dispatch = useDispatch();
    
  const fetchProducts = async() => {
      const response = await axios.get('https://fakestoreapi.com/products')
      .catch((err) => {
          console.log(err);
      });
      dispatch(setProducts(response.data));
  }

  useEffect(() => {
      fetchProducts();
  }, [])

  return (
    <div className="App">
        <Router>
          <Header />
          <div style={{marginTop:"6rem"}}>
            <Routes>
              <Route path = "/" exact element={<ProductListing />} />
              <Route path = "/product/:productId" exact element={<ProductDetail />} />
              <Route path = "/cart" exact element={<Cart />} />
              <Route>404 Not Found</Route>
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
