import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router-dom';
import { fetchProducts } from '../api/products.api';
import { useDebounce } from '../hooks/useDebounce';
import LoadingSkeleton from '../components/skeleton/LoadingSkeleton';
import EmptyState from '../components/common/EmptyState';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ITEMS_PER_PAGE = 8;

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlSearch = searchParams.get('q') || '';

  const [search, setSearch] = useState(urlSearch);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(search, 400);

  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', debouncedSearch, skip],
    queryFn: () => fetchProducts({ search: debouncedSearch, limit: ITEMS_PER_PAGE, skip }),
    keepPreviousData: true,
  });

  const products = data?.products || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  if (isLoading && currentPage === 1 && !debouncedSearch) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="main-container">
        <div className="error-alert">
          <p>Failed to load products. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="page-header">
        <h1>Products</h1>
        <p>Browse our full catalog — {total} products found</p>
      </div>

      <div className="search-bar">
        <form className="search-form" onSubmit={(e) => { e.preventDefault(); }}>
          <div className="search-input-wrapper">
            <svg className="search-icon-small" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="search"
              placeholder="Search products..."
              className="search-field"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </form>
      </div>

      {products.length === 0 ? (
        <EmptyState message="No products found. Try a different search term." />
      ) : (
        <>
          <div className="cards-grid">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                description={product.description?.substring(0, 80) + '...'}
                image={product.thumbnail}
              >
                <div className="card-actions">
                  <span className="price">${product.price}</span>
                  <span className="badge">★ {product.rating}</span>
                  <Link to={`/products/${product.id}`}>
                    <Button>Details</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <Button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
