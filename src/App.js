import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
import Cart from './container/Cart';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <div style={{paddingTop:"6rem"}}>
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
