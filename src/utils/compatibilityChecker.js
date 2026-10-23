// Hardware compatibility validation engine
// Checks sockets, RAM generations, form factors, and power budgets

/**
 * Validates hardware compatibility among currently selected components.
 * @param {Object} components - { cpu, gpu, motherboard, ram, storage, psu, case, cooler }
 * @returns {Object} { isCompatible: boolean, issues: Array, estimatedPower: number }
 */
export const checkCompatibility = (components = {}) => {
  const issues = [];
  const { cpu, gpu, motherboard, ram, psu, case: pcCase, cooler } = components;

  // 1. Calculate Estimated Power Requirements
  const cpuTdp = cpu?.tdp || 65;
  const gpuTdp = gpu?.tdp || (gpu ? 150 : 0);
  const baseSystemWattage = 100; // Motherboard, RAM, SSD, cooling, LEDs
  const estimatedPower = (cpu ? cpuTdp : 0) + gpuTdp + (cpu || gpu ? baseSystemWattage : 0);
  const recommendedPsuWattage = Math.round(estimatedPower * 1.3);

  // 2. Check CPU and Motherboard Socket Compatibility
  if (cpu && motherboard) {
    if (cpu.socket && motherboard.socket && cpu.socket !== motherboard.socket) {
      issues.push({
        type: 'error',
        severity: 'danger',
        category: 'Processor & Motherboard',
        message: `Socket Incompatibility: ${cpu.name} uses Socket ${cpu.socket}, but ${motherboard.name} has Socket ${motherboard.socket}. These cannot be physically installed together.`
      });
    }
  }

  // 3. Check RAM Type Compatibility with Motherboard
  if (motherboard && ram) {
    const mbRamType = motherboard.ramType || '';
    const ramType = ram.ramType || '';

    // If motherboard supports DDR4 only and RAM is DDR5, or vice-versa
    if (mbRamType && ramType && !mbRamType.includes(ramType)) {
      issues.push({
        type: 'error',
        severity: 'danger',
        category: 'Motherboard & RAM',
        message: `Memory Standard Incompatibility: ${motherboard.name} requires ${mbRamType} memory, but you selected ${ram.name} (${ramType}). RAM pins are physically different.`
      });
    }
  }

  // 4. Check Motherboard Form Factor & Cabinet Support
  if (motherboard && pcCase) {
    const supportedForms = pcCase.supportedFormFactors || [];
    const mbForm = motherboard.formFactor;

    if (mbForm && supportedForms.length > 0 && !supportedForms.includes(mbForm)) {
      issues.push({
        type: 'error',
        severity: 'danger',
        category: 'Cabinet & Motherboard Size',
        message: `Form Factor Mismatch: ${pcCase.name} only fits [${supportedForms.join(', ')}] boards, but ${motherboard.name} is a full ${mbForm} board.`
      });
    }
  }

  // 5. Check CPU Cooler Socket Support
  if (cpu && cooler) {
    const supportedSockets = cooler.supportedSockets || [];
    if (cpu.socket && supportedSockets.length > 0 && !supportedSockets.includes(cpu.socket)) {
      issues.push({
        type: 'error',
        severity: 'danger',
        category: 'CPU Cooler Mounting',
        message: `Cooler Bracket Mismatch: ${cooler.name} mounting brackets do not support ${cpu.socket} for ${cpu.name}.`
      });
    }

    // Check cooler TDP rating against CPU TDP
    if (cooler.tdpRating && cpu.tdp && cooler.tdpRating < cpu.tdp) {
      issues.push({
        type: 'warning',
        severity: 'warning',
        category: 'Thermal Throttling Alert',
        message: `High Thermal Load: ${cpu.name} has a TDP of ${cpu.tdp}W, but ${cooler.name} is rated for ${cooler.tdpRating}W. It may run hotter during intense gaming sessions.`
      });
    }
  }

  // 6. Check Power Supply (PSU) Capacity
  if (psu) {
    const psuWattage = psu.wattage || 0;

    if (psuWattage < estimatedPower) {
      issues.push({
        type: 'error',
        severity: 'danger',
        category: 'Power Supply Deficit',
        message: `Critical Power Shortage: System estimated draw is ~${estimatedPower}W, but ${psu.name} only delivers ${psuWattage}W. The PC will shut down under load.`
      });
    } else if (psuWattage < recommendedPsuWattage) {
      issues.push({
        type: 'warning',
        severity: 'warning',
        category: 'PSU Headroom Advisory',
        message: `Low Power Headroom: Total estimated draw is ~${estimatedPower}W. We recommend at least ${recommendedPsuWattage}W for peak transient spikes and longevity.`
      });
    }
  }

  const hasErrors = issues.some(i => i.type === 'error');
  const hasWarnings = issues.some(i => i.type === 'warning');

  return {
    isCompatible: !hasErrors,
    hasWarnings,
    estimatedPower,
    recommendedPsuWattage,
    issues
  };
};
