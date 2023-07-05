import logo from './logo.svg';
import './App.css';
import './index.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductCard from './components/ProductCard/ProductCard';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ModalPopup from './components/ModalPopup/ModalPopup';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBox from './components/SearchBox/SearchBox';
import KeydownEvent from './components/KeydownEvent/KeydownEvent';


function App() {
  return (
    <div className="index">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/product-card" element={<ProductCard />} />
          <Route path="/profile-card" element={<ProfileCard />} />
          <Route path="/modal-popup" element={<ModalPopup />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/search-box" element={<SearchBox />} />
          <Route path="/keydown-event" element={<KeydownEvent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
