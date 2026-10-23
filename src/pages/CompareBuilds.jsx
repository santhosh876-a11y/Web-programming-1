import React from 'react';
import { Link } from 'react-router-dom';
import BuildComparison from '../components/BuildComparison';

const CompareBuilds = () => {
  return (
    <div className="compare-builds-page py-4">
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom border-secondary border-opacity-25 gap-3">
          <div>
            <span className="badge bg-dark border border-info border-opacity-50 text-info mb-1">
              <i className="bi bi-arrow-left-right me-1"></i> BENCHMARK & COMPARISON
            </span>
            <h2 className="text-white fw-bold mb-1">Compare PC Configurations</h2>
            <p className="text-secondary small mb-0">
              Evaluate hardware differences, power consumption, compatibility checks, and pricing side-by-side.
            </p>
          </div>

          <Link to="/builder" className="btn btn-sm btn-outline-neon">
            <i className="bi bi-tools me-1"></i> Back to Builder
          </Link>
        </div>

        {/* Comparison Component */}
        <BuildComparison />
      </div>
    </div>
  );
};

export default CompareBuilds;
