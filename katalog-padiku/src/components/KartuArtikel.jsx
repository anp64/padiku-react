function KartuArtikel(props) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm border-0" style={{ borderLeft: '4px solid #2e7d32' }}>
        <div className="card-body">
          <span className="badge bg-success mb-2">{props.artikel.kategori}</span>
          <h5 className="card-title">{props.artikel.judul}</h5>
          <button className="btn btn-outline-success btn-sm mt-3">Baca Selengkapnya</button>
        </div>
      </div>
    </div>
  );
}
export default KartuArtikel;