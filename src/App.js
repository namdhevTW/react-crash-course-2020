import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Product from './Views/Product';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <Header></Header>
        <div className='p-3 bg-slate-300'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
