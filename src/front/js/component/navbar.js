import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: '#6793AE', height: '120px'}}>
      <div className="container-fluid">
        <Link to={''} className="navbar-brand">
          <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
        </Link>

        <div className="navbar navbar-expand-lg ms-auto">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav me-auto">
                <Link to={''} className="nav-link active" style={{ color: 'white' }}>HOME</Link>
                <Link to={''} className="nav-link active" style={{ color: 'white' }}>CONTRATAR</Link>
                <Link to={''} className="nav-link active" style={{ color: 'white' }}>INSCRIBIRSE</Link>
              </div>
              <div className="d-flex ms-auto">
                <button type="button" className="btn rounded-pill me-2" style={{ backgroundColor: '#70879C', borderColor: '#70879C', color: 'white' }}>LOGIN</button>
                <button type="button" className="btn rounded-pill" style={{ backgroundColor: 'white', borderColor: 'white', color: '#70879C' }}>REGISTRARSE</button>
              </div>
            </div>
          </div>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" style={{ color: '#6793AE', marginTop: '115px' }} aria-current="page" to="/">Sobre nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{ color: '#6793AE', marginTop: '20px' }} aria-current="page" to="/">Contáctanos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{ color: '#6793AE', marginTop: '20px' }} aria-current="page" to="/">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};