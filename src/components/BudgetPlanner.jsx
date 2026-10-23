import React, { useState } from 'react';
import { useBuilder } from '../context/BuilderContext';
import { formatINR } from '../utils/priceCalculator';

const BudgetPlanner = () => {
  const { budget, setBudget, budgetAnalysis } = useBuilder();
  const [customInput, setCustomInput] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);

  const presetBudgets = [50000, 75000, 100000, 150000];

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    const val = Number(customInput);
    if (!isNaN(val) && val > 0) {
      setBudget(val);
      setIsCustomMode(false);
    }
  };

  // Determine progress bar style based on utilization
  const { percentUsed, actualPercent, remaining, isOverBudget, overAmount } = budgetAnalysis;

  let progressBarClass = 'progress-bar-glow-green';
  let badgeStatusClass = 'bg-success';
  let statusText = 'Within Budget';

  if (isOverBudget) {
    progressBarClass = 'progress-bar-glow-red';
    badgeStatusClass = 'bg-danger';
    statusText = 'Over Budget!';
  } else if (actualPercent > 85) {
    progressBarClass = 'progress-bar-glow-yellow';
    badgeStatusClass = 'bg-warning text-dark';
    statusText = 'Near Limit';
  }

  return (
    <div className="gaming-card p-3 mb-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary border-opacity-25">
        <h6 className="brand-font text-white mb-0 d-flex align-items-center gap-2">
          <i className="bi bi-wallet2 text-info"></i> Budget Planner
        </h6>
        <span className={`badge ${badgeStatusClass} small`}>
          {statusText}
        </span>
      </div>

      {/* Quick Preset Buttons */}
      <div className="mb-3">
        <div className="small text-secondary mb-2" style={{ fontSize: '0.75rem' }}>
          SELECT TARGET BUDGET:
        </div>
        <div className="d-flex flex-wrap gap-2">
          {presetBudgets.map((amt) => (
            <button
              key={amt}
              type="button"
              className={`btn btn-sm ${budget === amt && !isCustomMode ? 'btn-info' : 'btn-outline-secondary'}`}
              onClick={() => {
                setBudget(amt);
                setIsCustomMode(false);
              }}
            >
              {formatINR(amt)}
            </button>
          ))}
          <button
            type="button"
            className={`btn btn-sm ${isCustomMode ? 'btn-info' : 'btn-outline-secondary'}`}
            onClick={() => setIsCustomMode(!isCustomMode)}
          >
            Custom...
          </button>
        </div>
      </div>

      {/* Custom Budget Input Form */}
      {isCustomMode && (
        <form onSubmit={handleCustomSubmit} className="mb-3 input-group input-group-sm">
          <span className="input-group-text bg-dark border-secondary text-info">₹</span>
          <input
            type="number"
            className="form-control bg-dark border-secondary text-light"
            placeholder="Enter budget (e.g. 120000)"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            min="1000"
            step="1000"
            required
            autoFocus
          />
          <button type="submit" className="btn btn-sm btn-info">
            Set
          </button>
        </form>
      )}

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="d-flex justify-content-between small text-secondary mb-1">
          <span>Utilization</span>
          <span className="fw-bold text-light">{Math.round(actualPercent)}%</span>
        </div>
        <div className="progress" style={{ height: '10px' }}>
          <div
            className={`progress-bar ${progressBarClass}`}
            role="progressbar"
            style={{ width: `${percentUsed}%` }}
            aria-valuenow={percentUsed}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      {/* Budget Metrics Card */}
      <div className="p-2 rounded bg-black border border-secondary border-opacity-25 small">
        <div className="d-flex justify-content-between mb-1">
          <span className="text-secondary">Target Budget:</span>
          <span className="text-light fw-bold">{formatINR(budget)}</span>
        </div>
        <div className="d-flex justify-content-between mb-1">
          <span className="text-secondary">Current Cost:</span>
          <span className="text-white fw-bold">{formatINR(budgetAnalysis.grandTotal)}</span>
        </div>
        <div className="d-flex justify-content-between pt-1 border-top border-secondary border-opacity-25">
          {isOverBudget ? (
            <>
              <span className="text-danger fw-semibold">
                <i className="bi bi-exclamation-triangle-fill me-1"></i> Over Budget By:
              </span>
              <span className="text-danger fw-bold">+{formatINR(overAmount)}</span>
            </>
          ) : (
            <>
              <span className="text-success fw-semibold">
                <i className="bi bi-check-circle-fill me-1"></i> Remaining Balance:
              </span>
              <span className="text-success fw-bold">{formatINR(remaining)}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
