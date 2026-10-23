import React, { useState } from 'react';
import { formatINR } from '../utils/priceCalculator';

const ComponentCard = ({ component, isSelected, onSelect, onRemove }) => {
  const [imageError, setImageError] = useState(false);

  // SVG Fallback for hardware category if image fails to load
  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23121824"/><text x="50%" y="50%" fill="%2300d2ff" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" dy=".3em">${encodeURIComponent(component.brand || 'Hardware')}</text></svg>`;

  return (
    <div className={`card gaming-card h-100 ${isSelected ? 'selected-active' : ''}`}>
      {/* Product Image */}
      <div className="hardware-img-container position-relative">
        <img
          src={imageError ? fallbackSvg : component.image}
          alt={component.name}
          onError={() => setImageError(true)}
          loading="lazy"
        />
        {/* Brand badge */}
        <span className="position-absolute top-0 start-0 m-2 badge bg-dark bg-opacity-75 border border-secondary text-light">
          {component.brand}
        </span>
        {/* Popular badge */}
        {component.popular && (
          <span className="position-absolute top-0 end-0 m-2 badge bg-primary text-white">
            <i className="bi bi-star-fill me-1"></i> Popular
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column p-3">
        {/* Component Title */}
        <h6 className="card-title text-white fw-bold mb-2 text-truncate" title={component.name}>
          {component.name}
        </h6>

        {/* Specifications */}
        <p className="card-text text-secondary small flex-grow-1 mb-3" style={{ minHeight: '40px', fontSize: '0.82rem' }}>
          {component.specs}
        </p>

        {/* Compatibility metadata badges */}
        <div className="d-flex flex-wrap gap-1 mb-3">
          {component.socket && (
            <span className="badge bg-dark border border-secondary text-info small" style={{ fontSize: '0.72rem' }}>
              Socket: {component.socket}
            </span>
          )}
          {component.ramType && (
            <span className="badge bg-dark border border-secondary text-info small" style={{ fontSize: '0.72rem' }}>
              RAM: {component.ramType}
            </span>
          )}
          {component.formFactor && (
            <span className="badge bg-dark border border-secondary text-info small" style={{ fontSize: '0.72rem' }}>
              Size: {component.formFactor}
            </span>
          )}
          {component.wattage && (
            <span className="badge bg-dark border border-secondary text-warning small" style={{ fontSize: '0.72rem' }}>
              {component.wattage}W
            </span>
          )}
          {component.tdp && (
            <span className="badge bg-dark border border-secondary text-warning small" style={{ fontSize: '0.72rem' }}>
              TDP: {component.tdp}W
            </span>
          )}
        </div>

        {/* Price and Action Button */}
        <div className="d-flex align-items-center justify-content-between pt-2 border-top border-secondary border-opacity-25 mt-auto">
          <div>
            <div className="small text-secondary" style={{ fontSize: '0.7rem' }}>EST. PRICE</div>
            <div className="fs-5 fw-bold text-neon">{formatINR(component.price)}</div>
          </div>

          <div>
            {isSelected ? (
              <div className="d-flex gap-1">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={onRemove}
                  title="Remove from build"
                >
                  <i className="bi bi-trash"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-success px-2 d-flex align-items-center gap-1"
                  disabled
                >
                  <i className="bi bi-check2-circle"></i>
                  <span>Selected</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-sm btn-outline-neon px-3 d-flex align-items-center gap-1"
                onClick={onSelect}
              >
                <i className="bi bi-plus-circle"></i>
                <span>Select</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
