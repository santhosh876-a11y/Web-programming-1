import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';
import { formatINR } from '../utils/priceCalculator';

const Navbar = () => {
  const { totals } = useBuilder();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-gaming sticky-top py-2">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div
            className="d-flex align-items-center justify-content-center rounded-3 p-2"
            style={{
              background: 'linear-gradient(135deg, #00d2ff 0%, #0077b6 100%)',
              boxShadow: '0 0 12px rgba(0, 210, 255, 0.4)'
            }}
          >
            <i className="bi bi-cpu-fill text-white fs-5"></i>
          </div>
          <div>
            <span className="brand-font fw-bold fs-4 text-white">RIG</span>
            <span className="brand-font fw-bold fs-4 text-neon">FORGE</span>
            <span className="d-block small text-secondary" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
              GAMING PC BUILDER
            </span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#gamingNavbar"
          aria-controls="gamingNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="gamingNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3 gap-1">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">
                <i className="bi bi-house-door me-1"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/builder">
                <i className="bi bi-tools me-1"></i> PC Builder
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/saved">
                <i className="bi bi-bookmark-check me-1"></i> Saved Builds
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/compare">
                <i className="bi bi-arrow-left-right me-1"></i> Compare
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/summary">
                <i className="bi bi-file-earmark-text me-1"></i> Summary
              </NavLink>
            </li>
          </ul>

          {/* Quick Active Build Pill & Builder CTA */}
          <div className="d-flex align-items-center gap-3">
            <Link
              to="/builder"
              className="d-none d-sm-flex align-items-center gap-2 px-3 py-1 rounded-pill text-decoration-none border border-secondary"
              style={{ backgroundColor: '#161f30' }}
            >
              <i className="bi bi-cart3 text-neon"></i>
              <span className="small text-secondary">{totals.count} / 8 parts</span>
              <span className="badge bg-dark text-info border border-info border-opacity-25">
                {formatINR(totals.grandTotal)}
              </span>
            </Link>

            <Link to="/builder" className="btn btn-neon px-3 py-2 btn-sm d-flex align-items-center gap-2">
              <i className="bi bi-lightning-charge-fill"></i>
              <span>Start Building</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
