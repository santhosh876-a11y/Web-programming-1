import React from 'react';
import ComponentSelector from '../components/ComponentSelector';
import PriceSummary from '../components/PriceSummary';
import BudgetPlanner from '../components/BudgetPlanner';
import CompatibilityChecker from '../components/CompatibilityChecker';
import { useBuilder } from '../context/BuilderContext';
import { PRESET_BUILDS } from '../data/presetBuilds';

const PCBuilder = () => {
  const { loadPreset } = useBuilder();

  return (
    <div className="pc-builder-page py-4">
      <div className="container">
        {/* Top Header & Presets Quick Loader */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom border-secondary border-opacity-25 gap-3">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="badge bg-dark border border-info border-opacity-50 text-info">
                <i className="bi bi-tools me-1"></i> Interactive Workstation
              </span>
            </div>
            <h2 className="text-white fw-bold mb-1">Custom PC Builder</h2>
            <p className="text-secondary small mb-0">
              Pick your components from each category below. Real-time compatibility and budget validation are active.
            </p>
          </div>

          {/* Quick Preset Build dropdown */}
          <div className="d-flex align-items-center gap-2">
            <span className="small text-secondary text-nowrap">Load Preset:</span>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-info dropdown-toggle"
                type="button"
                id="presetDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-magic me-1"></i> Quick Presets
              </button>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end shadow" aria-labelledby="presetDropdown">
                <li><h6 className="dropdown-header text-info">Preset Configurations</h6></li>
                {PRESET_BUILDS.map((preset) => (
                  <li key={preset.id}>
                    <button
                      className="dropdown-item small d-flex justify-content-between align-items-center gap-3"
                      type="button"
                      onClick={() => loadPreset(preset.id)}
                    >
                      <span>{preset.title}</span>
                      <span className="badge bg-dark border border-secondary text-info">
                        ₹{(preset.estimatedPrice / 1000).toFixed(0)}k
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="row g-4">
          {/* Main Hardware Selection Panel */}
          <div className="col-lg-8">
            <ComponentSelector />
          </div>

          {/* Right Summary & Analysis Sidebar */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '80px', zIndex: 10 }}>
              <PriceSummary />
              <BudgetPlanner />
              <CompatibilityChecker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCBuilder;
