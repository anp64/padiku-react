import {useState} from 'react';

function FormArtikel(props) {
    const [judul, setJudul] = useState("");
    const [kategori, setKategori] = useState("Budidaya");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (judul === "") return alert("judul tidak boleh kosong");

        props.onTambah({judul, kategori});
        setJudul("");
    };

    return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-body">
        <h4 className="text-success mb-3">Tambah Artikel Baru</h4>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Judul Artikel..." 
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select className="form-select" value={kategori} onChange={(e) => setKategori(e.target.value)}>
              <option value="Budidaya">Budidaya</option>
              <option value="Hama">Hama & Penyakit</option>
              <option value="Pascapanen">Pascapanen</option>
              <option value="Sekam">Olahan Sekam</option>
            </select>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">Tambah</button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default FormArtikel;




