import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <main className="container">
      <div className="card login-card shadow-sm mx-auto mt-5" style={{maxWidth: '400px'}}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Login ke Padiku</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="nama@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Masukkan password" />
            </div>
            <button type="submit" className="btn btn-padiku w-100">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
}
export default Login;
