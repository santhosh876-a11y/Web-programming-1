import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { PRESET_BUILDS } from '../data/presetBuilds';
import { COMPONENTS_DATA } from '../data/componentsData';
import { useBuilder } from '../context/BuilderContext';
import { formatINR } from '../utils/priceCalculator';

const Home = () => {
  const { loadPreset } = useBuilder();
  const navigate = useNavigate();

  const handleLoadPreset = (presetId) => {
    loadPreset(presetId);
    navigate('/builder');
  };

  // Get top 4 popular components across categories
  const popularComponents = [
    COMPONENTS_DATA.cpu.find(c => c.popular) || COMPONENTS_DATA.cpu[0],
    COMPONENTS_DATA.gpu.find(c => c.popular) || COMPONENTS_DATA.gpu[0],
    COMPONENTS_DATA.motherboard.find(c => c.popular) || COMPONENTS_DATA.motherboard[0],
    COMPONENTS_DATA.ram.find(c => c.popular) || COMPONENTS_DATA.ram[0]
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <section className="py-5 border-bottom border-secondary border-opacity-25">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-dark border border-info border-opacity-50 text-info small mb-2">
              HOW IT WORKS
            </span>
            <h2 className="text-white fw-bold">Assemble Your Rig in 4 Simple Steps</h2>
            <p className="text-secondary small col-md-6 mx-auto">
              RigForge takes the guesswork out of building a gaming PC with real-time checks and live cost analysis.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="gaming-card p-4 text-center h-100">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3 bg-dark border border-info"
                  style={{ width: '64px', height: '64px' }}
                >
                  <i className="bi bi-cpu text-neon fs-4"></i>
                </div>
                <h5 className="text-white fw-bold mb-2">1. Choose Parts</h5>
                <p className="text-secondary small mb-0">
                  Select from 8 core hardware categories including CPU, GPU, RAM, Motherboard, and PSU.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="gaming-card p-4 text-center h-100">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3 bg-dark border border-success"
                  style={{ width: '64px', height: '64px' }}
                >
                  <i className="bi bi-shield-check text-success fs-4"></i>
                </div>
                <h5 className="text-white fw-bold mb-2">2. Auto-Verify</h5>
                <p className="text-secondary small mb-0">
                  Instant detection for CPU sockets, DDR4/DDR5 compatibility, cabinet sizes, and power draw.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="gaming-card p-4 text-center h-100">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3 bg-dark border border-warning"
                  style={{ width: '64px', height: '64px' }}
                >
                  <i className="bi bi-wallet2 text-warning fs-4"></i>
                </div>
                <h5 className="text-white fw-bold mb-2">3. Track Budget</h5>
                <p className="text-secondary small mb-0">
                  Real-time Indian Rupee (₹) price calculations with configurable 18% GST and budget progress bar.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="gaming-card p-4 text-center h-100">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3 bg-dark border border-info"
                  style={{ width: '64px', height: '64px' }}
                >
                  <i className="bi bi-save2 text-info fs-4"></i>
                </div>
                <h5 className="text-white fw-bold mb-2">4. Save & Print</h5>
                <p className="text-secondary small mb-0">
                  Store custom configurations in your browser LocalStorage and print professional spec sheets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prebuilt Configurations Section */}
      <section id="preset-builds" className="py-5 border-bottom border-secondary border-opacity-25 bg-black bg-opacity-25">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="badge bg-dark border border-info border-opacity-50 text-info small mb-2">
                RECOMMENDED RIGS
              </span>
              <h2 className="text-white fw-bold mb-1">Prebuilt Gaming PC Configurations</h2>
              <p className="text-secondary small mb-0">
                Expert-curated builds tuned for 1080p, 1440p, and 4K gaming performance.
              </p>
            </div>
            <Link to="/builder" className="btn btn-outline-neon btn-sm mt-3 mt-md-0">
              Custom Build from Scratch <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {PRESET_BUILDS.map((preset) => (
              <div key={preset.id} className="col-12 col-md-6 col-lg-3">
                <div className="card gaming-card h-100 shadow d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className={`badge ${preset.badgeClass} small`}>{preset.badge}</span>
                      <span className="badge bg-dark border border-secondary text-info small">
                        {preset.targetResolution}
                      </span>
                    </div>

                    <h5 className="text-white fw-bold mb-1">{preset.title}</h5>
                    <p className="text-secondary small mb-3 flex-grow-1" style={{ fontSize: '0.8rem' }}>
                      {preset.description}
                    </p>

                    <div className="p-2 rounded bg-black border border-secondary border-opacity-25 small mb-3">
                      <div className="text-secondary small mb-1">
                        <strong>Target:</strong> {preset.tagline}
                      </div>
                      <div className="text-secondary small">
                        <strong>Components:</strong> 8 Verified Parts
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-baseline pt-2 border-top border-secondary border-opacity-25 mt-auto">
                      <div>
                        <div className="text-secondary" style={{ fontSize: '0.68rem' }}>ESTIMATED COST</div>
                        <div className="fs-5 fw-bold text-neon">{formatINR(preset.estimatedPrice)}</div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-sm btn-neon px-3"
                        onClick={() => handleLoadPreset(preset.id)}
                      >
                        <i className="bi bi-lightning-charge me-1"></i> Load Rig
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Components Showcase */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-dark border border-info border-opacity-50 text-info small mb-2">
              TRENDING HARDWARE
            </span>
            <h2 className="text-white fw-bold">Popular Gaming Components</h2>
            <p className="text-secondary small col-md-6 mx-auto">
              Handpicked community favorites offering optimal price-to-performance ratio.
            </p>
          </div>

          <div className="row g-4">
            {popularComponents.map((comp) => (
              <div key={comp.id} className="col-12 col-sm-6 col-lg-3">
                <div className="card gaming-card h-100 p-3 text-center">
                  <div className="hardware-img-container rounded mb-3" style={{ height: '140px' }}>
                    <img src={comp.image} alt={comp.name} />
                  </div>
                  <span className="badge bg-dark border border-secondary text-light align-self-center mb-2">
                    {comp.brand}
                  </span>
                  <h6 className="text-white fw-bold text-truncate mb-1" title={comp.name}>
                    {comp.name}
                  </h6>
                  <p className="text-secondary small mb-3 text-truncate" style={{ fontSize: '0.75rem' }}>
                    {comp.specs}
                  </p>
                  <div className="mt-auto">
                    <span className="fs-6 fw-bold text-neon d-block mb-2">{formatINR(comp.price)}</span>
                    <Link to="/builder" className="btn btn-sm btn-outline-light w-100">
                      Configure in Builder
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-5 p-5 rounded-4 text-center border border-info border-opacity-25 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #10192b 0%, #0c121e 100%)' }}>
            <h2 className="text-white fw-bold mb-2">Ready to Build Your Gaming Rig?</h2>
            <p className="text-secondary col-md-7 mx-auto mb-4">
              Try out the interactive PC builder now. Select parts, monitor wattage, verify compatibility, and check live budgets.
            </p>
            <Link to="/builder" className="btn btn-neon btn-lg px-4 py-2">
              <i className="bi bi-tools me-2"></i> Launch PC Builder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
