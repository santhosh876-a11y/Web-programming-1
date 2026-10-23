import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';
import { formatINR } from '../utils/priceCalculator';

const SavedBuilds = () => {
  const { savedBuilds, loadSavedBuild, removeSavedBuild, updateSavedBuildName } = useBuilder();
  const navigate = useNavigate();

  const [editingId, setEditingId] = useState(null);
  const [editNameText, setEditNameText] = useState('');

  const handleStartRename = (build) => {
    setEditingId(build.id);
    setEditNameText(build.name);
  };

  const handleSaveRename = (id) => {
    if (editNameText.trim()) {
      updateSavedBuildName(id, editNameText.trim());
    }
    setEditingId(null);
  };

  const handleLoadAndRedirect = (build) => {
    loadSavedBuild(build);
    navigate('/builder');
  };

  if (!savedBuilds || savedBuilds.length === 0) {
    return (
      <div className="gaming-card p-5 text-center my-4">
        <div className="p-3 d-inline-block rounded-circle bg-dark border border-secondary mb-3">
          <i className="bi bi-bookmark-x text-secondary fs-1"></i>
        </div>
        <h4 className="text-white mb-2">No Saved Configurations Yet</h4>
        <p className="text-secondary small col-md-6 mx-auto mb-4">
          You haven't saved any PC configurations to browser LocalStorage yet. 
          Head over to the PC Builder, customize your dream rig, and click "Save Configuration".
        </p>
        <button
          type="button"
          className="btn btn-neon px-4 py-2"
          onClick={() => navigate('/builder')}
        >
          <i className="bi bi-tools me-2"></i> Open PC Builder
        </button>
      </div>
    );
  }

  return (
    <div className="saved-builds-list">
      <div className="row g-4">
        {savedBuilds.map((build) => {
          const components = build.components || {};
          const compCount = Object.keys(components).length;
          const formattedDate = build.createdAt
            ? new Date(build.createdAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })
            : 'Recent';

          return (
            <div key={build.id} className="col-12 col-md-6 col-lg-4">
              <div className="card gaming-card h-100 shadow">
                <div className="card-body p-4 d-flex flex-column">
                  {/* Title and Rename */}
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    {editingId === build.id ? (
                      <div className="input-group input-group-sm me-2">
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-info"
                          value={editNameText}
                          onChange={(e) => setEditNameText(e.target.value)}
                          autoFocus
                        />
                        <button
                          className="btn btn-info"
                          type="button"
                          onClick={() => handleSaveRename(build.id)}
                        >
                          <i className="bi bi-check-lg"></i>
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex align-items-center gap-2">
                        <h5 className="text-white fw-bold mb-0 text-truncate" title={build.name}>
                          {build.name}
                        </h5>
                        <button
                          type="button"
                          className="btn btn-link btn-sm text-secondary p-0 text-decoration-none"
                          onClick={() => handleStartRename(build)}
                          title="Rename build"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </div>
                    )}
                    <span className="badge bg-dark border border-secondary text-secondary small">
                      {formattedDate}
                    </span>
                  </div>

                  {/* Components Summary Pills */}
                  <div className="mb-3">
                    <span className="badge bg-dark border border-info border-opacity-50 text-info me-2">
                      <i className="bi bi-cpu me-1"></i> {compCount} of 8 Components
                    </span>
                    {build.budget && (
                      <span className="badge bg-dark border border-secondary text-secondary">
                        Budget: {formatINR(build.budget)}
                      </span>
                    )}
                  </div>

                  {/* Components breakdown snippet */}
                  <div className="p-2 rounded bg-black border border-secondary border-opacity-25 small mb-3 flex-grow-1">
                    <div className="text-secondary mb-1">
                      <strong className="text-light">CPU:</strong> {components.cpu?.name || 'None'}
                    </div>
                    <div className="text-secondary mb-1">
                      <strong className="text-light">GPU:</strong> {components.gpu?.name || 'None'}
                    </div>
                    <div className="text-secondary">
                      <strong className="text-light">RAM:</strong> {components.ram?.name || 'None'}
                    </div>
                  </div>

                  {/* Total price and actions */}
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25 mt-auto">
                    <div>
                      <div className="text-secondary" style={{ fontSize: '0.7rem' }}>TOTAL ESTIMATE</div>
                      <div className="fs-5 fw-bold text-neon">{formatINR(build.total)}</div>
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeSavedBuild(build.id)}
                        title="Delete saved configuration"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-neon px-3 d-flex align-items-center gap-1"
                        onClick={() => handleLoadAndRedirect(build)}
                      >
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Load Build</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedBuilds;
