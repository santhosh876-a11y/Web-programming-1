import React from 'react';

const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  maxPrice,
  setMaxPrice,
  priceLimit,
  selectedBrand,
  setSelectedBrand,
  availableBrands,
  onReset
}) => {
  return (
    <div className="gaming-card p-3 mb-4">
      <div className="row g-3 align-items-center">
        {/* Search input */}
        <div className="col-12 col-md-4">
          <label htmlFor="search-input" className="form-label small text-secondary mb-1">
            <i className="bi bi-search me-1 text-info"></i> Search Hardware
          </label>
          <div className="input-group input-group-sm">
            <input
              id="search-input"
              type="text"
              className="form-control bg-dark border-secondary text-light"
              placeholder="Search by name (e.g. Ryzen, RTX 4060)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setSearchTerm('')}
                title="Clear search"
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </div>
        </div>

        {/* Brand filter */}
        <div className="col-6 col-md-3">
          <label htmlFor="brand-filter" className="form-label small text-secondary mb-1">
            <i className="bi bi-tag me-1 text-info"></i> Filter by Brand
          </label>
          <select
            id="brand-filter"
            className="form-select form-select-sm bg-dark border-secondary text-light"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="all">All Brands</option>
            {availableBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by */}
        <div className="col-6 col-md-3">
          <label htmlFor="sort-by" className="form-label small text-secondary mb-1">
            <i className="bi bi-arrow-down-up me-1 text-info"></i> Sort by Price
          </label>
          <select
            id="sort-by"
            className="form-select form-select-sm bg-dark border-secondary text-light"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Featured / Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Reset button */}
        <div className="col-12 col-md-2 d-flex align-items-end">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary w-100 py-1"
            onClick={onReset}
          >
            <i className="bi bi-arrow-counterclockwise me-1"></i> Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
