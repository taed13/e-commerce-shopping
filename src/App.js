import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductCard from './components/ProductCard/ProductCard';
import ProfileCard from './components/ProfileCard/ProfileCard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/product-card" element={<ProductCard />} />
          <Route path="/profile-card" element={<ProfileCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
