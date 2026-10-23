import React from 'react';
import { Link } from 'react-router-dom';
import SavedBuilds from '../components/SavedBuilds';
import { useBuilder } from '../context/BuilderContext';

const SavedConfigurations = () => {
  const { savedBuilds } = useBuilder();

  return (
    <div className="saved-configurations-page py-4">
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom border-secondary border-opacity-25 gap-3">
          <div>
            <span className="badge bg-dark border border-info border-opacity-50 text-info mb-1">
              <i className="bi bi-hdd-network me-1"></i> BROWSER STORAGE
            </span>
            <h2 className="text-white fw-bold mb-1">Saved PC Configurations</h2>
            <p className="text-secondary small mb-0">
              Manage your saved gaming PC builds stored securely in browser LocalStorage. Load, rename, or delete anytime.
            </p>
          </div>

          <div className="d-flex gap-2">
            <Link to="/compare" className="btn btn-sm btn-outline-info">
              <i className="bi bi-arrow-left-right me-1"></i> Compare Builds
            </Link>
            <Link to="/builder" className="btn btn-sm btn-neon">
              <i className="bi bi-plus-lg me-1"></i> Create New Build
            </Link>
          </div>
        </div>

        {/* Saved Builds List Component */}
        <SavedBuilds />
      </div>
    </div>
  );
};

export default SavedConfigurations;
