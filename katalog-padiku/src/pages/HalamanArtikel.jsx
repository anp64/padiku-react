import { useState, useEffect } from 'react';
import FormArtikel from '../components/FormArtikel';
import DaftarArtikel from '../components/DaftarArtikel';

const API_URL = 'https://6ae743f856b2ee1e54404173.mockapi.io/artikel';

function HalamanArtikel() {

    const [dataArtikel, setDataArtikel] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const ambilData = () =>{
        setLoading(true);
        setError(null);

        fetch(API_URL)
        .then((response) => {
            if (!response.ok) throw new Error('Gagal mengambil data');
            return response.json();
        })
        .then((data) => {
            setDataArtikel(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    };

    useEffect(() => {
        ambilData();
    }, []);

    const tambahArtikel = (artikelBaru) => {
        fetch(API_URL, {
            method: 'POST',
            headers: { 'content-type' : 'application/json' },
            body: JSON.stringify(artikelBaru)
        })
        .then((response) => {
            if (!response.ok) throw new Error('gagal menambah data');
            return response.json();
        })
        .then(() => {
            ambilData();
        })
        .catch((error) => alert(error.message));
     };


    return (
        <main className='container my-5'>
            <div className="page-title text-center mb-5">
                <h1>Daftar Artikel</h1>
                <p>kumpulan artikel seputar padi</p>
            </div>

            {loading && (
                <div className="text-center my-5">
                <h1>Daftar Artikel</h1>
                <p>kumpulan artikel seputar padi</p>
                </div>
            )}

            {error && !loading && (
                <div className="alert alert-danger text-center">
                    <h5>waduh error tuh</h5>
                    <p>{error}</p>
                    <button className="btn btn-outline-danger mt-2" onClick={ambilData}>Coba Lagi</button>
                    </div>
            )}

            {!loading && !error && (
                <>
                <FormArtikel onTambah={tambahArtikel} />
                <DaftarArtikel dataArtikel={dataArtikel} onRefresh={ambilData} />
                </>
            )}
        </main>
    );
}

export default HalamanArtikel;