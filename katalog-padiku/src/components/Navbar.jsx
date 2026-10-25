import { Link } from 'react-router-dom';


function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark navbar-padiku">
        <div className="container">
            <Link className="navbar-brand" to="/">Padiku</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navMenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Beranda</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="kategori">Kategori</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="artikel">Artikel</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="tentang">Tentang</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="kontak">Kontak</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="login">Login</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;