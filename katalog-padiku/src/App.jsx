import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Beranda from './pages/Beranda.jsx';
import Kategori from './pages/Kategori.jsx';
import HalamanArtikel from './pages/HalamanArtikel.jsx';
import Tentang from './pages/Tentang.jsx';
import Kontak from './pages/Kontak.jsx';
import Login from './pages/Login.jsx';



function App() {

  const [daftarArtikel, setDaftarArtikel] = useState([ 
    {id: 1, judul: "Panduan menanam padi dari persiapan lahan, pemilihan benih, sampai perawatan harian", kategori: "Budidaya"},
    {id: 2, judul: "Cara mengenali dan mengendalikan hama serta penyakit padi dengan aman", kategori: "Hama dan Penyakit"},
    {id: 3, judul: "Proses setelah panen: perontokan, pengeringan, penggilingan, sampai jadi beras", kategori: "pasca panen"}, 
    {id: 4, judul: "Manfaatkan sekam, dedak, dan menir jadi barang berguna seperti arang sekam", kategori: "olah sekam"},  
  ]);

  const tambahArtikel = (artikelBaru) => {
    const idBaru = daftarArtikel.length + 1;
    setDaftarArtikel([...daftarArtikel, { id: idBaru, ...artikelBaru }]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/artikel" element={
          <HalamanArtikel dataArtikel={daftarArtikel} onTambah={tambahArtikel} />
        } />
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