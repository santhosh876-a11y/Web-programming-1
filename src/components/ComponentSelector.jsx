import React, { useState, useMemo } from 'react';
import { CATEGORIES, COMPONENTS_DATA } from '../data/componentsData';
import { useBuilder } from '../context/BuilderContext';
import ComponentCard from './ComponentCard';
import SearchFilters from './SearchFilters';

const ComponentSelector = () => {
  const { selectedComponents, selectComponent, removeComponent } = useBuilder();
  const [activeCategory, setActiveCategory] = useState('cpu');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  // Active category raw data
  const categoryData = useMemo(() => {
    return COMPONENTS_DATA[activeCategory] || [];
  }, [activeCategory]);

  // Extract unique brands for active category
  const availableBrands = useMemo(() => {
    const brands = new Set(categoryData.map(item => item.brand).filter(Boolean));
    return Array.from(brands);
  }, [categoryData]);

  // Filter and sort items
  const filteredComponents = useMemo(() => {
    let result = [...categoryData];

    // Search query
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      result = result.filter(item =>
        item.name.toLowerCase().includes(query) ||
        (item.brand && item.brand.toLowerCase().includes(query)) ||
        (item.specs && item.specs.toLowerCase().includes(query))
      );
    }

    // Brand filter
    if (selectedBrand !== 'all') {
      result = result.filter(item => item.brand === selectedBrand);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryData, searchTerm, selectedBrand, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedBrand('all');
    setSortBy('default');
  };

  const activeCategoryMeta = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <div className="component-selector-container">
      {/* Category Navigation Pills / Tabs */}
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h5 className="brand-font text-white mb-0">
            <i className="bi bi-grid-fill text-info me-2"></i>Hardware Categories
          </h5>
          <span className="small text-secondary">
            {Object.keys(selectedComponents).length} of {CATEGORIES.length} parts chosen
          </span>
        </div>

        <div className="row g-2">
          {CATEGORIES.map(cat => {
            const isSelected = !!selectedComponents[cat.id];
            const isActive = activeCategory === cat.id;

            return (
              <div key={cat.id} className="col-6 col-md-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    handleResetFilters();
                  }}
                  className={`category-tab d-flex align-items-center justify-content-between ${
                    isActive ? 'active' : ''
                  }`}
                >
                  <div className="d-flex align-items-center gap-2 text-truncate">
                    <i className={`bi ${cat.icon} fs-5 ${isActive ? 'text-neon' : 'text-secondary'}`}></i>
                    <div className="text-start text-truncate">
                      <div className={`small fw-bold text-truncate ${isActive ? 'text-white' : 'text-light'}`}>
                        {cat.name.split(' ')[0]}
                      </div>
                      <div className="text-secondary text-truncate" style={{ fontSize: '0.7rem' }}>
                        {isSelected ? selectedComponents[cat.id].brand : 'Not selected'}
                      </div>
                    </div>
                  </div>

                  {isSelected ? (
                    <span className="badge rounded-pill bg-success" title="Component selected">
                      <i className="bi bi-check-lg"></i>
                    </span>
                  ) : (
                    <span className="badge rounded-pill bg-dark border border-secondary text-secondary">
                      &bull;
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Category Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 p-3 rounded-3 bg-dark border border-secondary border-opacity-50">
        <div>
          <h4 className="text-white mb-1 d-flex align-items-center gap-2">
            <i className={`bi ${activeCategoryMeta?.icon} text-neon`}></i>
            <span>{activeCategoryMeta?.name}</span>
          </h4>
          <p className="text-secondary small mb-0">{activeCategoryMeta?.description}</p>
        </div>

        {selectedComponents[activeCategory] && (
          <div className="mt-2 mt-md-0 d-flex align-items-center gap-2 p-2 rounded bg-black border border-info border-opacity-50">
            <span className="small text-secondary">Selected:</span>
            <span className="small text-white fw-semibold">{selectedComponents[activeCategory].name}</span>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger py-0 px-2"
              onClick={() => removeComponent(activeCategory)}
              title="Remove component"
            >
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
        )}
      </div>

      {/* Search and Filters Bar */}
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        availableBrands={availableBrands}
        onReset={handleResetFilters}
      />

      {/* Component Grid */}
      {filteredComponents.length > 0 ? (
        <div className="row g-3">
          {filteredComponents.map(item => {
            const isSelected = selectedComponents[activeCategory]?.id === item.id;
            return (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <ComponentCard
                  component={item}
                  isSelected={isSelected}
                  onSelect={() => selectComponent(activeCategory, item)}
                  onRemove={() => removeComponent(activeCategory)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="gaming-card p-5 text-center my-4">
          <i className="bi bi-search text-secondary display-4 mb-3 d-block"></i>
          <h5 className="text-white">No Components Found</h5>
          <p className="text-secondary small col-md-6 mx-auto mb-3">
            We couldn't find any {activeCategoryMeta?.name} matching your search filters. Try adjusting your brand or keyword query.
          </p>
          <button type="button" className="btn btn-sm btn-outline-neon" onClick={handleResetFilters}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ComponentSelector;
