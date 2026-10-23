// Browser LocalStorage management utilities for Gaming PC Builder

const STORAGE_KEY_BUILDS = 'gaming_pc_builder_saved_builds';
const STORAGE_KEY_PREFS = 'gaming_pc_builder_preferences';

/**
 * Get all saved builds from LocalStorage safely
 * @returns {Array} List of build objects
 */
export const getSavedBuilds = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BUILDS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse saved builds from LocalStorage:', error);
    return [];
  }
};

/**
 * Save a new build or update an existing one
 * @param {Object} build - { id?, name, components, total, createdAt }
 * @returns {Object} saved build
 */
export const saveBuild = (build) => {
  try {
    const builds = getSavedBuilds();
    const id = build.id || 'build-' + Date.now();
    const timestamp = build.createdAt || new Date().toISOString();

    const buildRecord = {
      ...build,
      id,
      createdAt: timestamp,
      updatedAt: new Date().toISOString()
    };

    const existingIndex = builds.findIndex(b => b.id === id);
    if (existingIndex >= 0) {
      builds[existingIndex] = buildRecord;
    } else {
      builds.unshift(buildRecord);
    }

    localStorage.setItem(STORAGE_KEY_BUILDS, JSON.stringify(builds));
    return buildRecord;
  } catch (error) {
    console.error('Failed to save build to LocalStorage:', error);
    return null;
  }
};

/**
 * Delete a build by ID
 * @param {string} id
 * @returns {boolean}
 */
export const deleteBuild = (id) => {
  try {
    const builds = getSavedBuilds();
    const filtered = builds.filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEY_BUILDS, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Failed to delete build:', error);
    return false;
  }
};

/**
 * Rename an existing build
 * @param {string} id
 * @param {string} newName
 */
export const renameBuild = (id, newName) => {
  try {
    const builds = getSavedBuilds();
    const target = builds.find(b => b.id === id);
    if (target) {
      target.name = newName.trim() || 'Untitled Build';
      target.updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY_BUILDS, JSON.stringify(builds));
      return target;
    }
    return null;
  } catch (error) {
    console.error('Failed to rename build:', error);
    return null;
  }
};

/**
 * Get saved user preferences (default budget, GST mode)
 */
export const getUserPreferences = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFS);
    if (!raw) return { budget: 100000, includeGst: false };
    return JSON.parse(raw);
  } catch {
    return { budget: 100000, includeGst: false };
  }
};

/**
 * Save user preferences
 */
export const saveUserPreferences = (prefs) => {
  try {
    localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(prefs));
  } catch (error) {
    console.error('Failed to save preferences:', error);
  }
};
