import { Link } from 'react-router-dom'; 

function Tentang() {
  return (
    <main className="container my-5">
      <div className="page-title text-center mb-5">
        <h1>Tentang Padiku</h1>
        <p>Kenali siapa kami dan apa yang kami lakukan.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card card-padiku shadow-sm">
            <div className="card-body p-4">
              <h4>Apa itu Padiku?</h4>
              <p>Padiku adalah website edukasi seputar padi...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Tentang;