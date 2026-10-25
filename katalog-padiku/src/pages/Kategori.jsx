import { Link } from 'react-router-dom'; 

function Kategori() {
  return (
    <main className="container my-5">
      <div className="page-title text-center mb-5">
        <h1>Jelajahi Kategori</h1>
        <p>Pilih topik yang mau kamu pelajari seputar padi.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card card-padiku h-100 shadow-sm">
            <div className="card-body p-4">
              <h4>Budidaya</h4>
              <p className="text-muted">Panduan menanam padi dari persiapan lahan, pemilihan benih, sampai perawatan harian.</p>
              
              <Link to="/artikel" className="btn btn-padiku btn-sm">Lihat Artikel →</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card-padiku h-100 shadow-sm">
            <div className="card-body p-4">
              <h4>Hama & Penyakit</h4>
              <p className="text-muted">Cara mengenali dan mengendalikan hama serta penyakit padi dengan aman.</p>
              <Link to="/artikel" className="btn btn-padiku btn-sm">Lihat Artikel →</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card-padiku h-100 shadow-sm">
            <div className="card-body p-4">
              <h4>Pascapanen</h4>
              <p className="text-muted">Proses setelah panen: perontokan, pengeringan, penggilingan, sampai jadi beras.</p>
              <Link to="/artikel" className="btn btn-padiku btn-sm">Lihat Artikel →</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card-padiku h-100 shadow-sm">
            <div className="card-body p-4">
              <h4>Olahan Sekam</h4>
              <p className="text-muted">Manfaatkan sekam, dedak, dan menir jadi barang berguna seperti arang sekam.</p>
              <Link to="/artikel" className="btn btn-padiku btn-sm">Lihat Artikel →</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Kategori;