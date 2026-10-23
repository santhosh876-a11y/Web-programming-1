import React from 'react';
import { Link } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';

const HeroSection = () => {
  const { totals } = useBuilder();

  return (
    <section className="position-relative py-5 overflow-hidden border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #0a0d14 0%, #101622 100%)' }}>
      {/* Decorative ambient neon background glow */}
      <div
        className="position-absolute top-0 start-50 translate-middle-x"
        style={{
          width: '700px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container position-relative py-4">
        <div className="row align-items-center g-5">
          {/* Hero Left Content */}
          <div className="col-lg-7 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-dark border border-info border-opacity-50 text-info small mb-3">
              <span className="spinner-grow spinner-grow-sm text-info" role="status"></span>
              <span>Next-Gen Gaming PC Configurator</span>
            </div>

            <h1 className="display-4 fw-black text-white mb-3">
              BUILD YOUR DREAM <br />
              <span className="text-gradient">GAMING PC</span>
            </h1>

            <p className="lead text-secondary mb-4 col-lg-11">
              Select premium hardware components, verify instant socket & power compatibility, track your budget in Indian Rupees (₹), and save your ultimate build.
            </p>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
              <Link to="/builder" className="btn btn-neon btn-lg px-4 py-3 d-flex align-items-center gap-2">
                <i className="bi bi-cpu-fill"></i>
                <span>Start Building Rig</span>
              </Link>
              <a href="#preset-builds" className="btn btn-outline-neon btn-lg px-4 py-3 d-flex align-items-center gap-2">
                <i className="bi bi-collection-play"></i>
                <span>View Prebuilt PCs</span>
              </a>
            </div>

            {/* Feature highlights pills */}
            <div className="row g-3 pt-2 text-start">
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2 text-light">
                  <i className="bi bi-shield-check text-info fs-5"></i>
                  <div>
                    <div className="fw-bold small">Smart Compatibility</div>
                    <div className="text-secondary" style={{ fontSize: '0.75rem' }}>Sockets & wattage verified</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2 text-light">
                  <i className="bi bi-currency-rupee text-info fs-5"></i>
                  <div>
                    <div className="fw-bold small">Live Price Tracker</div>
                    <div className="text-secondary" style={{ fontSize: '0.75rem' }}>Instant INR calculations</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2 text-light">
                  <i className="bi bi-hdd-network text-info fs-5"></i>
                  <div>
                    <div className="fw-bold small">Offline Persistence</div>
                    <div className="text-secondary" style={{ fontSize: '0.75rem' }}>Saves to LocalStorage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Graphic */}
          <div className="col-lg-5">
            <div className="gaming-card p-4 position-relative border-secondary shadow-lg">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-dark border border-secondary text-info">
                  <i className="bi bi-sliders me-1"></i> Quick Configuration
                </span>
                <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50">
                  <i className="bi bi-check-circle me-1"></i> Interactive Demo
                </span>
              </div>

              {/* Graphic Mock Rig Preview */}
              <div className="rounded-3 p-3 mb-3 bg-black border border-secondary border-opacity-50 text-center">
                <img
                  src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80"
                  alt="Gaming PC Rig"
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: '180px', objectFit: 'cover', width: '100%' }}
                />
                <h6 className="text-white fw-bold mb-1">Custom Battle Station</h6>
                <p className="text-secondary small mb-2">High FPS 1080p / 1440p / 4K Esports Ready</p>
                <div className="d-flex justify-content-around text-center border-top border-secondary border-opacity-25 pt-2">
                  <div>
                    <small className="text-secondary d-block">Categories</small>
                    <span className="fw-bold text-white">8 Parts</span>
                  </div>
                  <div className="border-start border-secondary border-opacity-25"></div>
                  <div>
                    <small className="text-secondary d-block">Active Selection</small>
                    <span className="fw-bold text-neon">{totals.count} / 8</span>
                  </div>
                  <div className="border-start border-secondary border-opacity-25"></div>
                  <div>
                    <small className="text-secondary d-block">Storage</small>
                    <span className="fw-bold text-success">Saved Locally</span>
                  </div>
                </div>
              </div>

              <Link to="/builder" className="btn btn-outline-light w-100 btn-sm py-2">
                Configure This PC Now <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
