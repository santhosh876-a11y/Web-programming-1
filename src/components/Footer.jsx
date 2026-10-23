import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-top border-dark-subtle bg-black text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Brand & Project Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded p-1"
                style={{ background: '#00d2ff', width: '32px', height: '32px' }}
              >
                <i className="bi bi-cpu-fill text-dark fs-5"></i>
              </div>
              <h5 className="brand-font mb-0 text-white">
                RIG<span className="text-neon">FORGE</span>
              </h5>
            </div>
            <p className="text-secondary small mb-3">
              An interactive, responsive Gaming PC Builder application developed for the college Web Programming subject. 
              Configure custom hardware, check real-time compatibility, track budgets, and save builds.
            </p>
            <div className="d-flex gap-2">
              <span className="badge bg-dark border border-secondary text-info">React.js</span>
              <span className="badge bg-dark border border-secondary text-info">Bootstrap 5</span>
              <span className="badge bg-dark border border-secondary text-info">Vite</span>
              <span className="badge bg-dark border border-secondary text-info">LocalStorage</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-uppercase text-white fw-bold mb-3 small brand-font">Navigation</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" className="text-secondary text-decoration-none hover-text-neon">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/builder" className="text-secondary text-decoration-none hover-text-neon">
                  PC Builder
                </Link>
              </li>
              <li>
                <Link to="/saved" className="text-secondary text-decoration-none hover-text-neon">
                  Saved Builds
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-secondary text-decoration-none hover-text-neon">
                  Compare Builds
                </Link>
              </li>
              <li>
                <Link to="/summary" className="text-secondary text-decoration-none hover-text-neon">
                  Build Summary
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="text-uppercase text-white fw-bold mb-3 small brand-font">Key Modules</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0 text-secondary">
              <li><i className="bi bi-check2 text-info me-1"></i> Live Price Calculator (INR ₹)</li>
              <li><i className="bi bi-check2 text-info me-1"></i> Component Compatibility Checker</li>
              <li><i className="bi bi-check2 text-info me-1"></i> Interactive Budget Planner</li>
              <li><i className="bi bi-check2 text-info me-1"></i> Browser LocalStorage Persistence</li>
              <li><i className="bi bi-check2 text-info me-1"></i> Print-Friendly Build Invoice</li>
            </ul>
          </div>

          {/* College Project Disclaimer */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-uppercase text-white fw-bold mb-3 small brand-font">Academic Project</h6>
            <div className="p-3 rounded-3 border border-secondary bg-dark small text-secondary">
              <p className="mb-1 text-white fw-semibold">
                <i className="bi bi-mortarboard-fill text-info me-1"></i> Web Programming Final Project
              </p>
              <p className="mb-0">
                All component prices and specifications are sample data provided for academic simulation and demonstration purposes.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary border-opacity-25" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
          <p className="mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} RigForge Gaming PC Builder. Designed for Web Programming Course.
          </p>
          <p className="mb-0">
            Built with <i className="bi bi-heart-fill text-danger mx-1"></i> using React & Bootstrap 5
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
