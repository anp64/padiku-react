import KartuArtikel from './KartuArtikel';

function DaftarArtikel({dataArtikel, onRefresh}) {
  return (
    <div className="row g-4">
      
      {dataArtikel.length === 0 ? (
        
        <div className="col-12 text-center my-5">
          <h5 className="text-muted">Belum ada data artikel padi.</h5>
          <button className="btn btn-success" onClick={onRefresh}>muat ulang data</button>
        </div>
      ) : (
        
        dataArtikel.map((artikel) => (
          <KartuArtikel key={artikel.id} artikel={artikel} />
        ))
      )}
    </div>
  );
}


export default DaftarArtikel;