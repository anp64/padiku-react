import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Beranda from './pages/Beranda.jsx';
import Kategori from './pages/Kategori.jsx';
import HalamanArtikel from './pages/HalamanArtikel.jsx';
import Tentang from './pages/Tentang.jsx';
import Kontak from './pages/Kontak.jsx';
import Login from './pages/Login.jsx';



function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/artikel" element={<HalamanArtikel />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <footer className="site-footer mt-5">
        <p>&copy; 2026 Padiku</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;