import KartuArtikel from './KartuArtikel';

function DaftarArtikel(props) {
  return (
    <div className="row g-4">
      
      {props.dataArtikel.length === 0 ? (
        
        <div className="col-12 text-center my-5">
          <h5 className="text-muted">Belum ada data artikel padi.</h5>
        </div>
      ) : (
        
        props.dataArtikel.map((artikel) => (
          <KartuArtikel key={artikel.id} artikel={artikel} />
        ))
      )}
      
    </div>
  );
}


export default DaftarArtikel;