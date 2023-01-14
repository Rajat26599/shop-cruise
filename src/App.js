import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{paddingTop:"6rem"}}>
        <Router>
          <Routes>
            <Route path = "/" exact element={<ProductListing />} />
            <Route path = "/product/:productId" exact element={<ProductDetail />} />
            <Route>404 Not Found</Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
