import React from 'react';
import { useBuilder } from '../context/BuilderContext';

const CompatibilityChecker = () => {
  const { compatibility, selectedComponents } = useBuilder();
  const { isCompatible, hasWarnings, estimatedPower, recommendedPsuWattage, issues } = compatibility;

  const hasComponents = Object.keys(selectedComponents).length > 0;

  return (
    <div className="gaming-card p-3 mb-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary border-opacity-25">
        <h6 className="brand-font text-white mb-0 d-flex align-items-center gap-2">
          <i className="bi bi-shield-check text-info"></i> Compatibility Checker
        </h6>

        {hasComponents ? (
          isCompatible ? (
            hasWarnings ? (
              <span className="badge bg-warning text-dark small">
                <i className="bi bi-exclamation-triangle me-1"></i> Advisory
              </span>
            ) : (
              <span className="badge bg-success small">
                <i className="bi bi-check-circle-fill me-1"></i> 100% Compatible
              </span>
            )
          ) : (
            <span className="badge bg-danger small">
              <i className="bi bi-x-octagon-fill me-1"></i> Incompatible Parts
            </span>
          )
        ) : (
          <span className="badge bg-secondary small">Awaiting Parts</span>
        )}
      </div>

      {/* Estimated Wattage & System Load Indicator */}
      {hasComponents && (
        <div className="d-flex justify-content-between align-items-center p-2 mb-3 rounded bg-dark border border-secondary border-opacity-50 small">
          <div>
            <span className="text-secondary d-block" style={{ fontSize: '0.72rem' }}>
              ESTIMATED DRAW / REC. PSU
            </span>
            <span className="fw-bold text-white">
              ~{estimatedPower}W <span className="text-secondary">/ {recommendedPsuWattage}W+ PSU</span>
            </span>
          </div>

          <span className="badge bg-black border border-info border-opacity-50 text-info">
            <i className="bi bi-lightning-charge-fill me-1"></i>
            {selectedComponents.psu ? `${selectedComponents.psu.wattage}W Equipped` : 'No PSU Selected'}
          </span>
        </div>
      )}

      {/* Issues or Success Notification */}
      {issues.length > 0 ? (
        <div className="d-flex flex-column gap-2 mb-1">
          {issues.map((issue, idx) => (
            <div
              key={idx}
              className={`alert alert-${issue.severity} p-2 mb-0 rounded-2 small d-flex align-items-start gap-2`}
              style={{ fontSize: '0.8rem' }}
            >
              <i
                className={`bi ${
                  issue.type === 'error'
                    ? 'bi-exclamation-octagon-fill text-danger'
                    : 'bi-exclamation-triangle-fill text-warning'
                } mt-1`}
              ></i>
              <div>
                <strong className="d-block">{issue.category}</strong>
                <span>{issue.message}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-2 rounded bg-dark bg-opacity-50 border border-success border-opacity-25 text-success small d-flex align-items-center gap-2">
          <i className="bi bi-check-circle-fill fs-5 text-success"></i>
          <div>
            <strong>All Selected Components Harmonize!</strong>
            <div className="text-secondary" style={{ fontSize: '0.72rem' }}>
              Sockets, RAM speed standards, case form factors, and power budgets match verified specifications.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompatibilityChecker;
