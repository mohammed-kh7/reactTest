import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/products.api';
import { useDebounce } from '../hooks/useDebounce';
import Input from '../components/ui/Input';
import LoadingSkeleton from '../components/skeleton/LoadingSkeleton';
import EmptyState from '../components/common/EmptyState';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ITEMS_PER_PAGE = 8;

const Products = () => {
  const [search, setSearch] = useState('');
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
      <div className="error-alert">
        <p>Failed to load products. Please try again later.</p>
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
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          type="search"
        />
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
