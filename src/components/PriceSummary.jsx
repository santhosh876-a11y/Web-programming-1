import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';
import { CATEGORIES } from '../data/componentsData';
import { formatINR } from '../utils/priceCalculator';

const PriceSummary = () => {
  const {
    selectedComponents,
    totals,
    includeGst,
    setIncludeGst,
    buildName,
    setBuildName,
    saveCurrentBuild,
    clearBuild,
    removeComponent
  } = useBuilder();

  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(buildName);

  const handleSaveName = (e) => {
    e.preventDefault();
    setBuildName(tempName.trim() || 'Custom Gaming Rig');
    setIsEditingName(false);
  };

  const selectedEntries = Object.entries(selectedComponents).filter(([_, item]) => Boolean(item));

  return (
    <div className="gaming-card p-3 mb-4 shadow-sm">
      {/* Header and Build Name */}
      <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-bottom border-secondary border-opacity-25">
        <div>
          <span className="small text-secondary text-uppercase" style={{ fontSize: '0.7rem' }}>
            Active Configuration
          </span>
          {isEditingName ? (
            <form onSubmit={handleSaveName} className="d-flex align-items-center gap-2 mt-1">
              <input
                type="text"
                className="form-control form-control-sm bg-dark border-info text-white"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn btn-sm btn-info py-0 px-2">
                <i className="bi bi-check"></i>
              </button>
            </form>
          ) : (
            <div className="d-flex align-items-center gap-2">
              <h6 className="text-white fw-bold mb-0 text-truncate" style={{ maxWidth: '220px' }}>
                {buildName}
              </h6>
              <button
                type="button"
                className="btn btn-link btn-sm text-secondary p-0 text-decoration-none"
                onClick={() => {
                  setTempName(buildName);
                  setIsEditingName(true);
                }}
                title="Edit build title"
              >
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
          )}
        </div>

        <span className="badge bg-dark border border-secondary text-info">
          {totals.count} / 8 Parts
        </span>
      </div>

      {/* Selected Items Mini-List */}
      <div className="mb-3" style={{ maxHeight: '210px', overflowY: 'auto' }}>
        {selectedEntries.length > 0 ? (
          <ul className="list-group list-group-flush small">
            {selectedEntries.map(([catKey, item]) => {
              const catMeta = CATEGORIES.find(c => c.id === catKey);
              return (
                <li
                  key={catKey}
                  className="list-group-item bg-transparent text-light px-0 py-1 d-flex justify-content-between align-items-center border-secondary border-opacity-25"
                >
                  <div className="d-flex align-items-center gap-2 text-truncate me-2">
                    <button
                      type="button"
                      className="btn btn-link text-danger p-0 border-0"
                      onClick={() => removeComponent(catKey)}
                      title={`Remove ${catMeta?.name}`}
                    >
                      <i className="bi bi-x-circle small"></i>
                    </button>
                    <span className="text-secondary small">[{catMeta?.name.split(' ')[0]}]:</span>
                    <span className="text-truncate" style={{ maxWidth: '140px' }} title={item.name}>
                      {item.name}
                    </span>
                  </div>
                  <span className="text-neon fw-semibold">{formatINR(item.price)}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="text-center py-3 text-secondary small">
            <i className="bi bi-cpu fs-4 d-block mb-1 opacity-50"></i>
            No parts selected yet. Click any component above to start assembling!
          </div>
        )}
      </div>

      {/* GST Toggle Option */}
      <div className="p-2 mb-3 rounded bg-dark border border-secondary border-opacity-50 d-flex justify-content-between align-items-center">
        <div>
          <label htmlFor="gstToggle" className="form-check-label small text-light fw-semibold d-block">
            Include 18% GST (Taxes)
          </label>
          <span className="text-secondary" style={{ fontSize: '0.7rem' }}>
            Government standard goods tax
          </span>
        </div>
        <div className="form-check form-switch mb-0">
          <input
            id="gstToggle"
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={includeGst}
            onChange={(e) => setIncludeGst(e.target.checked)}
          />
        </div>
      </div>

      {/* Financial Calculations */}
      <div className="bg-black p-3 rounded-3 border border-secondary border-opacity-50 mb-3">
        <div className="d-flex justify-content-between text-secondary small mb-1">
          <span>Subtotal:</span>
          <span className="text-light">{formatINR(totals.subtotal)}</span>
        </div>

        {includeGst && (
          <div className="d-flex justify-content-between text-secondary small mb-1">
            <span>Estimated 18% GST:</span>
            <span className="text-info">{formatINR(totals.gstAmount)}</span>
          </div>
        )}

        <hr className="my-2 border-secondary border-opacity-25" />

        <div className="d-flex justify-content-between align-items-baseline">
          <span className="text-white fw-bold">Grand Total:</span>
          <span className="fs-4 fw-bold text-gradient">{formatINR(totals.grandTotal)}</span>
        </div>
        <div className="text-end text-secondary" style={{ fontSize: '0.68rem' }}>
          *Sample prices for academic demonstration
        </div>
      </div>

      {/* Primary Actions */}
      <div className="d-grid gap-2">
        <button
          type="button"
          className="btn btn-neon btn-sm py-2 d-flex align-items-center justify-content-center gap-2"
          onClick={() => saveCurrentBuild()}
          disabled={totals.count === 0}
        >
          <i className="bi bi-bookmark-plus-fill"></i>
          <span>Save Configuration</span>
        </button>

        <div className="row g-2">
          <div className="col-6">
            <Link
              to="/summary"
              className={`btn btn-outline-light btn-sm w-100 ${totals.count === 0 ? 'disabled' : ''}`}
            >
              <i className="bi bi-file-earmark-text me-1"></i> Summary
            </Link>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm w-100"
              onClick={clearBuild}
              disabled={totals.count === 0}
            >
              <i className="bi bi-trash me-1"></i> Clear Rig
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
