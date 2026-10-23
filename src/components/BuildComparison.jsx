import React, { useState } from 'react';
import { useBuilder } from '../context/BuilderContext';
import { CATEGORIES, COMPONENTS_DATA } from '../data/componentsData';
import { PRESET_BUILDS } from '../data/presetBuilds';
import { formatINR } from '../utils/priceCalculator';
import { checkCompatibility } from '../utils/compatibilityChecker';

const BuildComparison = () => {
  const { savedBuilds, selectedComponents, totals, budget, loadSavedBuild } = useBuilder();

  // Prepare full selectable list (Current Active Build + Saved Builds + Presets)
  const currentBuildOption = {
    id: 'current-active',
    name: 'Current Active Rig',
    components: selectedComponents,
    total: totals.grandTotal,
    budget: budget
  };

  const presetOptions = PRESET_BUILDS.map(p => {
    const comps = {};
    Object.entries(p.components).forEach(([cat, compId]) => {
      comps[cat] = COMPONENTS_DATA[cat]?.find(c => c.id === compId);
    });
    return {
      id: p.id,
      name: `Preset: ${p.title}`,
      components: comps,
      total: p.estimatedPrice,
      budget: p.estimatedPrice + 10000
    };
  });

  const allAvailableBuilds = [currentBuildOption, ...savedBuilds, ...presetOptions];

  // Selected build IDs to compare (default to first 2)
  const [selectedBuildId1, setSelectedBuildId1] = useState(allAvailableBuilds[0]?.id || '');
  const [selectedBuildId2, setSelectedBuildId2] = useState(
    allAvailableBuilds[1]?.id || allAvailableBuilds[0]?.id || ''
  );

  const build1 = allAvailableBuilds.find(b => b.id === selectedBuildId1) || currentBuildOption;
  const build2 = allAvailableBuilds.find(b => b.id === selectedBuildId2) || (presetOptions[0] || currentBuildOption);

  const compat1 = checkCompatibility(build1.components || {});
  const compat2 = checkCompatibility(build2.components || {});

  return (
    <div className="gaming-card p-4 shadow">
      {/* Selector Dropdowns */}
      <div className="row g-3 mb-4 p-3 rounded-3 bg-dark border border-secondary border-opacity-50">
        <div className="col-12 col-md-6">
          <label htmlFor="compare-build-1" className="form-label small text-info fw-bold">
            <i className="bi bi-pc-display me-1"></i> Select Build 1:
          </label>
          <select
            id="compare-build-1"
            className="form-select bg-dark border-secondary text-light"
            value={selectedBuildId1}
            onChange={(e) => setSelectedBuildId1(e.target.value)}
          >
            <optgroup label="Active Workspace">
              <option value="current-active">Current Active Rig</option>
            </optgroup>
            {savedBuilds.length > 0 && (
              <optgroup label="Your Saved Builds">
                {savedBuilds.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({formatINR(b.total)})
                  </option>
                ))}
              </optgroup>
            )}
            <optgroup label="Curated Preset Builds">
              {presetOptions.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} ({formatINR(p.total)})
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="compare-build-2" className="form-label small text-info fw-bold">
            <i className="bi bi-pc-display me-1"></i> Select Build 2:
          </label>
          <select
            id="compare-build-2"
            className="form-select bg-dark border-secondary text-light"
            value={selectedBuildId2}
            onChange={(e) => setSelectedBuildId2(e.target.value)}
          >
            <optgroup label="Active Workspace">
              <option value="current-active">Current Active Rig</option>
            </optgroup>
            {savedBuilds.length > 0 && (
              <optgroup label="Your Saved Builds">
                {savedBuilds.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({formatINR(b.total)})
                  </option>
                ))}
              </optgroup>
            )}
            <optgroup label="Curated Preset Builds">
              {presetOptions.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} ({formatINR(p.total)})
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="table-responsive">
        <table className="table table-dark table-hover table-bordered border-secondary align-middle mb-0">
          <thead>
            <tr className="table-active">
              <th scope="col" style={{ width: '22%' }} className="text-secondary small text-uppercase">
                Feature / Component
              </th>
              <th scope="col" style={{ width: '39%' }} className="text-info fw-bold fs-6">
                {build1.name}
              </th>
              <th scope="col" style={{ width: '39%' }} className="text-info fw-bold fs-6">
                {build2.name}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Total Price */}
            <tr>
              <td className="fw-bold text-secondary">Total Price</td>
              <td className="fs-5 fw-bold text-neon">{formatINR(build1.total)}</td>
              <td className="fs-5 fw-bold text-neon">{formatINR(build2.total)}</td>
            </tr>

            {/* Estimated Power */}
            <tr>
              <td className="fw-bold text-secondary">Estimated Power Draw</td>
              <td>~{compat1.estimatedPower}W (Rec. {compat1.recommendedPsuWattage}W+ PSU)</td>
              <td>~{compat2.estimatedPower}W (Rec. {compat2.recommendedPsuWattage}W+ PSU)</td>
            </tr>

            {/* Compatibility Status */}
            <tr>
              <td className="fw-bold text-secondary">Compatibility</td>
              <td>
                {compat1.isCompatible ? (
                  <span className="badge bg-success">
                    <i className="bi bi-check-circle me-1"></i> Compatible
                  </span>
                ) : (
                  <span className="badge bg-danger">
                    <i className="bi bi-exclamation-triangle me-1"></i> Issues Detected ({compat1.issues.length})
                  </span>
                )}
              </td>
              <td>
                {compat2.isCompatible ? (
                  <span className="badge bg-success">
                    <i className="bi bi-check-circle me-1"></i> Compatible
                  </span>
                ) : (
                  <span className="badge bg-danger">
                    <i className="bi bi-exclamation-triangle me-1"></i> Issues Detected ({compat2.issues.length})
                  </span>
                )}
              </td>
            </tr>

            {/* Component Category Rows */}
            {CATEGORIES.map(cat => {
              const comp1 = build1.components?.[cat.id];
              const comp2 = build2.components?.[cat.id];
              const isDifferent = comp1?.id !== comp2?.id;

              return (
                <tr key={cat.id} className={isDifferent ? 'border-start border-3 border-info' : ''}>
                  <td className="text-secondary small">
                    <i className={`bi ${cat.icon} me-1 text-info`}></i>
                    <span className="fw-semibold">{cat.name.split(' ')[0]}</span>
                  </td>

                  <td>
                    {comp1 ? (
                      <div>
                        <div className="fw-bold text-white small">{comp1.name}</div>
                        <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{comp1.specs}</div>
                        <div className="text-neon fw-semibold small mt-1">{formatINR(comp1.price)}</div>
                      </div>
                    ) : (
                      <span className="text-secondary small fst-italic">Not selected</span>
                    )}
                  </td>

                  <td>
                    {comp2 ? (
                      <div>
                        <div className="fw-bold text-white small">{comp2.name}</div>
                        <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{comp2.specs}</div>
                        <div className="text-neon fw-semibold small mt-1">{formatINR(comp2.price)}</div>
                      </div>
                    ) : (
                      <span className="text-secondary small fst-italic">Not selected</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuildComparison;
