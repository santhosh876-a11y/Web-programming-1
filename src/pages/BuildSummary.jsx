import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBuilder } from '../context/BuilderContext';
import { CATEGORIES } from '../data/componentsData';
import { formatINR } from '../utils/priceCalculator';

const BuildSummary = () => {
  const {
    buildName,
    selectedComponents,
    totals,
    includeGst,
    budgetAnalysis,
    compatibility,
    saveCurrentBuild
  } = useBuilder();

  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const selectedEntries = Object.entries(selectedComponents).filter(([_, item]) => Boolean(item));

  const handlePrint = () => {
    window.print();
  };

  const handleCopySpecs = () => {
    let specText = `=== RIGFORGE GAMING PC SPECIFICATION ===\n`;
    specText += `Build Name: ${buildName}\n`;
    specText += `Date: ${new Date().toLocaleDateString('en-IN')}\n\n`;

    selectedEntries.forEach(([catKey, item]) => {
      const catMeta = CATEGORIES.find(c => c.id === catKey);
      specText += `[${catMeta?.name}]: ${item.name} (${item.brand}) - ${formatINR(item.price)}\n`;
      specText += `  Specs: ${item.specs}\n`;
    });

    specText += `\nSubtotal: ${formatINR(totals.subtotal)}\n`;
    if (includeGst) {
      specText += `Estimated 18% GST: ${formatINR(totals.gstAmount)}\n`;
    }
    specText += `Total Price: ${formatINR(totals.grandTotal)}\n`;
    specText += `Compatibility: ${compatibility.isCompatible ? 'VERIFIED COMPATIBLE' : 'ISSUES DETECTED'}\n`;
    specText += `Estimated Power: ~${compatibility.estimatedPower}W\n`;
    specText += `==========================================\n`;

    navigator.clipboard.writeText(specText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  if (selectedEntries.length === 0) {
    return (
      <div className="container py-5 text-center">
        <div className="gaming-card p-5 max-w-lg mx-auto">
          <i className="bi bi-cart-x text-secondary display-3 mb-3 d-block"></i>
          <h3 className="text-white">Your PC Build is Empty</h3>
          <p className="text-secondary small col-md-8 mx-auto mb-4">
            You haven't selected any components for this build yet. 
            Select parts in the builder first to view the full specification sheet.
          </p>
          <Link to="/builder" className="btn btn-neon px-4 py-2">
            <i className="bi bi-tools me-2"></i> Open PC Builder
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="build-summary-page py-4">
      <div className="container">
        {/* Actions bar (Hidden in Print) */}
        <div className="no-print d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom border-secondary border-opacity-25 gap-3">
          <div>
            <span className="badge bg-dark border border-info border-opacity-50 text-info mb-1">
              <i className="bi bi-receipt me-1"></i> FINAL SPEC SHEET
            </span>
            <h2 className="text-white fw-bold mb-1">Build Summary & Quotation</h2>
            <p className="text-secondary small mb-0">
              Review your full hardware manifest, verify power requirements, and print your spec sheet.
            </p>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <button type="button" className="btn btn-sm btn-outline-info" onClick={handleCopySpecs}>
              <i className={`bi ${copied ? 'bi-check2' : 'bi-clipboard'} me-1`}></i>
              {copied ? 'Copied to Clipboard!' : 'Copy Specs'}
            </button>
            <button type="button" className="btn btn-sm btn-outline-light" onClick={handlePrint}>
              <i className="bi bi-printer me-1"></i> Print / PDF
            </button>
            <button type="button" className="btn btn-sm btn-neon" onClick={() => saveCurrentBuild()}>
              <i className="bi bi-bookmark-fill me-1"></i> Save Build
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => navigate('/builder')}
            >
              <i className="bi bi-pencil me-1"></i> Edit Build
            </button>
          </div>
        </div>

        {/* Printable Specification Card / Quotation */}
        <div className="gaming-card p-4 p-md-5 shadow-lg border-secondary" id="printable-quotation">
          {/* Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start pb-4 border-bottom border-secondary border-opacity-50 mb-4 gap-3">
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <div
                  className="rounded p-2 text-white"
                  style={{ background: 'linear-gradient(135deg, #00d2ff, #0077b6)' }}
                >
                  <i className="bi bi-cpu-fill fs-4"></i>
                </div>
                <div>
                  <h3 className="brand-font fw-bold text-white mb-0">
                    RIG<span className="text-neon">FORGE</span>
                  </h3>
                  <small className="text-secondary">Gaming PC Specification Sheet</small>
                </div>
              </div>
              <h4 className="text-white fw-bold mb-1">{buildName}</h4>
              <span className="badge bg-dark border border-secondary text-info">
                {selectedEntries.length} of 8 Core Components Selected
              </span>
            </div>

            <div className="text-md-end small text-secondary">
              <div><strong>Document:</strong> RFC-BUILD-{Date.now().toString().slice(-6)}</div>
              <div><strong>Date:</strong> {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              <div><strong>Currency:</strong> Indian Rupees (₹ INR)</div>
              <div><strong>Course:</strong> Web Programming Academic Project</div>
            </div>
          </div>

          {/* Compatibility & Budget Quick Status Banner */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="p-3 rounded-3 bg-dark border border-secondary border-opacity-50 h-100">
                <div className="small text-secondary mb-1">COMPATIBILITY STATUS</div>
                {compatibility.isCompatible ? (
                  <div className="d-flex align-items-center gap-2 text-success fw-bold">
                    <i className="bi bi-check-circle-fill fs-5"></i>
                    <span>Hardware Verified Compatible</span>
                  </div>
                ) : (
                  <div className="d-flex align-items-center gap-2 text-danger fw-bold">
                    <i className="bi bi-exclamation-octagon-fill fs-5"></i>
                    <span>Potential Incompatibility Detected ({compatibility.issues.length} Issues)</span>
                  </div>
                )}
                <div className="text-secondary small mt-1" style={{ fontSize: '0.78rem' }}>
                  Estimated Draw: ~{compatibility.estimatedPower}W | Recommended PSU: {compatibility.recommendedPsuWattage}W+
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-3 rounded-3 bg-dark border border-secondary border-opacity-50 h-100">
                <div className="small text-secondary mb-1">BUDGET TRACKING</div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-white fw-bold">Budget: {formatINR(budgetAnalysis.budget)}</span>
                  <span className={`badge ${budgetAnalysis.isOverBudget ? 'bg-danger' : 'bg-success'}`}>
                    {budgetAnalysis.isOverBudget ? 'Over Budget' : 'Within Budget'}
                  </span>
                </div>
                <div className="text-secondary small mt-1" style={{ fontSize: '0.78rem' }}>
                  {budgetAnalysis.isOverBudget
                    ? `Exceeds target by ${formatINR(budgetAnalysis.overAmount)}`
                    : `Remaining balance: ${formatINR(budgetAnalysis.remaining)}`}
                </div>
              </div>
            </div>
          </div>

          {/* Component Manifest Table */}
          <div className="table-responsive mb-4">
            <table className="table table-dark table-striped table-bordered border-secondary align-middle mb-0">
              <thead>
                <tr className="table-active">
                  <th scope="col" style={{ width: '20%' }}>Category</th>
                  <th scope="col" style={{ width: '55%' }}>Component & Specifications</th>
                  <th scope="col" style={{ width: '25%' }} className="text-end">Price (INR)</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map((cat) => {
                  const item = selectedComponents[cat.id];
                  return (
                    <tr key={cat.id}>
                      <td className="fw-semibold text-secondary">
                        <i className={`bi ${cat.icon} me-2 text-info`}></i>
                        {cat.name.split(' ')[0]}
                      </td>
                      <td>
                        {item ? (
                          <div>
                            <span className="badge bg-secondary me-2">{item.brand}</span>
                            <strong className="text-white">{item.name}</strong>
                            <div className="text-secondary small mt-1" style={{ fontSize: '0.78rem' }}>
                              {item.specs}
                            </div>
                          </div>
                        ) : (
                          <span className="text-secondary fst-italic small">No component chosen</span>
                        )}
                      </td>
                      <td className="text-end fw-bold text-neon">
                        {item ? formatINR(item.price) : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Total Cost Breakdown Box */}
          <div className="row justify-content-end mb-4">
            <div className="col-md-6 col-lg-5">
              <div className="p-3 rounded-3 bg-black border border-secondary border-opacity-50">
                <div className="d-flex justify-content-between text-secondary mb-2">
                  <span>Hardware Subtotal:</span>
                  <span className="text-light fw-semibold">{formatINR(totals.subtotal)}</span>
                </div>

                {includeGst ? (
                  <div className="d-flex justify-content-between text-secondary mb-2">
                    <span>GST (18% Goods & Services Tax):</span>
                    <span className="text-info fw-semibold">{formatINR(totals.gstAmount)}</span>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between text-secondary small mb-2">
                    <span>GST (18%):</span>
                    <span className="text-secondary">Not Included (Toggle in Builder)</span>
                  </div>
                )}

                <hr className="my-2 border-secondary border-opacity-25" />

                <div className="d-flex justify-content-between align-items-baseline">
                  <span className="fs-5 text-white fw-bold">Grand Total:</span>
                  <span className="fs-3 fw-bold text-gradient">{formatINR(totals.grandTotal)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Project Footer Note */}
          <div className="p-3 rounded bg-dark border border-secondary border-opacity-25 text-secondary small text-center">
            <p className="mb-1">
              <strong>College Project Submission:</strong> Gaming PC Builder Application.
            </p>
            <p className="mb-0" style={{ fontSize: '0.75rem' }}>
              Built with React.js, Bootstrap 5, Vite, and Browser LocalStorage. All prices and specifications are mock illustrative figures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildSummary;
