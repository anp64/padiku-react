import { Link } from 'react-router-dom'; 

function Kontak() {
  return (
    <main className="container my-5">
      <div className="page-title text-center mb-5">
        <h1>Kontak</h1>
        <p>Ada pertanyaan, saran, atau mau kerja sama? Hubungi kami.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card card-padiku shadow-sm">
            <div className="card-body p-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Email:</strong> email@padiku.com</li>
                <li className="list-group-item"><strong>Instagram:</strong> @padiku</li>
                <li className="list-group-item"><strong>WhatsApp:</strong> +62 xxx-xxxx-xxxx</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Kontak;