import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { COMPONENTS_DATA } from '../data/componentsData';
import { PRESET_BUILDS } from '../data/presetBuilds';
import { calculateTotals } from '../utils/priceCalculator';
import { checkCompatibility } from '../utils/compatibilityChecker';
import {
  getSavedBuilds,
  saveBuild as storageSaveBuild,
  deleteBuild as storageDeleteBuild,
  renameBuild as storageRenameBuild,
  getUserPreferences,
  saveUserPreferences
} from '../utils/storage';

const BuilderContext = createContext();

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
};

export const BuilderProvider = ({ children }) => {
  // Load preferences
  const initialPrefs = getUserPreferences();

  // Selected components map: { cpu: object, gpu: object, ... }
  const [selectedComponents, setSelectedComponents] = useState(() => {
    // Start with a friendly balanced starter or empty
    const saved = localStorage.getItem('current_active_build');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {};
      }
    }
    return {};
  });

  const [buildName, setBuildName] = useState('My Custom Gaming Rig');
  const [budget, setBudget] = useState(initialPrefs.budget || 100000);
  const [includeGst, setIncludeGst] = useState(initialPrefs.includeGst || false);
  const [savedBuilds, setSavedBuilds] = useState(() => getSavedBuilds());
  const [toastMessage, setToastMessage] = useState(null);

  // Sync active build with localStorage
  useEffect(() => {
    localStorage.setItem('current_active_build', JSON.stringify(selectedComponents));
  }, [selectedComponents]);

  // Sync user preferences
  useEffect(() => {
    saveUserPreferences({ budget, includeGst });
  }, [budget, includeGst]);

  // Flash toast notification helper
  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Select or replace component
  const selectComponent = (category, component) => {
    setSelectedComponents(prev => ({
      ...prev,
      [category]: component
    }));
    showToast(`Added ${component.name} to your build!`, 'info');
  };

  // Remove component
  const removeComponent = (category) => {
    setSelectedComponents(prev => {
      const updated = { ...prev };
      delete updated[category];
      return updated;
    });
  };

  // Clear entire build
  const clearBuild = () => {
    setSelectedComponents({});
    showToast('Cleared all selected components.', 'warning');
  };

  // Load a preset build
  const loadPreset = (presetId) => {
    const preset = PRESET_BUILDS.find(p => p.id === presetId);
    if (!preset) return false;

    const newBuild = {};
    Object.entries(preset.components).forEach(([category, componentId]) => {
      const found = COMPONENTS_DATA[category]?.find(item => item.id === componentId);
      if (found) {
        newBuild[category] = found;
      }
    });

    setSelectedComponents(newBuild);
    setBuildName(preset.title);
    showToast(`Loaded "${preset.title}" successfully!`, 'success');
    return true;
  };

  // Load a saved build
  const loadSavedBuild = (build) => {
    if (!build || !build.components) return;
    setSelectedComponents(build.components);
    setBuildName(build.name || 'Loaded Build');
    showToast(`Loaded "${build.name}" into PC Builder!`, 'success');
  };

  // Save current build to storage
  const saveCurrentBuild = (customName) => {
    const name = (customName || buildName || 'Custom Gaming Rig').trim();
    const totals = calculateTotals(selectedComponents, includeGst);
    
    if (totals.count === 0) {
      showToast('Cannot save an empty build! Please select some components first.', 'danger');
      return null;
    }

    const newRecord = storageSaveBuild({
      name,
      components: selectedComponents,
      total: totals.grandTotal,
      componentCount: totals.count,
      budget
    });

    if (newRecord) {
      setSavedBuilds(getSavedBuilds());
      showToast(`Build "${name}" saved to your browser!`, 'success');
      return newRecord;
    }
    return null;
  };

  // Delete saved build
  const removeSavedBuild = (id) => {
    storageDeleteBuild(id);
    setSavedBuilds(getSavedBuilds());
    showToast('Build deleted from saved list.', 'info');
  };

  // Rename saved build
  const updateSavedBuildName = (id, newName) => {
    storageRenameBuild(id, newName);
    setSavedBuilds(getSavedBuilds());
    showToast('Build renamed successfully.', 'success');
  };

  // Derived calculations
  const totals = useMemo(() => {
    return calculateTotals(selectedComponents, includeGst);
  }, [selectedComponents, includeGst]);

  const compatibility = useMemo(() => {
    return checkCompatibility(selectedComponents);
  }, [selectedComponents]);

  const budgetAnalysis = useMemo(() => {
    const grandTotal = totals.grandTotal;
    const remaining = budget - grandTotal;
    const isOverBudget = remaining < 0;
    const percentUsed = budget > 0 ? Math.min(100, Math.round((grandTotal / budget) * 100)) : 0;
    const actualPercent = budget > 0 ? (grandTotal / budget) * 100 : 0;

    return {
      budget,
      grandTotal,
      remaining,
      isOverBudget,
      percentUsed,
      actualPercent,
      overAmount: Math.max(0, grandTotal - budget)
    };
  }, [totals.grandTotal, budget]);

  const value = {
    selectedComponents,
    buildName,
    setBuildName,
    budget,
    setBudget,
    includeGst,
    setIncludeGst,
    savedBuilds,
    toastMessage,
    showToast,
    selectComponent,
    removeComponent,
    clearBuild,
    loadPreset,
    loadSavedBuild,
    saveCurrentBuild,
    removeSavedBuild,
    updateSavedBuildName,
    totals,
    compatibility,
    budgetAnalysis
  };

  return <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>;
};
