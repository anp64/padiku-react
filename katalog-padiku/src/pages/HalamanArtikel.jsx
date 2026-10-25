import FormArtikel from '../components/FormArtikel';
import DaftarArtikel from '../components/DaftarArtikel';

function HalamanArtikel({dataArtikel, onTambah}) {
    return (
        <main className='container my-5'>
            <div className="page-title text-center mb-5">
                <h1>Daftar Artikel</h1>
                <p>kumpulan artikel seputar padi</p>
            </div>

            <FormArtikel onTambah={onTambah} />
            <DaftarArtikel dataArtikel={dataArtikel}/>
        </main>
    );
}

export default HalamanArtikel;